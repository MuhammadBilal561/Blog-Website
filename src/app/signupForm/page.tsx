"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Header from "@/components/Header";
import Footer from "@/components/Fotter";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({

  email: z.string().email("Email required"),
userName: z.string().min(6 , {
    message: "Minimum 6 characters required"
})
  ,

  password: z.string().min(6, {
    message: "password must me at least 6 characters",
  }),
});

function ContactUs() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      userName:"",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("🚀 ~ onSubmit ~ data:", data);

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div>
      <Header/>
    <div className="flex items-center justify-center mt-28">
  <div className="bg-white w-fit relative border-orange-500 border border-8">
        <h3 className="flex justify-center font-extrabold text-2xl mt-7">Sign Up</h3>
        <div className="flex items-center justify-center px-4 py-3 mb-5">
      <div className="mx-auto w-80 max-w-[550px] ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" type={"email"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

<FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>UserName</FormLabel>
                  <FormControl>
                    <Input placeholder="UserName" {...field} />
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
                    <Input placeholder="Password" {...field} />
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
    </div>
    </div>
   <div className="flex justify-end mr-4 mb-0">
   <Footer  />
   </div>
    </div>
  );
}

export default ContactUs;
