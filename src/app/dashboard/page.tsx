import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { AlignJustify, FileImage, Pen, Plus, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import ChatList from "@/components/modules/ChatList";
import Link from "next/link";

const page = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log(user);

  return (
    <div className="flex">
      <div className="flex md:hidden h-screen w-full mx-1 lg:max-w-xs md:max-w-[22rem] grow flex-col overflow-y-auto">
        <div className="bg-white w-full mb-1">
          <nav className="flex !h-[4.5rem] !lg:h-[6rem] items-center justify-between gap-x-6 px-2">
            <div className="lg:hidden flex gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <AlignJustify />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-[1.5rem] ml-2">
                  <DropdownMenuLabel className="text-base">
                    My Account
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link
                      href="/dashboard/settings"
                      className="flex items-center justify-start gap-4"
                    >
                      <Settings />
                      <p className="text-base">Settings</p>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <h1 className="text-lg font-bold">Dev Chat</h1>
            </div>
            <Input
              className="rounded-full w-[13rem]"
              placeholder="Search"
            ></Input>
          </nav>
        </div>

        <div className="bg-white w-full h-full">
          <nav className="flex flex-1 flex-col px-2">
            <ChatList />
            <div className="bg-black text-white cursor-pointer z-10 flex items-center justify-center h-[4rem] w-[4rem] mb-3 mr-3 rounded-full absolute bottom-0 right-0">
              <Plus />
            </div>
          </nav>
        </div>
      </div>
      <div className="md:flex hidden bg-white text-black w-full h-screen">
        Hello
      </div>
    </div>
  );
};

export default page;
