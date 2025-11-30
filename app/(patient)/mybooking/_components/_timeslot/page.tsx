export default function TimeSlots() {
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-5">Available Time Slots</h2>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            className="border border-gray-300 px-5 py-3 rounded-xl text-center hover:bg-blue-50"
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
}
