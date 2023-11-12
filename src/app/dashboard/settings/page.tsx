import { useUser } from "@/hooks/userauth";
import axios from "axios";
import Image from "next/image";
import React from "react";

const page = async () => {
  const userDetail = await useUser();
  const user = userDetail?.user;
  const email = user?.email;
  const url = `${process.env.NEXTAUTH_URL}/api/user-details`;
  axios
    .post(url)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <section>
      {user?.image && (
        <Image
          alt="Profile Image"
          width={100}
          height={100}
          src={`${user.image}`}
        />
      )}
      <div>
        <p>{user?.email}</p>
        <p>{user?.name}</p>
      </div>
    </section>
  );
};

export default page;
