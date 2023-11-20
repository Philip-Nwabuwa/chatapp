"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toastError, toastSuccess } from "@/lib/utils";

interface CustomError {
  response?: {
    data: {
      message: string;
    };
  };
}

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
});

const AddFriend = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const { data, mutateAsync, isSuccess } = useMutation({
    mutationFn: (values: any) => {
      return axios.post("/api/friend/add", values);
    },
    onError: async (err: AxiosError) => {
      if (err.response) {
        const status = err.response.status;
        const errorMessage = (err.response?.data as any)?.error;
        console.log(errorMessage);

        if (errorMessage === "You cannot add yourself as a friend") {
          toastError(errorMessage);
        } else if (errorMessage === "User not found") {
          toastError(errorMessage);
        } else {
          toastError("An error occurred. Please try again.");
        }
      } else {
        toastError("An error occurred.");
      }
    },
    onSuccess: async (data) => {
      console.log(data);
      toastSuccess(`friend request sent to ${data.data.email}`);
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await mutateAsync(values);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div className="p-10">
      <h1>Add friend</h1>
      <div className="flex gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddFriend;
