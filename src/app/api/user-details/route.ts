import { connectMongoDB } from "@/lib/mongooseDB";
import User from "@/model/User";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  console.log({ email });

  try {
    await connectMongoDB();
    const user = await User.findOne({ email });

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
