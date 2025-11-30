"use client";

import {
  Users,
  Calendar,
  UserCheck,
  CheckCircle,
  Percent,
  Wallet,
} from "lucide-react";

const ICONS:any = {
  waiting: Users,
  appointments: Calendar,
  current: UserCheck,
  completed: CheckCircle,
  discounts: Percent,
  earnings: Wallet,
};

const BG_COLOR:any = {
  waiting: "bg-blue-100",
  appointments: "bg-green-100",
  current: "bg-purple-100",
  completed: "bg-orange-100",
  discounts: "bg-red-100",
  earnings: "bg-yellow-100",
}

const FONT_COLOR:any= {
  waiting: "text-blue-800",
  appointments: "text-green-800",
  current: "text-purple-800",
  completed: "text-orange-800",
  discounts: "text-red-800",
  earnings: "text-yellow-800",
}

export default function StatCard({
  value,
  label,
  icon = "waiting",
  color = "bg-white",
}:any) {
  const Icon = ICONS[icon] || Users;

  return (
    <div className={`p-6 rounded-xl shadow-sm flex items-center gap-4 ${color} w-50`}>
      {/* Icon */}
      <div className={`w-12 h-12 rounded-full ${BG_COLOR[icon]} flex items-center justify-center`}>
        <Icon className={`w-6 h-6 ${FONT_COLOR[icon]} `} />
      </div>

      {/* Text */}
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm text-gray-600 mt-1">{label}</div>
      </div>
    </div>
  );
}
