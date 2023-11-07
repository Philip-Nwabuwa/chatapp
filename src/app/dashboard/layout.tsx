import MobileChatLayout from "@/components/modules/MobileChatLayout";
import { Input } from "@/components/ui/input";
import {
  AlignJustify,
  Bell,
  MessagesSquare,
  Sparkles,
  UserCircle,
  UserPlus,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-slate-300 ">
      <div className="w-full flex h-screen">
        <div className="bg-black text-white lg:flex hidden rounded-r-xl h-full w-full lg:max-w-[8rem] grow flex-col gap-y-5 overflow-y-auto px-6">
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

        <div className="md:flex hidden h-full w-full mx-1 lg:max-w-xs md:max-w-[22rem] grow flex-col overflow-y-auto">
          <div className="bg-white rounded-xl w-full h-[4.5rem] md:max-h-[6rem] mb-1">
            <nav className="flex h-full items-center justify-between gap-6 px-2">
              <div className="lg:hidden flex">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <AlignJustify />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              DevChat
              <Input className="rounded-full" placeholder="Search"></Input>
            </nav>
          </div>

          <div className="bg-white rounded-xl w-full h-full">
            <nav className="flex flex-1 flex-col px-2">
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
