"use client";

import React from "react";
import { Modal } from "./Common/modal";
import { DropdownIcon } from "../icons/dropdown-icon";
import { RecordIcon } from "../icons/record-icon";
import { CloseIcon } from "../icons/close-icon";

interface NewRecordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewRecordModal: React.FC<NewRecordModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <section className="w-[758px] max-md:max-w-[758px] max-md:w-[90%] max-sm:w-full p-8">
        <header className="flex justify-between items-center mb-5">
          <h2 className="text-2xl text-neutral-900 text-opacity-50 max-sm:text-xl">
            New Record
          </h2>
          <button
            onClick={onClose}
            className="flex justify-center items-center p-2.5 w-9 h-9 cursor-pointer bg-zinc-100 rounded-[40px]"
            aria-label="Close modal"
          >
            <CloseIcon />
          </button>
        </header>

        <form>
          <div className={`relative mb-5`}>
            <input
              type={"text"}
              placeholder={"Full Name"}
              className="px-5 py-2.5 w-full text-2xl border-b border-solid border-[none] border-b-[#bfbfbf] border-b-opacity-50 h-[66px] text-neutral-900 text-opacity-80 max-sm:h-14 max-sm:text-xl"
            />
          </div>
          <div className="flex gap-4 mb-5 max-md:flex-col max-md:gap-5">
            <div className="relative mb-5 w-full">
              <input
                type="email"
                placeholder="E-mail"
                className="px-5 py-2.5 w-full text-2xl border-b border-solid border-[none] border-b-[#bfbfbf] border-b-opacity-50 h-[66px] text-neutral-900 text-opacity-80 max-sm:h-14 max-sm:text-xl"
              />
            </div>
            <div className="relative mb-5 w-full">
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-5 py-2.5 w-full text-2xl border-b border-solid border-[none] border-b-[#bfbfbf] border-b-opacity-50 h-[66px] text-neutral-900 text-opacity-80 max-sm:h-14 max-sm:text-xl"
              />
            </div>
          </div>

          <div className="relative mb-5 w-full">
            <input
              type="text"
              placeholder="Summary Note Type"
              className="px-5 py-2.5 w-full text-2xl border-b border-solid border-[none] border-b-[#bfbfbf] border-b-opacity-50 h-[66px] text-neutral-900 text-opacity-80 max-sm:h-14 max-sm:text-xl"
            />
            <button
              type="button"
              className="flex absolute right-0 top-2/4 justify-center items-center w-12 h-12 bg-white border border-solid -translate-y-2/4 cursor-pointer border-neutral-200 rounded-[40px]"
              aria-label="Open dropdown"
            >
              <DropdownIcon />
            </button>
          </div>

          <div className="flex justify-end px-0 py-4">
            <button
              type="submit"
              className="flex gap-2 items-center py-2.5 pr-4 pl-3 bg-orange-500 cursor-pointer border-[none] rounded-[40px] max-sm:justify-center max-sm:w-full"
            >
              <RecordIcon />
              <span className="text-sm font-medium text-white">
                Start Record
              </span>
            </button>
          </div>
        </form>
      </section>
    </Modal>
  );
};

export default NewRecordModal;
