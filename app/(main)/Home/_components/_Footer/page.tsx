"use client";

import { useRouter } from "next/navigation";
import { FiGrid } from "react-icons/fi";


export default function Footer() {

  const router = useRouter();

  return (
    <footer className="bg-[#1E2A38] text-gray-300 py-12">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + Description */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-full">
              <FiGrid className="text-white text-xl" />
            </div>
            <h2 className="text-xl font-semibold text-white">Queuefree</h2>
          </div>

          <p className="mt-4 leading-relaxed text-gray-400">
            Revolutionizing healthcare<br />
            appointments in tier 2-3 cities of India
          </p>
        </div>

        {/* For Patients */}
        <div>
          <h3 className="text-white font-semibold mb-3">For Patients</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer" onClick={() => router.push("/mybooking")}>Book Appointment</li>
            <li className="hover:text-white cursor-pointer" onClick={() => router.push("/myappointments")}>My Appointments</li>
            <li className="hover:text-white cursor-pointer">Medical Records</li>
          </ul>
        </div>

        {/* For Doctors */}
        <div>
          <h3 className="text-white font-semibold mb-3">For Doctors</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Dashboard</li>
            <li className="hover:text-white cursor-pointer">Queue Management</li>
            <li className="hover:text-white cursor-pointer">Patient Records</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-400">
        © 2024 HealthQueue. All rights reserved.
      </div>

    </footer>
  );
}
