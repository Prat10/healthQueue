"use client";

import { useState } from "react";
import {
  User,
  Stethoscope,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Chrome,
  Facebook,
} from "lucide-react";
import SocialButton from "../signup/_components/button/SocialButton";

type Role = "patient" | "doctor";

export default function Login() {
  const [role, setRole] = useState<Role>("doctor");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center">Welcome Back</h1>
        <p className="text-sm text-gray-500 text-center mt-1">
          Sign in to your HealthQueue account
        </p>

        {/* Role Switch */}
        <div className="mt-6">
          <p className="text-sm font-medium mb-2">I am a</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setRole("patient")}
              className={`flex items-center justify-center gap-2 border rounded-lg py-3 text-sm font-medium transition
              ${
                role === "patient"
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "hover:bg-gray-50"
              }`}
            >
              <User className="w-4 h-4" />
              Patient
            </button>

            <button
              onClick={() => setRole("doctor")}
              className={`flex items-center justify-center gap-2 border rounded-lg py-3 text-sm font-medium transition
              ${
                role === "doctor"
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "hover:bg-gray-50"
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              Doctor
            </button>
          </div>
        </div>

        {/* Email */}
        <div className="mt-5">
          <label className="text-sm font-medium">Email Address</label>
          <div className="relative mt-1">
            <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pl-10 pr-3 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mt-4">
          <label className="text-sm font-medium">Password</label>
          <div className="relative mt-1">
            <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full pl-10 pr-10 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Remember / Forgot */}
        <div className="flex items-center justify-between mt-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-gray-300" />
            Remember me
          </label>
          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Submit */}
        <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition">
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">Or continue with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social Login */}
        <div className="flex gap-3">
          <SocialButton label="Google" color="text-red-500" />
          <SocialButton label="Facebook" color="text-blue-600" />
        </div>

        {/* Footer */}
        <p className="text-sm text-center mt-6 text-gray-600">
          Don&apos;t have an account?
          <a href="/signup" className="text-blue-600 font-medium hover:underline">
             Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}
