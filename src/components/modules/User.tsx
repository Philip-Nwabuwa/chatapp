"use client";

import { useUserDetails } from "@/hooks/useUserDetails";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const User = () => {
  const userDetails = useUserDetails();

  const { data: user } = useQuery({
    queryKey: ["userDetails"],
    queryFn: () => userDetails,
  });

  return (
    <div>
      <h1>Email: {user?.email}</h1>
      <Image width={300} height={300} src={user?.image} alt={""} />
    </div>
  );
};
export default User;
