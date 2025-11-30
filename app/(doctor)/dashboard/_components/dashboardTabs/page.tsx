"use client";
import { useState } from "react";

export default function DashboardTabs({ onChange }:any) {
  const tabs = [
    { id: "queue", label: "Queue Management" },
    { id: "patients", label: "Patient Management" },
    { id: "reports", label: "Patient Reports" },
    { id: "payments", label: "Payments & Earnings" },
    { id: "discounts", label: "Medicine Discounts" },
    { id: "appointments", label: "Appointments" },
  ];

  const [active, setActive] = useState("queue");

  function clickTab(id:any) {
    setActive(id);
    onChange?.(id);
  }

  return (
    <div className="border-b border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex gap-6 overflow-x-auto text-sm">
          {tabs.map((t) => (
            <li
              key={t.id}
              onClick={() => clickTab(t.id)}
              className={`py-3 cursor-pointer ${
                active === t.id
                  ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                  : "text-gray-600"
              }`}
            >
              {t.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
