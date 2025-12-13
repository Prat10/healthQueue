interface SelectProps {
  label: string;
  options: string[];
}

function Select({ label, options }: SelectProps) {
  return (
    <div>
      <label className="text-xs sm:text-sm text-gray-600">{label}</label>
      <select className="w-full border border-gray-300 rounded-lg py-3 px-4 mt-1 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
        <option>Select {label.toLowerCase()}</option>
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
