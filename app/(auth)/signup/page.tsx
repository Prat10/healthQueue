"use client";

import { useState } from "react";
import { User, Stethoscope, Mail, Phone, Lock, Eye } from "lucide-react";
// import Input from "./_components/input/page";
// import RoleButton from "./_components/button/page";
import Select from "./_components/input/select";
import RoleButton from "./_components/button/page";
import Input from "./_components/input/page";
import SocialButton from "./_components/button/SocialButton";

type Role = "patient" | "doctor";

export default function RegisterPage() {
  const [role, setRole] = useState<Role>("patient");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 pt-8">
      <div className="bg-white w-full max-w-lg md:max-w-2xl rounded-xl shadow-lg p-6 sm:p-8">
        
        {/* Header */}
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          Join HealthQueue
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm text-center mt-1">
          Create your account and start managing healthcare efficiently
        </p>

        {/* Role Selection */}
        <div className="mt-6">
          <p className="text-xs sm:text-sm mb-2">I want to register as</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <RoleButton
              label="Patient"
              active={role === "patient"}
              icon={<User size={16} />}
              onClick={() => setRole("patient")}
            />
            <RoleButton
              label="Doctor"
              active={role === "doctor"}
              icon={<Stethoscope size={16} />}
              onClick={() => setRole("doctor")}
            />
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Input label="First Name" placeholder="Enter first name" />
          <Input label="Last Name" placeholder="Enter last name" />

          <Input
            label="Email Address"
            placeholder="Enter email address"
            icon={<Mail size={16} />}
          />
          <Input
            label="Phone Number"
            placeholder="Enter phone number"
            icon={<Phone size={16} />}
          />

          {/* Doctor-only fields */}
          {role === "doctor" && (
            <>
              <Select
                label="Specialty"
                options={[
                  "General Physician",
                  "Cardiologist",
                  "Dermatologist",
                  "Pediatrician",
                ]}
              />
              <Input
                label="Years of Experience"
                placeholder="Years of experience"
              />
              <Input
                label="Medical License Number"
                placeholder="Enter license number"
              />
              <Input
                label="Clinic/Hospital Name"
                placeholder="Enter clinic name"
              />
            </>
          )}

          <Input
            label="Password"
            placeholder="Create password"
            type="password"
            icon={<Lock size={16} />}
          />
          <Input
            label="Confirm Password"
            placeholder="Confirm password"
            type="password"
            icon={<Lock size={16} />}
          />
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2 mt-4 text-xs sm:text-sm">
          <input type="checkbox" className="mt-1" />
          <p className="text-gray-600">
            I agree to the{" "}
            <span className="text-blue-600 cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-blue-600 cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>

        {/* Submit */}
        <button className="w-full mt-6 bg-blue-400 hover:bg-blue-500 text-white py-3 rounded-lg font-medium transition">
          Create Account
        </button>

                {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm text-gray-500">Or sign up with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social Login */}
        <div className="flex gap-3">
          <SocialButton label="Google" color="text-red-500" />
          <SocialButton label="Facebook" color="text-blue-600" />
        </div>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?
          <span className="text-blue-600 cursor-pointer font-medium" >
           <a href="/login"> Sign in here</a> 
          </span>
        </p>

        <p className="text-xs text-center text-gray-400 mt-4">
          Need help?{" "}
          <span className="text-blue-600 cursor-pointer">Contact Support</span>
        </p>
      </div>
    </div>
  );
}
