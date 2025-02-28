"use client";
import React, { useState } from "react";

interface EditableFieldProps {
  label: string;
  value: string;
  onSave?: (newValue: string) => void;
  type?: 'text' | 'password';
}

export const EditableField: React.FC<EditableFieldProps> = ({
  label,
  value: initialValue,
  onSave,
  type = 'text',
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const [tempValue, setTempValue] = useState(initialValue);

  const handleSave = () => {
    setValue(tempValue);
    onSave?.(tempValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempValue(value);
    setIsEditing(false);
  };

  return (
    <div className="w-full max-w-[460px] max-md:max-w-full">
      <label className="text-sm font-medium text-neutral-900">{label}</label>
      <div className="flex gap-10 justify-between items-center py-2.5 pr-0.5 pl-5 w-full border-b border-solid border-b-[color:var(--black-50,rgba(18,18,18,0.50))] max-md:max-w-full">
        {isEditing ? (
          <input
            type={type}
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="self-stretch my-auto text-2xl text-neutral-900 bg-transparent outline-none"
            autoFocus
          />
        ) : (
          <span className="self-stretch my-auto text-2xl text-neutral-900">
            {type === 'password' ? '••••••••' : value}
          </span>
        )}
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="flex overflow-hidden gap-2.5 items-center self-end py-2.5 px-4 text-sm font-medium text-white bg-orange-500 rounded-[40px] hover:bg-orange-600"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex overflow-hidden gap-2.5 items-center self-end py-2.5 px-4 text-sm font-medium text-neutral-900 bg-gray-100 rounded-[40px] hover:bg-gray-200"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="flex overflow-hidden gap-2.5 items-center self-end py-2.5 pr-4 pl-3 text-sm font-medium text-orange-500 bg-white rounded-[40px] hover:bg-gray-50"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/22daf4b21d1d4b0a95de48f1bbb2282d/121c72a690b0c4d5be6f87d4932bbba678e06fbe5a95311a176a2881d3f1c11b"
                className="object-contain self-stretch my-auto w-7 aspect-square"
                alt="Edit"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
