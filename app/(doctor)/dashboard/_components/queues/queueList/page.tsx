"use client";
import { useState } from "react";
import QueueItem from "../queuesItem/page";
import { FiPhone } from "react-icons/fi";

export default function QueueList({ initialPatients = [] }) {
  const [patients, setPatients] = useState(initialPatients);
  const [currentIdx, setCurrentIdx] = useState(1); // 1-based position of current patient

  function callNext() {
    if (currentIdx < patients.length) setCurrentIdx((s) => s + 1);
  }

  function completeConsultation() {
    // mark current as completed and move to next
    setPatients((prev: any) =>
      prev.map((p, i) =>
        i + 1 === currentIdx ? { ...p, status: "completed" } : p
      )
    );
    if (currentIdx < patients.length) setCurrentIdx((s) => s + 1);
  }

  function updateEstimated(id) {
    // sample update — reduce estimated time by 5 minutes for demo
    setPatients((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, estimated: Math.max(5, p.estimated - 5) } : p
      )
    );
  }

  function callPatient(id) {
    const idx = patients.findIndex((p) => p.id === id);
    if (idx !== -1) setCurrentIdx(idx + 1);
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm overflow-x-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4 md:gap-0">
        <h3 className="text-xl font-semibold">Queue Management & Countdown</h3>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => callNext()}
            className="bg-green-600 text-white px-4 py-2 rounded-md flex gap-2 justify-center"
          >
            <FiPhone className="mt-1" /> Call Next Patient
          </button>
          <button
            onClick={() => completeConsultation()}
            className="bg-blue-600 text-white px-4 py-2 rounded-md flex gap-2 justify-center"
          >
            &#10003; Complete Consultation
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {patients.map((p, i) => (
          <QueueItem
            key={p.id}
            index={i + 1}
            patient={p}
            isCurrent={currentIdx === i + 1 && p.status !== "completed"}
            onUpdateTime={() => updateEstimated(p.id)}
            onCall={() => callPatient(p.id)}
          />
        ))}
      </div>
    </div>
  );
}
