"use Client";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "lucide-react";
import Link from "next/link";

const ChatList = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-white flex flex-col h-full w-full">
      <section className="flex-grow pt-3">
        <Link href="/dashboard/chat/1">
          <ul
            role="list"
            className="flex w-full justify-between items-center gap-y-7 border-b border-gray-200"
          >
            <li className="flex items-center gap-3 py-3">
              <Avatar>
                {session?.user?.image && (
                  <AvatarImage src={`${session?.user.image}`} alt="Preview" />
                )}
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-base font-medium">{session?.user?.name}</h3>
                <p className="lg:w-[14rem] md:w-[11rem] w-[13rem] text-sm text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap">
                  Last Message
                  sjjjjjjjjjjjjjjjjjjjjjjjjssssssjjjjjjjjjjjjjjjjjjjjjj
                </p>
              </div>
            </li>
            <div>
              <p className="text-sm text-gray-500">10:27 AM</p>
              <div className="flex items-center justify-end  ">
                <p className="flex items-center justify-center h-[1.5rem] w-[1.5rem] text-[10px] bg-black text-white rounded-full">
                  1
                </p>
              </div>
            </div>
          </ul>
        </Link>
      </section>
    </div>
  );
};

export default ChatList;
