import React from "react";

interface QuoteSectionProps {
  text: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ text }) => {
  return (
    <section className="mb-4 text-start">
      <h3 className="mb-2 text-sm font-semibold text-sky-950">Quote:</h3>
      <blockquote className="mb-4 text-sm leading-4 text-neutral-900 text-opacity-50">
        {text}
      </blockquote>
    </section>
  );
};
