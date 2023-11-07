// import ChatInput from "@/components/ChatInput";
// import Messages from "@/components/Messages";
// import { fetchRedis } from "@/helpers/redis";
// import { messageArrayValidator } from "@/lib/validations/message";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Messages from "@/components/Messages";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  FileImage,
  Mic,
  MoreHorizontal,
  Paperclip,
  Phone,
  Search,
  Send,
  SmilePlus,
} from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// The following generateMetadata functiion was written after the video and is purely optional
export async function generateMetadata({
  params,
}: {
  params: { chatId: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session) notFound();

  const [userId1, userId2] = params.chatId.split("--");
  const { user } = session;

  const chatPartnerId = user?.email === userId1 ? userId2 : userId1;

  return { title: `Dev-Chat | ${chatPartnerId} chat` };
}

interface PageProps {
  params: {
    chatId: string;
  };
}

async function getChatMessages(chatId: string) {
  try {
  } catch (error) {
    notFound();
  }
}

const page = async ({ params }: PageProps) => {
  const { chatId } = params;
  const session = await getServerSession(authOptions);
  if (!session) notFound();

  const { user } = session;

  const [userId1, userId2] = chatId.split("--");

  //   if (user.id !== userId1 && user.id !== userId2) {
  //     notFound();
  //   }

  //   const chatPartnerId = user.id === userId1 ? userId2 : userId1;
  // new

  //   const chatPartnerRaw = (await fetchRedis(
  //     "get",
  //     `user:${chatPartnerId}`
  //   )) as string;
  //   const chatPartner = JSON.parse(chatPartnerRaw) as User;
  //   const initialMessages = await getChatMessages(chatId);

  return (
    <div className="flex-1 justify-between flex flex-col h-full">
      <div className="bg-white rounded-xl w-full h-[4.5rem] md:max-h-[6rem] mb-1">
        <div className="h-full flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="flex md:hidden cursor-pointer">
              <ArrowLeft />
            </Link>
            <Avatar>
              {user?.image && (
                <AvatarImage src={`${user.image}`} alt="Preview" />
              )}
              <AvatarFallback>
                <FileImage />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p>{user?.name}</p>
              <p className="text-xs">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex">Profile</div>
            <div>
              <Search />
            </div>
            <div className="hidden lg:flex">
              <Phone />
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreHorizontal />
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
          </div>
        </div>
      </div>
      <Messages />
      <div className="bg-white rounded-xl w-full h-[4.5rem] md:max-h-[6rem] mt-1">
        <div className="h-full flex flex-row items-center gap-2 px-6">
          <Paperclip />
          <Input></Input>
          <SmilePlus />
          <Mic />
          <Send />
        </div>
      </div>
    </div>
  );
};

export default page;
