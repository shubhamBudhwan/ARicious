"use client";

import { Label } from "@/components/Common/Label";
import { errorToast, successToast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Validation Schema
const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginFormContent = ({ role }: { role: "developer" | "client" }) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    async function onSubmit() {
        setLoading(true);
      try{
            successToast("User Logged In Successfully");
            const redirectPath =
                role === "developer"
                    ? "/developer/dashboard"
                    : "/client/dashboard";
            router.push(redirectPath);
  //@typescript-eslint/no-explicit-any
        } catch (error:any) {
            errorToast(error.message);
        }
    }

    return (
        <CardContent className="space-y-0 py-0">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
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
                <div className="flex flex-col gap-3">
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

                    {/* Remember Me & Forgot Password */}
                    <div className="pl-0.5 flex justify-between items-center text-[13px]">
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <Checkbox id="remember" className="w-[14px] h-[14px] rounded-[3px]" />
                            <Label size="xs" htmlFor="remember" className="text-gray-600 cursor-pointer">
                                Remember me
                            </Label>
                        </div>
                        <Link href="/forgot-password" className={`hover:underline font-semibold text-xs ${role === "developer" ? "text-blue-600" : "text-purple-600"}`}>
                            Forgot password?
                        </Link>
                    </div>
                </div>

                {/* Submit Button */}
                <Button type="submit" size="sm"    className={`rounded-md h-9 ${role === "developer" ? "bg-blue-600" : "bg-purple-600"}`}>
                    {loading ? "Signing In..." : role === "developer" ? "Sign In as Developer" : "Sign In as Client"}
                </Button>
            </form>
        </CardContent>
    );
};

export default LoginFormContent;
