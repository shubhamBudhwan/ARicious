"use client";

import { Label } from "@/components/Common/Label";
import { errorToast, successToast } from "@/components/hooks/use-toast";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, User } from "lucide-react";  
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const RegisterForm = ({ role }: { role: "developer" | "client" }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(data: { name: string; email: string; password: string }) {
    setLoading(true);
    try {
      // Registration API Call (To be implemented)
      successToast("Registration successful!");
    } catch (error) {
      errorToast("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <CardContent className="space-y-0 py-0">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {/* Name Field */}
        <div className="space-y-1">
          <Label size="sm" variant="semibold">Your Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={16} />
            <Input
              type="text"
              {...register("name")}
              className="pl-10 text-[13px] font-medium rounded-md"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs font-medium">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="space-y-1">
          <Label size="sm" variant="semibold">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={16} />
            <Input
              type="email"
              {...register("email")}
              className="pl-10 text-[13px] font-medium rounded-md"
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs font-medium">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="space-y-1">
          <Label size="sm" variant="semibold">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={16} />
            <Input
              type="password"
              {...register("password")}
              className="pl-10 text-[13px] font-medium rounded-md"
            />
          </div>
          {errors.password && <p className="text-red-500 text-xs font-medium">{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`rounded-md h-9 text-white ${role === "developer" ? "bg-blue-600" : "bg-purple-600"}`}
        >
          {loading ? "Registering..." : role === "developer" ? "Register as Developer" : "Register as Client"}
        </button>
      </form>
    </CardContent>
  );
};

export default RegisterForm;
