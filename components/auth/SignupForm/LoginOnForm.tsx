"use client";
import { SignupFormSchema, UserType } from "@/lib/schemaValidation";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { loginClientAction, registerClientAction } from "./auth.action";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { LoginClientType, LoginFormSchema } from "@/lib/loginSchemaValidation";
import { useAuthStore } from "@/store/auth/auth.store";
import { parseJwt } from "@/lib/utils";
import { redirect } from "next/navigation";
import Link from "next/link";



const LoginClientForm = () => {
  const loginUser = useAuthStore((state) => state.loginUser)
  const isAuthorized = useAuthStore((state) => state.status === 'authorized')
  const { toast } = useToast()
  const form = useForm<LoginClientType>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onChange",
  });

  const [pending, startTransition] = useTransition();

  const onSubmit = async (data: LoginClientType) => {
    startTransition(async () => {
      const { token, id } = await loginUser(data.email, data.password)
      if (token) {
        toast({
          title: "User logged in",
          description: "User has logged in successfully",
        });

      } else {
        toast({
          title: "User not logged in",
          description: "User has not logged in successfully",
        })
      }
    });
  };

  if (isAuthorized) {
    return (
      <div>
        <h1>Already logged in</h1>
        <Link href="/">Volver</Link>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form
        className="space-y-6 sm:max-w-sm w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" autoFocus {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" autoFocus {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={pending}>
          Submit
        </Button>

      </form>
    </Form>
  );
};

export default LoginClientForm;