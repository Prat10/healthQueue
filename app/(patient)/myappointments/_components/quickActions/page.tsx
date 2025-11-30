export default function QuickActions() {
  return (
    <div className="border p-6 rounded-lg bg-white shadow-md border-none">
      <p className="font-semibold mb-3">Quick Actions</p>

      <div className="space-y-3">
        <button className="w-full bg-blue-50 text-blue-600 p-3 rounded-lg text-left">
          📅 Book New Appointment
        </button>

        <button className="w-full bg-red-50 text-red-600 p-3 rounded-lg text-left">
          🚑 Emergency Booking
        </button>
      </div>
    </div>
  );
}
