import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const useUser = () => {
  const user = getServerSession(authOptions);
  return user;
};
