"use client";

import { useState } from "react";
import AppointmentCard from "./_components/appointmentCard/page";
import PaymentSummary from "./_components/paymentSummary/page";
import QuickActions from "./_components/quickActions/page";
import Tabs from "./_components/tabs/page";
import PastAppointmentCard from "./_components/postAppointmentCard/page";
import MedicalReportCard from "./_components/medicalReport/page";

export default function MyAppointmentsPage() {
  const [tab, setTab] = useState("upcoming");

  return (
    <div className="bg-gray-100 min-h-screen w-full py-10">
      <h1 className="text-3xl px-4 sm:px-6 md:px-78 font-bold mb-8">My Appointments</h1>

      <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-xl">

        <Tabs onChange={(t: string) => setTab(t)} />

        {tab === "upcoming" && (
          <div className="flex flex-col gap-6">
            <AppointmentCard
              doctor="Dr. Rajesh Kumar"
              speciality="General Physician"
              clinic="City Center Clinic"
              date="2024-01-15"
              time="10:00 AM"
              consultation={500}
              platformFee={50}
              totalPaid={550}
              yourNumber={15}
              currentPosition={8}
              waitTime={18}
            />

            <AppointmentCard
              doctor="Dr. Priya Sharma"
              speciality="Cardiologist"
              clinic="Heart Care Hospital"
              date="2024-01-18"
              time="02:30 PM"
              consultation={800}
              platformFee={50}
              totalPaid={850}
              yourNumber={6}
              currentPosition={6}
              waitTime={0}
            />
          </div>
        )}

        {tab === "past" && (
          <div className="flex flex-col gap-6">
            <PastAppointmentCard
              doctor="Dr. Amit Patel"
              speciality="Dermatologist"
              clinic="Skin Wellness Center"
              date="2024-01-10"
              time="11:30 AM"
              consultation={600}
              platformFee={50}
              totalPaid={650}
              diagnosis="Mild acne treatment"
              prescription="Topical cream, follow-up in 2 weeks"
            />

            <PastAppointmentCard
              doctor="Dr. Sunita Rao"
              speciality="Pediatrician"
              clinic="Kids Care Clinic"
              date="2024-01-05"
              time="09:00 AM"
              consultation={550}
              platformFee={50}
              totalPaid={600}
              diagnosis="Routine checkup"
              prescription="Vitamin supplements"
            />
          </div>
        )}

        {tab === "reports" && (
          <div className="flex flex-col gap-6">
            <MedicalReportCard
              title="Blood Test Report"
              doctor="Dr. Rajesh Kumar"
              type="Lab Report"
              summary="All parameters within normal range"
              date="2024-01-10"
            />

            <MedicalReportCard
              title="X-Ray Chest"
              doctor="Dr. Priya Sharma"
              type="Imaging"
              summary="No abnormalities detected"
              date="2024-01-05"
            />
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="p-6 max-w-4xl mx-auto rounded-xl flex flex-col sm:flex-row justify-between px-0 gap-5">
        <QuickActions />
        <PaymentSummary />
      </div>
    </div>
  );
}
