"use client";
import { SetStateAction, useState } from "react";
import { Input } from "./ui/input";
import { Mic, Paperclip, Send, SmilePlus } from "lucide-react";

const MessageInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="bg-white w-full h-[4.5rem] md:max-h-[6rem] mt-1">
      <div className="h-full flex flex-row items-center gap-4 px-6">
        <Paperclip />
        <SmilePlus />
        <Input value={inputValue} onChange={handleInputChange}></Input>
        <div
          className={`transition-transform transform ${
            inputValue ? "scale-110" : "scale-100"
          }`}
        >
          {inputValue ? <Send /> : <Mic />}
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
