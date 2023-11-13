import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  if (userEmail) {
    redirect("/dashboard");
  }

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/login">Login Page</Link>
    </div>
  );
};

export default page;
