"use client";

import * as React from "react";

export function PasswordInput() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="flex flex-col justify-center px-5 py-2.5 w-full border-b border-solid border-b-[color:var(--black-50,rgba(18,18,18,0.50))] min-h-[66px] max-md:max-w-full">
      <label className="text-sm leading-none text-neutral-900">Password</label>
      <div className="flex gap-10 justify-between items-center mt-1 w-full min-h-[29px]">
        <input
          type={showPassword ? "text" : "password"}
          className="flex-1 text-2xl text-neutral-900 bg-transparent border-none outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="flex items-center justify-center"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/22daf4b21d1d4b0a95de48f1bbb2282d/4292c24f7913cf8ee1b3af3c470bc5835ce54a3ec8addb2f808caf99b4b8f8e3?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
            alt={showPassword ? "Hide password" : "Show password"}
          />
        </button>
      </div>
    </div>
  );
}
