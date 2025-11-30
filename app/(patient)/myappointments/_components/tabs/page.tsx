"use client";
import React, { useState } from "react";

export default function Tabs({ onChange }: any) {
  const [active, setActive] = useState("upcoming");

  const tabs = [
    { id: "upcoming", label: "Upcoming (2)" },
    { id: "past", label: "Past Appointments (2)" },
    { id: "reports", label: "Medical Reports (3)" },
  ];

  const handleClick = (id: string) => {
    setActive(id);
    onChange?.(id); // send selected tab to parent
  };

  return (
    <div className="border-none">
      <ul className="flex gap-6 p-2 text-sm">
        {tabs.map((t) => (
          <li
            key={t.id}
            onClick={() => handleClick(t.id)}
            className={`cursor-pointer pb-2 ${
              active === t.id
                ? "border-b-2 border-blue-600 font-medium text-blue-600"
                : "text-gray-500"
            }`}
          >
            {t.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
