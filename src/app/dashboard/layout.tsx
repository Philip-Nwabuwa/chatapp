import { Input } from "@/components/ui/input";
import {
  Bell,
  LogOut,
  MessagesSquare,
  Plus,
  Settings,
  Sparkles,
  UserCircle,
  UserPlus,
} from "lucide-react";

import Link from "next/link";
import React, { ReactNode } from "react";
import ChatList from "@/components/modules/ChatList";
import Logout from "@/components/Logout";
import UserAvatar from "@/components/Avatar";

interface LayoutProps {
  children: ReactNode;
}

const layout = async ({ children }: LayoutProps) => {
  return (
    <div className="bg-slate-300 ">
      <div className="w-full flex h-screen">
        <div className="bg-black text-white lg:flex hidden h-full w-full lg:max-w-[8rem] grow flex-col gap-y-5 overflow-y-auto px-6">
          <div className="h-full grid grid-rows-3 ">
            <div className="flex items-start justify-center pt-6">
              <Link href="/dashboard">
                <Sparkles />
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-10">
              <MessagesSquare />
              <Link href="/dashboard/notification" className="cursor-pointer">
                <Bell />
              </Link>
              <Link href="/dashboard/add" className="cursor-pointer">
                <UserPlus />
              </Link>
              <Link href="/dashboard/settings" className="cursor-pointer">
                <Settings />
              </Link>
            </div>
            <div className="flex items-end justify-center cursor-pointer pb-6">
              <Link href="/dashboard/profile" className="cursor-pointer">
                <UserAvatar />
              </Link>
            </div>
          </div>
        </div>

        {/* mobile menu bar */}
        <div className="md:flex flex-col hidden h-full w-full mx-1 lg:max-w-[25rem] md:max-w-[22rem] overflow-y-auto">
          <div className="bg-white w-full mb-1">
            <nav className="flex !h-[4.5rem] !lg:h-[6rem] items-center justify-between gap-4 px-2">
              <h1>DevChats</h1>
              <div className="flex items-center gap-3">
                <Input
                  className="rounded-full lg:max-w-[13rem] max-w-[10rem]"
                  placeholder="Search"
                ></Input>
                <div className="bg-black text-white cursor-pointer flex items-center justify-center h-[2.5rem] w-[2.5rem] rounded-full">
                  <Plus />
                </div>
              </div>
            </nav>
          </div>

          {/* mobile chat list */}
          <div className="bg-white h-full w-full">
            <nav className="flex flex-1 flex-col px-2">
              <ChatList />
            </nav>
          </div>
        </div>

        <aside className="h-full max-h-screen w-full">{children}</aside>
      </div>
    </div>
  );
};

export default layout;
