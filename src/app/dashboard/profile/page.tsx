"use client";
import { useUserDetails } from "@/hooks/useUserDetails";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const page = () => {
  const { data: user } = useQuery({
    queryKey: ["userDetails"],
    queryFn: () => useUserDetails(),
  });
  return <div>{user?.email}</div>;
};

export default page;
