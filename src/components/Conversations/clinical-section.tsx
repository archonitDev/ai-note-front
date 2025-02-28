import React from "react";

interface ClinicalSectionProps {
  text: string;
}

export const ClinicalSection: React.FC<ClinicalSectionProps> = ({ text }) => {
  return (
    <section className="mb-4 text-start">
      <h3 className="mb-2 text-sm font-semibold text-sky-950">
        Clinical Insight:
      </h3>
      <p className="mb-4 text-sm leading-4 text-neutral-900">{text}</p>
    </section>
  );
};
