"use client";
import React from "react";
import { HiOutlineEye } from "react-icons/hi";
import { RiDownloadLine } from "react-icons/ri";
import { IoShareSocialOutline } from "react-icons/io5";

export default function MedicalReportCard({
  title,
  doctor,
  type,
  summary,
  date,
}: any) {
  return (
    <div className="border rounded-xl p-5 bg-white shadow-sm mt-5 border-gray-300">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0">
        <div>
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-gray-600">By {doctor}</p>
          <p className="text-gray-500 text-sm">{type}</p>
        </div>

        <div className="text-left md:text-right">
          <p className="font-medium mb-2">{date}</p>

          <span className="text-blue-700 text-sm font-medium bg-blue-100 px-3 py-1 rounded-full">
            Available
          </span>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 text-gray-700 p-4 rounded-lg mt-4 text-md">
        {summary}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 justify-center">
          <HiOutlineEye className="text-lg"/> View Report
        </button>

        <button className="border px-5 py-2 rounded-lg flex items-center gap-2 justify-center">
          <RiDownloadLine /> Download PDF
        </button>

        <button className="border px-5 py-2 rounded-lg flex items-center gap-2 justify-center">
          <IoShareSocialOutline /> Share
        </button>
      </div>
    </div>
  );
}
