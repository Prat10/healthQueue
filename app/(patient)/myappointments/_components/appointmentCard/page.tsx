import React from "react";
import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { RiFileDownloadLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

export default function AppointmentCard({
  doctor,
  speciality,
  clinic,
  date,
  time,
  consultation,
  platformFee,
  totalPaid,
  yourNumber,
  currentPosition,
  waitTime,
}: any) {
  return (
    <div className="border rounded-lg p-5 bg-white shadow-sm mt-5 border border-gray-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
        <div>
          <p className="text-lg font-semibold">{doctor}</p>
          <p className="text-gray-500">{speciality}</p>
          <p className="text-gray-600">{clinic}</p>
        </div>
        <div className="text-left md:text-right">
          <p className="font-medium">{date}</p>
          <p className="text-gray-500">{time}</p>
          <span className="text-green-600 text-sm font-medium bg-green-100 px-2 py-1 rounded">
            confirmed
          </span>
        </div>
      </div>

      {/* Payment */}
      <div className="bg-green-50 p-4 rounded-lg mt-4 text-sm overflow-x-auto">
        <p className="font-medium mb-2">Payment Details</p>
        <div className="flex flex-wrap gap-8 text-gray-700">
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

      {/* Queue */}
      <div className="border rounded-lg mt-4 p-4 flex flex-col sm:flex-row justify-around text-center bg-blue-50 border-none gap-4 sm:gap-0">
        <div>
          <p className="text-blue-500 font-bold text-xl">#{yourNumber}</p>
          <p className="text-sm text-gray-600">Your Number</p>
        </div>

        <div>
          <p className="text-orange-500 font-bold text-xl">#{currentPosition}</p>
          <p className="text-sm text-gray-600">Current Position</p>
        </div>

        <div>
          <p className="text-green-600 font-bold text-xl">{waitTime} minutes</p>
          <p className="text-sm text-gray-600">Estimated Wait</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold flex gap-2 justify-center">
          <GrLocation className="mt-1" /> Get Directions
        </button>
        <button className="border font-semibold text-gray-800 px-4 py-2 border-gray-300 rounded-md flex gap-2 justify-center">
          <FiPhone className="mt-1" /> Call Clinic
        </button>
        <button className="border font-semibold px-4 text-gray-800 py-2 rounded-md border-gray-300 flex gap-2 justify-center">
          <RiFileDownloadLine className="mt-1" /> Download Receipt
        </button>
        <button className="border font-semibold border-red-300 text-red-800 px-4 py-2 rounded-md flex gap-2 justify-center">
          <RxCross2 className="mt-1" /> Cancel
        </button>
      </div>
    </div>
  );
}
