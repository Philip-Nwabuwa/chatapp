"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";

import { useRef, useState } from "react";
import { Camera } from "lucide-react";
import { useEdgeStore } from "@/lib/edgestore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

interface CustomError {
  response?: {
    data: {
      message: string;
    };
  };
}

const formSchema = z
  .object({
    username: z.string().min(3, {
      message: "Username must be at least 3 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Confirm password must be at least 8 characters.",
    }),
    image: z.string().nullable(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

const RegisterForm = () => {
  const { edgestore } = useEdgeStore();
  const router = useRouter();

  const Session = useSession();

  if (Session?.data) {
    router.push("/dashboard");
  }
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, isError, mutateAsync } = useMutation({
    mutationFn: (values: any) => {
      return axios.post("/api/auth/register", values);
    },
    onError: (err: CustomError) => {
      console.log(err);
      if (err.response) {
        toast.error(
          <div>
            <p>{err.response.data.message}</p>
          </div>
        );
      } else {
        toast.error("An error occurred.");
      }
    },
  });

  const handleAvatarClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const [imageFile, setImageFile] = useState<FileList | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: null,
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageFile(e.target.files);
    console.log(e.target.files);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (!imageFile) {
        toast.error("Please upload an image.");
        return;
      }
      const res = await edgestore.publicFiles.upload({
        file: imageFile[0],
      });
      console.log(res);
      setImage(res.url);
      values.image = res.url;
      console.log(values);

      const response = await mutateAsync(values);
      console.log(response);

      toast.success(
        <div>
          <p>Registration successful!</p>
        </div>
      );

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormItem>
          <div className="cursor-pointer" onClick={handleAvatarClick}>
            <Input
              type="file"
              onChange={handleImageChange}
              ref={inputRef}
              style={{ display: "none" }}
            />
            <Avatar>
              {imageFile && (
                <AvatarImage
                  src={URL.createObjectURL(imageFile[0])}
                  alt="Preview"
                />
              )}
              <AvatarFallback>
                <Camera />
              </AvatarFallback>
            </Avatar>
          </div>
          <FormLabel>Pick an Image</FormLabel>
        </FormItem>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem typeof="password">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
