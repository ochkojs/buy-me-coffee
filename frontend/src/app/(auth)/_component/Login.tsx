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

const loginSchema = z.object({
  email: z
    .string({ required_error: "Please enter email!" })
    .email({ message: "Please enter email valid" }),
  password: z
    .string()
    .min(8, { message: "Password should be more than 8 letters" }),
});

export const LoginCard = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (values: z.infer<typeof loginSchema>) => {
    console.log(values.email, values.password);
  };

  return (
    <div className="flex w-[100%] h-screen justify-center items-center">
      <Card className="border-none shadow-none">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)} className="">
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
                  Continue
                </Button>
              </CardFooter>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};
