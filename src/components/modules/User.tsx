"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

interface UserProps {
  email: string | null | undefined;
}

const User: React.FC<UserProps> = ({ email }) => {
  const { data: user } = useQuery({
    queryKey: ["userDetails"],
    queryFn: async () => {
      const response = await axios.post("/api/user-details", { email });
      return response.data;
    },
  });

  return (
    <div>
      <h1>Email: {user?.email}</h1>
      <Image width={300} height={300} src={user?.image} alt={""} />
    </div>
  );
};
export default User;
