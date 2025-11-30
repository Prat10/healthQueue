import React from "react";
import { WiTime3 } from "react-icons/wi";
import { LuFileText } from "react-icons/lu";
import { CiDiscount1 } from "react-icons/ci";

export default function WhyChoose() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose HealthQueue?
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl text-lg mx-auto">
          Revolutionary healthcare booking system designed specifically for tier 2–3 cities in India
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 mb-6">
            <span className="text-blue-600 text-3xl"><WiTime3 color="" /></span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Real-Time Queue Tracking</h3>
          <p className="text-gray-600">
            See your position in the queue and estimated wait time.  
            Come to the hospital exactly when it's your turn.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 mb-6">
            <span className="text-green-600 text-3xl"><LuFileText /></span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Digital Medical Records</h3>
          <p className="text-gray-600">
            Access your medical history and reports online.  
            Never forget your medical documents at home again.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 mb-6">
            <span className="text-purple-600 text-3xl"><CiDiscount1 /></span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Medicine Discounts</h3>
          <p className="text-gray-600">
            Get exclusive discounts on medicines from affiliated pharmacies  
            near your doctor’s clinic.
          </p>
        </div>

      </div>
    </section>
  );
}
