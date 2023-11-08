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
      className="bg-white text-black flex h-full flex-1 flex-col-reverse gap-4 px-6"
    >
      <div ref={scrollDownRef} />
      <div className="flex justify-end">
        <div className="w-fit bg-black text-white py-2 px-4 rounded-s-lg rounded-t-lg">
          meassages
        </div>
      </div>
      <div className="flex justify-start">
        <div className="w-fit bg-black text-white py-2 px-4 rounded-e-lg rounded-t-lg">
          meassages
        </div>
      </div>
    </div>
  );
};

export default Messages;
