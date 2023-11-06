import { connectMongoDB } from "@/lib/mongooseDB";
import User from "@/model/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);

  const { name, email, image } = data;

  if (!name || !email) {
    return NextResponse.json(
      { message: "Name and email are required" },
      { status: 400 }
    );
  }

  try {
    await connectMongoDB();
    await User.create({ name, email, image });
    console.log(name, email, image);

    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error registering user" },
      { status: 500 }
    );
  }
}
