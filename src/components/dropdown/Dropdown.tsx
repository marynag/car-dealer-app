import React from 'react';

type DropdownProps = {
  label: string;
  options: string[];
  onChange: (value: string) => void;
};

export const Dropdown = ({ label, options, onChange }: DropdownProps) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
