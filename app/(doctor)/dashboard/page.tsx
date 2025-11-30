"use client";

import DashboardTabs from "./_components/dashboardTabs/page";
import QueueList from "./_components/queues/queueList/page";
import StatCard from "./_components/statsCard/page";

const DUMMY_PATIENTS:any = [
  {
    id: "p1",
    name: "Ravi Sharma",
    age: 34,
    phone: "+91 9876543210",
    issue: "Fever and cold symptoms",
    estimated: 15,
    status: "waiting",
  },
  {
    id: "p2",
    name: "Meera Patel",
    age: 28,
    phone: "+91 9876543211",
    issue: "Regular checkup",
    estimated: 30,
    status: "waiting",
  },
  {
    id: "p3",
    name: "Suresh Kumar",
    age: 45,
    phone: "+91 9876543212",
    issue: "Blood pressure check",
    estimated: 45,
    status: "waiting",
  },
  {
    id: "p4",
    name: "Priya Singh",
    age: 32,
    phone: "+91 9876543213",
    issue: "Stomach pain",
    estimated: 60,
    status: "waiting",
  },
  {
    id: "p5",
    name: "Amit Gupta",
    age: 29,
    phone: "+91 9876543214",
    issue: "Headache",
    estimated: 75,
    status: "waiting",
  },
];

export default function DoctorDashboardPage() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen w-full py-10">
        {/* Stats Section */}
        <div className="flex flex-wrap gap-4 mb-6 justify-center">
          <StatCard value="3" label="Waiting Patients" icon="waiting" />
          <StatCard
            value="12"
            label="Today's Appointments"
            icon="appointments"
          />
          <StatCard value="#2" label="Current Patient" icon="current" />
          <StatCard value="1" label="Completed Today" icon="completed" />
          <StatCard value="3" label="Active Discounts" icon="discounts" />
          <StatCard value="₹12,500" label="Today's Earnings" icon="earnings" />
        </div>

        {/* Main Container */}
        <div className="p-6 max-w-7xl mx-auto bg-white shadow-lg rounded-xl overflow-x-auto">
          {/* Tabs */}
          <div className="mb-6">
            <div className="rounded-xl overflow-hidden">
              <DashboardTabs onChange={(id: any) => console.log("tab =>", id)} />
            </div>
          </div>

          {/* Queue List */}
          <QueueList initialPatients={DUMMY_PATIENTS} />
        </div>
      </div>
    </>
  );
}
