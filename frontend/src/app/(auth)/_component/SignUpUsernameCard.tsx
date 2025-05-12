"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

const formSchema = z.object({
  username: z
    .string({ required_error: "Хэрэглэгчийн нэрээ оруулна уу!" })
    .min(4, {
      message: "4-өөс дээш тэмдэгт агуулах ёстой!",
    })
    .max(15, { message: "Хамгийн ихдээ 15 тэмдэгт агуулах ёстой!" }),
});

export function SignUpUsernameCard({
  setStep,
  setUsername,
}: {
  setStep: Dispatch<SetStateAction<number>>;
  setUsername: Dispatch<SetStateAction<string>>;
}) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setUsername(values.username);
    setStep(1);
  };

  return (
    <div className="flex w-[100%] h-screen justify-center items-center">
      <Card className="border-none shadow-none">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="flex flex-col w-[360px] gap-6">
              <CardHeader>
                <CardTitle className="font-bold text-2xl">
                  Create Your Account
                </CardTitle>
                <CardDescription>
                  Choose a username for your page
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your username here"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex w-full">
                <Button className="w-full" type="submit">
                  Continue
                </Button>
              </CardFooter>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
}
