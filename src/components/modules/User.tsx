"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

const User = () => {
  const { data: user, isError } = useQuery({
    queryKey: ["userDetails"],
    queryFn: async () => {
      const response = await axios.post("/api/user-details");
      console.log(response.data);
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
