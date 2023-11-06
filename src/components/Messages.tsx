"use client";

// import { Message } from "@/lib/validations/message";
// import { format } from "date-fns";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";

// interface MessagesProps {
//   initialMessages: Message[];
//   sessionId: string;
//   chatId: string;
//   sessionImg: string | null | undefined;
//   chatPartner: User;
// }

const Messages = ({}) => {
  //   const [messages, setMessages] = useState<Message[]>(initialMessages);

  const scrollDownRef = useRef<HTMLDivElement | null>(null);

  //   const formatTimestamp = (timestamp: number) => {
  //     return format(timestamp, "HH:mm");
  //   };

  return (
    <div
      id="messages"
      className="bg-white text-black rounded-xl flex h-full flex-1 flex-col-reverse gap-4 px-6 overflow-y-auto"
    >
      <div ref={scrollDownRef} />
      meassages
    </div>
  );
};

export default Messages;
