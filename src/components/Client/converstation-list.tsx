import React from "react";
import { ConversationCard } from "./conversation-card";

const conversationRecords: any[] = [ //NOTE: This is a temporary type for the conversation records
  { date: "30 January, 2025", duration: "12: 02", noteType: "SOAP" },
  { date: "28 January, 2025", duration: "12: 02", noteType: "SOAP" },
  { date: "24 January, 2025", duration: "12: 02", noteType: "SOAP" },
  { date: "22 January, 2025", duration: "12: 02", noteType: "SOAP" },
  { date: "30 January, 2025", duration: "12: 02", noteType: "SOAP" },
  { date: "28 January, 2025", duration: "12: 02", noteType: "SOAP" },
];

export const ConversationList: React.FC = () => {
  return (
    <section className="grow shrink py-6 pr-3 pl-6 leading-none rounded-3xl bg-white bg-opacity-60 min-w-60 text-neutral-900 w-full max-md:pl-5 max-md:max-w-full">
      <header className="flex flex-wrap gap-4 items-center px-6 py-3 w-full rounded-3xl max-md:px-5 max-md:max-w-full">
        <span className="self-stretch my-auto w-[322px]">
          Conversation Date
        </span>
        <span className="self-stretch my-auto w-[200px]">Duration</span>
        <span className="self-stretch my-auto w-[300px]">
          Summary Note Type
        </span>
      </header>

      <div className="flex flex-wrap flex-1 gap-2.5 mt-3 size-full max-md:max-w-full">
        <div className="overflow-hidden flex-1 shrink w-full basis-0 min-w-60 max-md:max-w-full">
          {conversationRecords.map((record, index) => (
            <div key={index} className={index > 0 ? "mt-2" : ""}>
              <ConversationCard record={record} />
            </div>
          ))}
        </div>
        <div className="flex shrink-0 self-start w-1.5 bg-white rounded-3xl h-[389px]" />
      </div>
    </section>
  );
};
