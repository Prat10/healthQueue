import { FaStar } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";

export default function DoctorCard({ doctor, onSelect }: any) {
  return (
    <div className="w-full bg-white border border-gray-300 rounded-2xl shadow-sm p-6">

      {/* Top section (details) */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <div className="flex gap-4 flex-1">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
            <LuUserRound className="text-blue-500 text-2xl"/>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.role || "General Physician"}</p>
            <p className="text-gray-500">{doctor.exp || "15 years experience"}</p>
            <p className="flex items-center gap-1 text-blue-600">&#9733; 4.9</p>
            <p>
              <span className="text-green-600 text-xl font-bold">{doctor.fee?.split(" ")[0] || "₹500"}</span>{" "}
              consultation fee
            </p>
          </div>
        </div>

        <div className="text-right text-gray-600 mt-4 sm:mt-0">
          <p>{doctor.hospital || "City Center Clinic"}</p>
          <p className="text-sm">{doctor.distance || "2.3 km away"}</p>
        </div>
      </div>

      {/* Bottom Queue Row */}
      <div className="mt-5 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 px-4 sm:px-6 py-4 rounded-xl gap-4 sm:gap-0">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-14 w-full sm:w-auto">
          <div className="text-center">
            <p className="text-blue-600 font-bold text-lg">{doctor.queue || 8}</p>
            <p className="text-gray-600 text-sm">Current Queue</p>
          </div>

          <div className="text-center">
            <p className="text-green-600 font-bold text-lg">{doctor.wait || "15 min"}</p>
            <p className="text-gray-600 text-sm">Avg Wait Time</p>
          </div>
        </div>

        <button
          onClick={onSelect}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto"
        >
          Select Doctor
        </button>
      </div>
    </div>
  );
}
