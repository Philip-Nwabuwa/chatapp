import { connectMongoDB } from "@/lib/mongooseDB";
import User from "@/model/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { username: name, email, password, image } = data;

    await connectMongoDB();

    const emailExist = await User.findOne({ email }).select("_id");
    const userName = name.toLowerCase();
    const userNameExist = await User.findOne({ userName }).select("_id");

    console.log(emailExist, userNameExist);

    if (emailExist || userNameExist) {
      const message = emailExist
        ? "Email already exists"
        : "Username already exists";
      return NextResponse.json({ message }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword, image });

    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error registering user" },
      { status: 500 }
    );
  }
}
