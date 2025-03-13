import React from "react";
import { useNavigate } from "react-router-dom";
interface UserProfileProps {
  user: any //NOTE: This is a temporary type for the user profile data
}

export const UserProfile = ({ user }: UserProfileProps) => {
  const navigate = useNavigate();
  return (
    <section className="flex gap-2 items-center">
      <div className="overflow-hidden gap-2.5 self-stretch px-2.5 my-auto w-12 h-12 text-xl text-center whitespace-nowrap bg-zinc-100 min-h-12 rounded-[40px] text-slate-400 flex items-center justify-center">
        {user.initials}
      </div>
      <div className="self-stretch my-auto text-sm">
        <h2 className="font-medium text-neutral-900">{user.name}</h2>
        <p className="mt-1 leading-none text-neutral-900 cursor-pointer" onClick={() => navigate('/account-settings')}>Settings</p>
      </div>
    </section>
  );
};
