import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginForm from "@/components/modules/LoginForm";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user?.email) {
    redirect("/dashboard");
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default page;
