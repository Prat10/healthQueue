import { FC } from "react";

interface SocialButtonProps {
  label: string;
  color: string;
}

const SocialButton: FC<SocialButtonProps> = ({ label, color }) => (
  <button className="flex-1 border rounded-lg py-3 text-sm font-medium flex justify-center gap-2 hover:bg-gray-50">
    <span className={`font-bold ${color}`}>
      {label === "Google" ? "G" : "f"}
    </span>
    {label}
  </button>
);

export default SocialButton;
