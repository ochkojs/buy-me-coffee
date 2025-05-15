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
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


const signUpSchema = z.object({
  email: z
    .string({ required_error: "Please enter email!" })
    .email({ message: "Please enter email valid" }),
  password: z
    .string()
    .min(8, { message: "Password should be more than 8 letters" }),
});

export const SignUpEmailPasswordCard = ({ username }: { username: string }) => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const handleSignUpClick = async (values: z.infer<typeof signUpSchema>) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/user/create`,
        {
          username: username,
          email: values.email,
          password: values.password,
        }
      );
      if (res.status === 200) {
        router.push("/");
        toast(
          "Бүртгэл амжилттай. Та одоо имэйл хаяг болон нууц үгээрээ нэвтэрнэ үү"
        );
      } else if (res.status === 405) {
        toast("Бүртгэлтэй имэйл байна. та нууц үгээ сэргээнэ үү");
      } else {
        console.error("Failed to register", res.data);
      }
    } catch (error) {
      console.error("Signup error", error);
    }
  };

  return (
    <div className="flex w-[100%] h-screen justify-center items-center">
      <Card className="border-none shadow-none">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSignUpClick)} className="">
            <div className="flex flex-col w-[360px] gap-6">
              <CardHeader>
                <CardTitle className="font-bold text-2xl">
                  Welcome, {username}
                </CardTitle>
                <CardDescription>
                  Connect email and set a password
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email here" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your password here"
                          type="password"
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
                  Sign Up
                </Button>
              </CardFooter>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};
