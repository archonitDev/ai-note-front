import React from "react";
import { ClientTableHeader } from "./client-table-header";
import { ClientCard } from "./client-card";

const clients: any[] = [ //NOTE: This is a temporary type for the client data
  {
    name: "Mark Anderson",
    email: "mark.anderson@gmail.com",
    phone: "+1 693-021-12-23",
    lastSessionDate: "24 January, 2025",
  },
  {
    name: "Alex Thompson",
    email: "alex_thompson@gmail.com",
    phone: "+1 693-342-23-45",
    lastSessionDate: "22 January, 2025",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@gmail.com",
    phone: "+1 693-657-45-67",
    lastSessionDate: "28 January, 2025",
  },
  {
    name: "Emily Williams",
    email: "emily.williams@gmail.com",
    phone: "+1 693-876-98-76",
    lastSessionDate: "30 January, 2025",
  },
  {
    name: "Ryan Davis",
    email: "ryan.davis@gmail.com",
    phone: "+1 693-234-56-78",
    lastSessionDate: "2 February, 2025",
  },
  {
    name: "Jessica Martinez",
    email: "jessica.martinez@gmail.com",
    phone: "+1 693-987-65-43",
    lastSessionDate: "5 February, 2025",
  },
  {
    name: "David Robinson",
    email: "david.robinson@gmail.com",
    phone: "+1 693-876-54-32",
    lastSessionDate: "8 February, 2025",
  },
  {
    name: "Megan Clark",
    email: "megan.clark@gmail.com",
    phone: "+1 693-765-43-21",
    lastSessionDate: "10 February, 2025",
  },
];

export const ClientTable = () => {
  return (
    <section className="overflow-hidden relative p-3 mt-12 w-full text-sm leading-none rounded-3xl bg-white bg-opacity-60 min-h-[715px] text-neutral-900 max-md:mt-10">
      <ClientTableHeader />
      <div className="grid flex-col gap-2.5 mt-2.5 w-full">
        {clients.map((client, index) => (
          <ClientCard key={index} client={client} />
        ))}
      </div>
    </section>
  );
};
