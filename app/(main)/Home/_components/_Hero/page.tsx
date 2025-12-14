"use client";
import { useRouter } from "next/navigation";


export default function Hero() {

  const router = useRouter();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/mainPage.jpg')",
        }}
      >
        {/* LIGHT overlay - keeps text 100% solid */}
        <div className="absolute inset-0 bg-white/70"></div>

        {/* Content */}
        <div className="relative px-4 sm:px-8 md:px-20 lg:px-40 max-w-6xl h-full flex items-center">
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Skip the Wait, Book Your Doctor Appointment Online
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-700 w-full sm:w-[95%] md:w-[90%] lg:w-2xl">
              No more long waits at clinics. Book appointments, track your queue
              position, and access your medical reports online. Perfect for tier
              2–3 cities in India.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button
                className="bg-blue-600 font-normal text-white px-6 py-4 rounded-lg shadow-md hover:bg-blue-700 cursor-pointer"
                onClick={() => router.push("/mybooking")}>
                Book Appointment Now
              </button>

              <button className="border-2 border-blue-600 font-semibold text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 cursor-pointer"
                onClick={() => router.push("/dashboard")}>
                Doctor Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
