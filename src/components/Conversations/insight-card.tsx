import React from "react";
import { QuoteSection } from "./quote-section";
import { ClinicalSection } from "./clinical-section";
import { RecommendationsList } from "./recommendations-list";

interface InsightCardProps {
  title: string;
  quote: string;
  clinicalInsight: string;
  recommendations: string[];
}

export const InsightCard: React.FC<InsightCardProps> = ({
  title,
  quote,
  clinicalInsight,
  recommendations,
}) => {
  return (
    <article className="p-6 mb-4 bg-white rounded-3xl max-sm:p-4">
      <h2 className="mb-4 text-xl font-semibold text-orange-500 text-start">{title}</h2>
      <QuoteSection text={quote} />
      <ClinicalSection text={clinicalInsight} />
      <RecommendationsList recommendations={recommendations} />
    </article>
  );
};
