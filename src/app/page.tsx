import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/login">Login Page</Link>
    </div>
  );
};

export default page;
