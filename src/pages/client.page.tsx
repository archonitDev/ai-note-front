import React, { useState } from 'react'
import { TabSection } from '../components/Client/tab-section';
import { ConversationList } from '../components/Client/converstation-list';
import { ClientInformation } from '../components/Client/client-information';
import { ClientHeader } from '../components/Client/client-header';

export const ClientPage = () => {
  const [activeTab, setActiveTab] = useState('conversations');

  return (
    <div>
      <ClientHeader />

      <section className="flex sm:flex-row flex-col overflow-hidden relative gap-2.5 p-4 mt-5 text-sm rounded-3xl bg-white bg-opacity-60 min-h-[625px]">
        <div className="sm:w-[30%] w-full">
          <TabSection activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        <div className='sm:w-[70%] w-full'>
          {activeTab === "conversations" ? (
            <ConversationList />
          ) : (
            <ClientInformation />
          )}
        </div>
      </section>
    </div>
  );
}
