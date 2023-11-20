"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserDetails } from "@/hooks/useUserDetails";
import { useQuery } from "@tanstack/react-query";
import { UserCircle2 } from "lucide-react";

const UserAvatar = () => {
  const userDetails = useUserDetails();

  const { data: user } = useQuery({
    queryKey: ["userDetails"],
    queryFn: () => userDetails,
  });
  return (
    <div className="border-2 border-solid border-white rounded-full">
      <Avatar>
        {user?.image && <AvatarImage src={`${user.image}`} alt="Preview" />}
        <AvatarFallback>
          <UserCircle2 className="text-black" />
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
