import React from "react";

interface RecommendationsListProps {
  recommendations: string[];
}

export const RecommendationsList: React.FC<RecommendationsListProps> = ({
  recommendations,
}) => {
  return (
    <section className="mb-4 text-start">
      <h3 className="mb-2 text-sm font-semibold text-sky-950">
        Recommendations:
      </h3>
      <ul className="p-0 m-0 text-sm leading-4 list-none text-neutral-900">
        {recommendations.map((recommendation, index) => (
          <li key={index} className="mb-2">
            {recommendation}
          </li>
        ))}
      </ul>
    </section>
  );
};
