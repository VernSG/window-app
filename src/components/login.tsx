"use client";

import { useNavigate } from "react-router-dom"; // Mengimpor useNavigate
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";

// Schema for form validation
const formSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export default function LoginForm() {
  // Inisialisasi useNavigate
  const navigate = useNavigate();

  // Initialize the form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Form submission handler
  const onSubmit = (data: { username: string; password: string }) => {
    if (data.username === "admin" && data.password === "admin") {
      alert("Login successful! Welcome, admin.");
      navigate("/dashboard"); // Redirect ke halaman dashboard
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Wrapper for the form */}
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        {/* Login title */}
        <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" {...field} />
                  </FormControl>
                  <FormDescription>Please enter your username.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Please enter your password.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button variant="outline" type="submit">
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
