import React from "react";

export const PauseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 5h2a1 1 0 011 1v12a1 1 0 01-1 1H8a1 1 0 01-1-1V6a1 1 0 011-1zm6 0h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V6a1 1 0 011-1z"
    />
  </svg>
);
