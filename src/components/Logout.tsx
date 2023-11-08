"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { LogOut } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Logout = () => {
  const Router = useRouter();
  const handleSignOut = () => {
    console.log("log out");
    signOut();

    Router.replace("/login");
  };

  return (
    <button>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="flex items-center justify-start gap-4">
            <LogOut />
            <span className="lg:hidden">Sign Out</span>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Dev Chat</AlertDialogTitle>
            <AlertDialogDescription>
              Are you absolutely sure you wish to log out?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <AlertDialogAction>
              <div onClick={handleSignOut}>Continue</div>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </button>
  );
};

export default Logout;
