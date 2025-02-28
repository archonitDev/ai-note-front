import React from "react";

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`gap-2.5 self-stretch px-5 py-5 w-full rounded-xl min-h-[52px] ${
        isActive ? "text-orange-500 bg-white" : "text-neutral-900"
      }`}
    >
      {label}
    </button>
  );
};

interface TabConfig {
  id: string;
  label: string;
  onClick?: () => void;
}

interface TabSectionProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs?: TabConfig[];
}

export const TabSection: React.FC<TabSectionProps> = ({
  activeTab,
  onTabChange,
  tabs = [
    { id: 'conversations', label: 'Conversations' },
    { id: 'information', label: "Client's Information" }
  ]
}) => {
  return (
    <nav className="grow shrink p-3 font-medium w-full">
      {tabs.map((tab, index) => (
        <div key={tab.id} className={index > 0 ? "mt-4" : ""}>
          <Tab 
            label={tab.label} 
            isActive={activeTab === tab.id} 
            onClick={() => tab.onClick ? tab.onClick() : onTabChange(tab.id)} 
          />
        </div>
      ))}
    </nav>
  );
};
