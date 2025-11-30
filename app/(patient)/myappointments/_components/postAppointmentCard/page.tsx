"use client";
import React from "react";
import { RiFileDownloadLine } from "react-icons/ri";
import { FiCalendar } from "react-icons/fi";

export default function PastAppointmentCard({
  doctor,
  speciality,
  clinic,
  date,
  time,
  consultation,
  platformFee,
  totalPaid,
  diagnosis,
  prescription,
}: any) {
  return (
    <div className="border rounded-xl p-5 bg-white shadow-sm mt-5 border-gray-300">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0">
        <div>
          <p className="text-xl font-semibold">{doctor}</p>
          <p className="text-gray-500">{speciality}</p>
          <p className="text-gray-600">{clinic}</p>
        </div>

        <div className="text-left md:text-right">
          <p className="font-medium">{date}</p>
          <p className="text-gray-500">{time}</p>

          <span className="text-green-700 text-sm font-medium bg-green-100 px-2 py-1 rounded">
            completed
          </span>
        </div>
      </div>

      {/* Payment Summary */}
      <div className="bg-gray-50 p-4 rounded-lg mt-4 text-sm overflow-x-auto">
        <p className="font-medium mb-2">Payment Details</p>
        <div className="flex flex-wrap gap-6 text-gray-700">
          <div className="block min-w-[120px]">
            <p>Consultation:</p>
            <p className="font-bold">₹{consultation}</p>
          </div>
          <div className="block min-w-[120px]">
            <p>Platform Fee: </p>
            <p>₹{platformFee}</p>
          </div>
          <div className="block min-w-[120px]">
            <p>Total Paid:</p>
            <p> ₹{totalPaid}</p>
          </div>
          <div className="block min-w-[120px]">
            <p>Status:</p>
            <p>
              <span className="text-green-600 font-semibold">✓ paid</span>
            </p>
          </div>
        </div>
      </div>

      {/* Diagnosis + Prescription */}
      <div className="bg-blue-50 p-4 rounded-lg mt-4 text-sm flex flex-col md:flex-row justify-between gap-4">
        <div>
          <p className="font-medium">Diagnosis</p>
          <p className="text-gray-700">{diagnosis}</p>
        </div>

        <div>
          <p className="font-medium">Prescription</p>
          <p className="text-gray-700">{prescription}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold flex gap-2 justify-center">
          <RiFileDownloadLine className="mt-1"/> Download Report
        </button>

        <button className="border font-semibold px-4 text-gray-800 py-2 rounded-md border-gray-300 flex gap-2 justify-center">
          <RiFileDownloadLine className="mt-1"/> Download Receipt
        </button>

        <button className="border px-4 py-2 rounded-md flex items-center gap-2 border-gray-300 text-gray-800 font-semibold justify-center">
          <FiCalendar className="mt-1"/> Book Follow-up
        </button>
      </div>
    </div>
  );
}
