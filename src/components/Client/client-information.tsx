import React from "react";
import { EditableField } from "./editable-field";

export const ClientInformation: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-wrap gap-2.5 p-4 mt-5 rounded-3xl bg-white bg-opacity-60 ">
      <section className="px-8 py-6 rounded-3xl bg-white bg-opacity-60 min-w-60  max-md:px-5 max-md:max-w-full">
        <h2 className="text-4xl text-neutral-900">Client's Information</h2>
        <div className="mt-10 max-w-full w-[460px]">
          <EditableField label="Full Name" value="Mark Anderson" />
          <div className="mt-8">
            <EditableField label="E-mail" value="mark.anderson@gmail.com" />
          </div>
          <div className="mt-8">
            <EditableField label="Phone Number" value="+1 693-021-12-23" />
          </div>
        </div>
      </section>
    </div>
  );
}; 