import MobileChatLayout from "@/components/modules/MobileChatLayout";
import { Input } from "@/components/ui/input";
import {
  Bell,
  MessagesSquare,
  Sparkles,
  UserCircle,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-slate-300 ">
      <div className="w-full flex h-screen">
        <div className="md:hidden">
          <MobileChatLayout />
        </div>

        <div className="bg-black text-white rounded-r-xl hidden md:flex h-full w-full md:max-w-[6rem] lg:max-w-[8rem] grow flex-col gap-y-5 overflow-y-auto border-r  px-6">
          <div className="h-full grid grid-rows-3 ">
            <div className="flex items-start justify-center pt-6">
              <Link href="/dashboard">
                <Sparkles />
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-10">
              <MessagesSquare />
              <Bell />
              <Link href="/dashboard/add" className="cursor-pointer">
                <UserPlus />
              </Link>
            </div>
            <div className="flex items-end justify-center pb-6">
              <UserCircle />
            </div>
          </div>
        </div>

        <div className="hidden md:flex h-full w-full mx-1 lg:max-w-xs md:max-w-[12rem] grow flex-col overflow-y-auto">
          <div className="bg-white rounded-xl w-full h-full md:max-h-[6rem] mb-1">
            <nav className="flex">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <Link href="/dashboard/chat/1">
                  <li>sideChat1</li>
                </Link>
              </ul>
            </nav>
          </div>

          <div className="bg-white rounded-xl w-full h-full">
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <Link href="/dashboard/chat/1">
                  <li>sideChat2</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>

        <aside className="rounded-l-xl max-h-screen w-full">{children}</aside>
      </div>
    </div>
  );
};

export default layout;
