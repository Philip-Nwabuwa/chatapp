"use Client";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "lucide-react";
import Link from "next/link";

const ChatList = async () => {
  const session = await getServerSession(authOptions);
  return (
    <section className="w-full pt-4">
      <Link href="/dashboard/chat/1">
        <ul
          role="list"
          className="flex w-full justify-between items-center gap-y-7 border-b pb-2 border-gray-200"
        >
          <li className="flex items-center gap-3">
            <Avatar>
              {session?.user?.image && (
                <AvatarImage src={`${session?.user.image}`} alt="Preview" />
              )}
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{session?.user?.name}</h3>
              <p className="lg:w-[11rem] w-60 text-sm text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap">
                Last Message
                sjjjjjjjjjjjjjjjjjjjjjjjjssssssjjjjjjjjjjjjjjjjjjjjjj
              </p>
            </div>
          </li>
          <div>
            <p className="text-sm text-gray-500">10:27 AM</p>
            <p className="flex justify-end">1</p>
          </div>
        </ul>
      </Link>
    </section>
  );
};

export default ChatList;
