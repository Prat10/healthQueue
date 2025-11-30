import { FiPhone } from "react-icons/fi";

export default function QueueItem({
  index,
  patient,
  isCurrent,
  onComplete,
  onCall,
  onUpdateTime,
}) {
  return (
    <div
      className={`rounded-lg p-6 flex flex-col md:flex-row md:justify-between md:items-center mt-4 border ${
        isCurrent ? "border-green-400 border-2 bg-green-50" : "border-gray-200 bg-white"
      }`}
    >
      {/* Left section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-gray-700 font-semibold ${
            isCurrent ? "bg-green-600 text-white" : "bg-gray-100"
          }`}
        >
          {index}
        </div>
        <div>
          <div className="font-medium">{patient.name}</div>
          <div className="text-xs text-gray-500">
            Age: {patient.age} | {patient.phone}
          </div>
          <div className="text-xs text-gray-600 mt-1">Issue: {patient.issue}</div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-4 md:mt-0 w-full md:w-auto">
        <div className="text-right mr-0 sm:mr-4">
          <div className="text-lg font-semibold text-blue-600">{patient.estimated} min</div>
          <div className="text-xs text-gray-500">Estimated Time</div>
        </div>

        <button
          onClick={() => onUpdateTime?.(patient.id)}
          className="text-sm px-3 py-1 border border-gray-300 rounded text-gray-400"
        >
          Update time
        </button>

        {isCurrent ? (
          <span className="text-sm bg-green-100 text-green-800 font-semibold px-3 py-1 rounded">
            Current Patient
          </span>
        ) : (
          <button
            onClick={() => onCall?.(patient.id)}
            className="text-sm px-3 py-1 border rounded text-gray-600"
          >
            Call
          </button>
        )}
      </div>
    </div>
  );
}
