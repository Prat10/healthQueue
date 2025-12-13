import { Eye } from "lucide-react";

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  icon?: React.ReactNode;
}

function Input({ label, placeholder, type = "text", icon }: InputProps) {
  return (
    <div>
      <label className="text-xs sm:text-sm text-gray-600">{label}</label>
      <div className="relative mt-1">
        {icon && (
          <span className="absolute left-3 top-3.5 text-gray-400">
            {icon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full border border-gray-300 rounded-lg py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500
            ${icon ? "pl-10" : "pl-4"} pr-10`}
        />
        {type === "password" && (
          <Eye
            size={16}
            className="absolute right-3 top-3.5 text-gray-400 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}


export default Input;