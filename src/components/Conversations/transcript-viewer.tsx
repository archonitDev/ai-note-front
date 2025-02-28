"use client";
import React, { useState } from "react";
import { TabSelector } from "./tab-selector";
import { TranscriptItem } from "./transcription-item";
import { InsightCard } from "./insight-card";

const transcriptData = [
  {
    timestamp: "00:10",
    text: "Good afternoon, Mark. How are you feeling today? Hi, Dr. Carter. I'm okay, I guess. A bit anxious, to be honest.",
  },
  {
    timestamp: "00:12",
    text: "I appreciate your honesty. Can you tell me what's been making you feel anxious lately? Well, I've been thinking a lot about work. There are some upcoming deadlines, and I'm worried I won't meet them. That sounds stressful. What specifically about the deadlines is causing you the most anxiety?",
  },
  {
    timestamp: "00:15",
    text: "I think it's the fear of letting my team down. I don't want to be the reason we miss our goals. It's understandable to feel that way, especially when you care about your team's success. Have you had any strategies that have helped you manage this anxiety in the past?",
  },
  {
    timestamp: "00:21",
    text: "Sometimes I try to break down the tasks into smaller parts, but I often end up feeling overwhelmed anyway. Breaking tasks down is a good strategy. It might help to set realistic goals for each day. Would you be open to creating a more structured plan together? Yeah, that could help. I think having a plan would make things feel more manageable.",
  },
  {
    timestamp: "00:25",
    text: "Great! Let's start by identifying the most pressing deadlines and then outline what steps you can take to tackle them one at a time. Okay, that sounds good. I have a project due next week that I need to focus on first. Perfect. What are the main components of that project?",
  },
  {
    timestamp: "00:31",
    text: "I need to gather data, analyze it, and then prepare a presentation.How about we break those components down into smaller tasks? For example, when do you think you could gather the data? I could probably do that by Wednesday. That's a solid plan. And once you have the data, how much time do you think you'll need for analysis?",
  },
];

const insightsData = [
  {
    title: "Task Initiation Pattern",
    quote:
      "I know what I need to do, but I just can't seem to start. Or when I do start, I get distracted so easily.",
    clinicalInsight:
      "Client demonstrates classic ADHD-related task paralysis, likely stemming from executive dysfunction in the initiation and planning circuits. The pattern suggests overwhelming feelings when facing complex tasks, leading to avoidance behaviors. Notable that client can engage in non-essential tasks (reorganizing desk drawers), indicating the ability to initiate action when anxiety is low.",
    recommendations: [
      'Implement "5-Minute Rule" - commit to starting task for only 5 minutes',
      "Use body doubling technique in therapy sessions to practice task initiation",
      "Develop task-breakdown worksheets specifically tailored to work projects",
      'Practice implementation intentions using "If-Then" planning',
    ],
  },
  {
    title: "Hyperfocus Pattern",
    quote:
      "When there's a real deadline crunch, I can sometimes hyperfocus and get everything done. But that's stressful, and the quality isn't always great.",
    clinicalInsight:
      "Client shows typical ADHD pattern of urgency-based motivation and hyperfocus under pressure. This suggests intact capability but impaired regulation of attention rather than attention deficit. The stress-performance pattern indicates potential for burnout if not addressed.",
    recommendations: [
      "Create artificial deadlines with accountability partner",
      "Break larger projects into multiple smaller deadlines",
      'Implement "Time Timer" visual tool for time awareness',
      "Teach energy management techniques alongside time management",
      "Use CBT to address beliefs about only being able to work under pressure",
    ],
  },
];

export default function TranscriptViewer() {
  const [activeTab, setActiveTab] = useState<"transcript" | "notes">(
    "transcript"
  );

  return (
    <div className="overflow-hidden relative">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="flex gap-6 p-3 rounded-3xl bg-white bg-opacity-60 max-md:flex-col max-sm:p-2">
        <section className="flex-1 px-4 py-0 max-md:p-0 max-md:w-full">
          <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="flex flex-col gap-4">
            {transcriptData.map((item, index) => (
              <TranscriptItem
                key={index}
                timestamp={item.timestamp}
                text={item.text}
              />
            ))}
          </div>
        </section>

        <aside className="flex-1 px-4 py-0 max-md:p-0 max-md:w-full">
          {insightsData.map((insight, index) => (
            <InsightCard
              key={index}
              title={insight.title}
              quote={insight.quote}
              clinicalInsight={insight.clinicalInsight}
              recommendations={insight.recommendations}
            />
          ))}
        </aside>
      </main>
    </div>
  );
}
