export default function StatsSection() {
  const stats = [
    { value: "5000+", label: "Happy Patients" },
    { value: "200+", label: "Registered Doctors" },
    { value: "50+", label: "Partner Clinics" },
    { value: "95%", label: "Time Saved" },
  ];

  return (
    <section className="w-full">
      {/* Top Blue Stats Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center px-6">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-bold">{item.value}</h2>
              <p className="text-md mt-2 opacity-90">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Ready to Skip the Wait?
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Join thousands of patients who have already saved hours of waiting time
        </p>

        <button className="mt-8 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
          Book Your First Appointment
        </button>
      </div>
    </section>
  );
}
