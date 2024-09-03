"use client";
import { SignupFormSchema, UserType } from "@/lib/schemaValidation";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { registerClientAction } from "./auth.action";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";



const RegisterClientForm = () => {

  const { toast } = useToast()
  const form = useForm<UserType>({
    resolver: zodResolver(SignupFormSchema),
    mode: "onChange",
  });

  const [pending, startTransition] = useTransition();

  const onSubmit = async (data: UserType) => {
    startTransition(async () => {
      const response = await registerClientAction(data);

      if (response === 201) {
        toast({
          title: "User created",
          description: "User has created successfully",
        });
      } else {
        toast({
          title: "User not created",
          description: "User has not created successfully",
        })
      }
    });
  };

  return (
    <Form {...form}>
      <form
        className="space-y-6 sm:max-w-sm w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" autoFocus {...field} />
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

export default RegisterClientForm;