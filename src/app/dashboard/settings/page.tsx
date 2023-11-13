import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/components/modules/User";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  if (!session?.user?.email) {
    redirect("/login");
  }

  return (
    <div>
      <User />
    </div>
  );
};

export default page;
