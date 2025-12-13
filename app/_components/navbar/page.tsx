"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full flex justify-between md:justify-around items-center px-15 py-3 bg-white shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <i className="ri-health-book-line text-white text-lg"></i>
          </div>
          <span className="text-xl font-semibold">
            <Link href="/Home">HealthQueue</Link>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-700">
          <Link href="/Home">Home</Link>
          <Link href="/mybooking">Book Appointment</Link>
          <Link href="/myappointments">My Appointments</Link>
          <Link href="/dashboard">Doctor Dashboard</Link>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <button className="text-gray-600 hover:text-blue-600">Login</button>
          </Link>
          <Link href="/signup">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-sm px-15 py-4 flex flex-col gap-4">
          <Link href="/Home" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/mybooking" onClick={() => setOpen(false)}>
            Book Appointment
          </Link>
          <Link href="/myappointments" onClick={() => setOpen(false)}>
            My Appointments
          </Link>
          <Link href="/dashboard" onClick={() => setOpen(false)}>
            Doctor Dashboard
          </Link>

          <div className="flex flex-col gap-3 mt-2">
            <button className="text-gray-600 hover:text-blue-600 text-left">
              Login
            </button>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </>
  );
}
