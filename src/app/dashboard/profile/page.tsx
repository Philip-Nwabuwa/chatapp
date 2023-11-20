"use client";
import { useUserDetails } from "@/hooks/useUserDetails";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Page = () => {
  const userDetails = useUserDetails();

  const { data: user } = useQuery({
    queryKey: ["userDetails"],
    queryFn: () => userDetails,
  });
  return <div>{user?.email}</div>;
};

export default Page;
