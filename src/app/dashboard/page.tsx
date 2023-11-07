import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { AlignJustify, FileImage } from "lucide-react";
import Logout from "@/components/Logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const page = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log(user);

  return (
    <div className="flex">
      <div className="flex md:hidden h-screen w-full mx-1 lg:max-w-xs md:max-w-[22rem] grow flex-col overflow-y-auto">
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
      <div className="md:flex hidden">Hello</div>
    </div>
  );
};

export default page;
