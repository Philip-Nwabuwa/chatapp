import { connectMongoDB } from "@/lib/mongooseDB";
import User from "@/model/User";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import AddFriend from "@/model/AddFriend";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { email } = data;
  console.log(data.email);

  try {
    await connectMongoDB();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    if (data.email === session.user?.email) {
      return NextResponse.json(
        { error: "You cannot add yourself as a friend" },
        {
          status: 400,
        }
      );
    }

    const userIdString = user._id.toString();
    console.log(userIdString);

    try {
      await AddFriend.create({
        _id: userIdString,
        incoming_friend_requests: [session.user?.email],
      });
      return NextResponse.json(email);
    } catch (error) {
      console.error("Error adding friend request:", error);
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, body: "Internal Server Error" });
  }
}
