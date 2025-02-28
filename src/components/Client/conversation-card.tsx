import React from "react";

interface ConversationCardProps {
  record: any; //NOTE: This is a temporary type for the conversation record
}

export const ConversationCard: React.FC<ConversationCardProps> = ({
  record,
}) => {
  return (
    <article className="flex gap-4 items-center p-6 w-full bg-white rounded-3xl min-h-[77px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-4 items-center self-stretch my-auto w-full basis-0 min-w-60 max-md:max-w-full">
        <time className="self-stretch my-auto text-2xl text-neutral-900 w-[322px]">
          {record.date}
        </time>
        <span className="self-stretch my-auto w-[200px]">
          {record.duration}
        </span>
        <span className="self-stretch my-auto w-[300px]">
          {record.noteType}
        </span>
      </div>
    </article>
  );
};
