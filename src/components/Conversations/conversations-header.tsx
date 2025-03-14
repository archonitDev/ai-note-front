import React from "react";
import { useNavigate } from "react-router-dom";

export const ConversationsHeader: React.FC = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

  return (
    <section className="flex relative flex-wrap gap-5 justify-between mt-8 w-full max-md:max-w-full my-5">
      <div className="flex gap-10">
        <button onClick={handleBackClick} className="flex overflow-hidden gap-2.5 justify-center items-center self-start px-2.5 w-12 h-12 bg-white border border-solid border-[color:var(--Gray-4,#DFDFDF)] rounded-[40px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/22daf4b21d1d4b0a95de48f1bbb2282d/c49f14e75b0f336bdd1f56e83eaddb0cb0a311e39ef5d30928661a82edb20b62?placeholderIfAbsent=true"
            alt="Back"
            className="object-contain self-stretch my-auto w-7 aspect-square"
          />
        </button>
        <h1 className="text-4xl text-neutral-900">Record 25 Jan, 2025</h1>
      </div>
      <button className="flex overflow-hidden gap-2.5 items-center self-end py-2.5 pr-4 pl-3 text-sm font-medium text-[#F58585] bg-white rounded-[40px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/22daf4b21d1d4b0a95de48f1bbb2282d/fb720748dd0cec02dfaf956bd40da76ee4abdb9e2cff26fe8dc92e8cc3b278da?placeholderIfAbsent=true"
          alt="Record"
          className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
        />
        <span className="self-stretch my-auto">Delete record</span>
      </button>
    </section>
  );
};
