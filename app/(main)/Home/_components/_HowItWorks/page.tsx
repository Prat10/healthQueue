import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Search Doctor",
      desc: "Find doctors near you by specialty and location",
      color: "bg-blue-600",
    },
    {
      number: "2",
      title: "Book Slot",
      desc: "Select available time slot and get your queue number",
      color: "bg-green-600",
    },
    {
      number: "3",
      title: "Track Queue",
      desc: "Monitor your position and estimated wait time",
      color: "bg-purple-600",
    },
    {
      number: "4",
      title: "Visit Doctor",
      desc: "Arrive at the right time and get treated without waiting",
      color: "bg-orange-600",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How It Works
        </h2>
        <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
          Simple steps to book your appointment and save time
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6  text-center">

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            
            {/* Number Circle */}
            <div
              className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold ${step.color}`}
            >
              {step.number}
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>

            {/* Description */}
            <p className="text-gray-600 mt-3 max-w-xs">
              {step.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}
