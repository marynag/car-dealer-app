import React from 'react';

export interface Option {
  label: string;
  value: number;
}

type DropdownProps = {
  label: string;
  options: Option[];
  onChange: (value: string) => void;
};

export const Dropdown = ({ label, options, onChange }: DropdownProps) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        className="mt-1 block w-full text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  rounded-lg p-4"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select {label}</option>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
