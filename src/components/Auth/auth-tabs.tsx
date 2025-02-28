import * as React from "react";

interface AuthTabsProps {
  activeTab: "login" | "signup";
  onTabChange: (tab: "login" | "signup") => void;
}

export function AuthTabs({ activeTab, onTabChange }: AuthTabsProps) {
  return (
    <nav className="flex gap-5 justify-center items-center mt-8 w-full text-sm font-medium text-center max-md:max-w-full">
      <button
        onClick={() => onTabChange("login")}
        className={`flex-1 shrink gap-2.5 self-stretch px-5 py-5 my-auto basis-0 min-h-[52px] rounded-[62px] ${
          activeTab === "login"
            ? "text-orange-500 bg-white"
            : "text-neutral-900"
        }`}
        aria-selected={activeTab === "login"}
        role="tab"
      >
        Log In
      </button>
      <button
        onClick={() => onTabChange("signup")}
        className={`flex-1 shrink gap-2.5 self-stretch px-5 py-5 my-auto rounded-xl basis-0 min-h-[52px] ${
          activeTab === "signup"
            ? "text-orange-500 bg-white"
            : "text-neutral-900"
        }`}
        aria-selected={activeTab === "signup"}
        role="tab"
      >
        Sign Up
      </button>
    </nav>
  );
}
