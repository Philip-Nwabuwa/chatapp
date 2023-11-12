import { connectMongoDB } from "@/lib/mongooseDB";
import User from "@/model/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  try {
    await connectMongoDB();
    const user = await User.findOne(body);

    if (!user) {
      return NextResponse.json({ status: 404, body: "User not found" });
    }

    const filteredUser = {
      email: user.email,
      name: user.name,
      image: user.image,
    };

    return NextResponse.json(filteredUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, body: "Internal Server Error" });
  }
}
