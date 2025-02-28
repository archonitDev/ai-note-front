import * as React from "react";

interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function FormInput({ label, value, onChange }: FormInputProps) {
  return (
    <div className="flex flex-col justify-center py-2.5 pr-0.5 pl-5 w-full whitespace-nowrap border-b border-solid border-b-[color:var(--black-50,rgba(18,18,18,0.50))] min-h-[66px] max-md:max-w-full">
      <label className="text-sm leading-none text-neutral-900">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="gap-px self-stretch mt-1 max-w-full text-2xl text-neutral-900 w-[282px] bg-transparent border-none outline-none"
      />
    </div>
  );
}
