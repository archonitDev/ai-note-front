"use client";
import React from "react";

interface TabSelectorProps {
  activeTab: "transcript" | "notes";
  onTabChange: (tab: "transcript" | "notes") => void;
}

export const TabSelector: React.FC<TabSelectorProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <nav className="flex gap-3 mb-6 max-sm:flex-col">
      <button
        onClick={() => onTabChange("transcript")}
        className={`flex-1 px-5 py-3.5 text-sm font-medium text-center rounded-xl cursor-pointer ${
          activeTab === "transcript" ? "bg-white" : ""
        }`}
      >
        Full Transcript
      </button>
      <button
        onClick={() => onTabChange("notes")}
        className={`flex-1 px-5 py-3.5 text-sm font-medium text-center rounded-xl cursor-pointer ${
          activeTab === "notes" ? "bg-white" : ""
        }`}
      >
        Notes
      </button>
    </nav>
  );
};
