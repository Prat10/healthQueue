interface RoleButtonProps {
  label: string;
  active: boolean;
  icon: React.ReactNode;
  onClick: () => void;
}

function RoleButton({ label, active, icon, onClick }: RoleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-2 w-full border rounded-lg py-3 text-sm font-medium transition
        ${
          active
            ? "border-blue-500 bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-50"
        }`}
    >
      {icon}
      {label}
    </button>
  );
}

export default RoleButton;