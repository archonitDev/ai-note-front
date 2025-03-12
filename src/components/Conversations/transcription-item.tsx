import React from "react";

interface TranscriptItemProps {
  timestamp: string;
  text: string;
}

export const TranscriptItem: React.FC<TranscriptItemProps> = ({
  timestamp,
  text,
}) => {
  return (
    <article className="flex gap-6">
      <time className="text-sm font-semibold min-w-11 text-sky-950">
        {timestamp}
      </time>
      <p className="text-sm leading-4 text-neutral-900 text-opacity-50">
        {text}
      </p>
    </article>
  );
};
