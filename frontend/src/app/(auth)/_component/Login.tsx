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
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Smile } from "lucide-react";
import { useState } from "react";

const loginSchema = z.object({
  email: z
    .string({ required_error: "Please enter email!" })
    .email({ message: "Please enter email valid" }),
  password: z
    .string()
    .min(8, { message: "Password should be more than 8 letters" }),
});

export const LoginCard = () => {
  const [error, setError] = useState<string>();
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signInSchema = z.object({
    email: z
      .string({ required_error: "Please enter email!" })
      .email({ message: "Please enter email valid" }),
    password: z
      .string()
      .min(8, { message: "Password should be more than 8 letters" }),
  });

  const handleLoginClick = async (values: z.infer<typeof signInSchema>) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/auth`,
        {
          email: values.email,
          password: values.password,
        }
      );
      if (response.data.token)
        localStorage.setItem("token", response.data.token);
      if (response.status === 200 || response.status === 201) {
        router.push("/profile");
        toast(
          <div className="flex gap-3 text-green-700">
            <Smile size={20} color="green" /> Тавтай Морилно уу. Амжилттай
            нэвтэрлээ
          </div>
        );
      } else {
        console.error("Failed to register", response.data);
      }
    } catch (error: any) {
      console.error("Sign in error", error);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex w-[100%] h-screen justify-center items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="border-none shadow-none">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLoginClick)} className="">
              <div className="flex flex-col w-[360px] gap-6">
                <CardHeader>
                  <CardTitle className="font-bold text-2xl">
                    Welcome back
                  </CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-2">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email here"
                            {...field}
                          />
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
                        {error && (
                          <p className="text-red-500 text-sm">{error}</p>
                        )}
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
      </motion.div>
    </div>
  );
};
