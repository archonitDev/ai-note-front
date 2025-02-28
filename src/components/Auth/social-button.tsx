import * as React from "react";

export function SocialButton() {
  return (
    <button className="flex gap-4 justify-center items-center self-center px-4 py-3.5 mt-10 max-w-full text-sm font-semibold text-center bg-white border border-solid shadow-2xl border-[color:var(--button-general-outline,#F7F7F7)] min-w-11 rounded-[100px] text-neutral-900 w-[300px]">
      <div className="flex shrink-0 self-stretch my-auto w-5 h-5" />
      <span className="self-stretch my-auto">Continue with Google</span>
    </button>
  );
}
