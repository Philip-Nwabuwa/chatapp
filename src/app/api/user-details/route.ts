import { connectMongoDB } from "@/lib/mongooseDB";
import User from "@/model/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectMongoDB();
    const user = await User.findOne({ email: "philipnwabuwa@gmail.com" });

    if (!user) {
      return NextResponse.json({ status: 404, body: "User not found" });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, body: "Internal Server Error" });
  }
}
