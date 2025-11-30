"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import TimeSlots from "./_components/_timeslot/page";
import DoctorCard from "./_components/_doctorCard/page";

export default function AppointmentPage() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      role: "General Physician",
      exp: "14 yrs experience",
      fee: "₹500 consultation fee",
      queue: 8,
      wait: "15 min",
      hospital: "City Center Clinic",
      distance: "2.1 km away",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Cardiologist",
      exp: "12 yrs experience",
      fee: "₹800 consultation fee",
      queue: 5,
      wait: "25 min",
      hospital: "Heart Care Hospital",
      distance: "1.8 km away",
    },
    {
      name: "Dr. Amit Patel",
      role: "Dermatologist",
      exp: "10 yrs experience",
      fee: "₹600 consultation fee",
      queue: 12,
      wait: "12 min",
      hospital: "Skin Wellness Center",
      distance: "1.9 km away",
    },
    {
      name: "Dr. Sunita Rao",
      role: "Pediatrician",
      exp: "8 yrs experience",
      fee: "₹550 consultation fee",
      queue: 6,
      wait: "20 min",
      hospital: "Kids Care Clinic",
      distance: "2.7 km away",
    },
  ];

  const timeSlots = [
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "09:00 PM",
  ];

  return (
    <div className="bg-gray-100 min-h-screen w-full py-10">
      <div className="p-4 sm:p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-xl">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-black-50 text-center sm:text-left">
          Book Your Appointment
        </h2>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your location"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full appearance-none "
              />
              <CiLocationOn className="absolute top-3 right-3 text-gray-500 " />
            </div>
          </div>
          <div>
            <div className="relative">
              <select className="border border-gray-300 rounded-lg px-4 py-3 w-full appearance-none">
                <option>Select Specialty</option>
                <option>Cardiologist</option>
                <option>Dermatologist</option>
                <option>Pediatrician</option>
                <option>General Physician</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>
          <div>
            <input
              type="date"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full"
            />
          </div>
        </div>

        {/* Doctors Section */}
        <h3 className="text-2xl font-semibold mb-3 text-center sm:text-left">
          Available Doctors
        </h3>

        <div className="flex flex-col gap-4">
          {doctors.map((item, idx) => (
            <DoctorCard key={idx} doctor={item} onSelect={setSelectedDoctor} />
          ))}
        </div>

        {/* Time Slots */}
        {selectedDoctor && (
          <div className="mt-6">
            <TimeSlots />
          </div>
        )}
      </div>
    </div>
  );
}
