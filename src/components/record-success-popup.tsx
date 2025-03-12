"use client";

import React from "react";
import { Modal } from "./Common/modal";
import { format } from "date-fns";

interface RecordSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewRecord: () => void;
  onBackToRecords: () => void;
  timestamp?: Date;
}

export const RecordSuccessModal: React.FC<RecordSuccessModalProps> = ({
  isOpen,
  onClose,
  onViewRecord,
  onBackToRecords,
  timestamp = new Date(),
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <section className="w-[460px] p-8 text-center">
        <h2 className="text-2xl font-medium text-neutral-900 mb-2">
          Record Successfully Saved
        </h2>
        
        <p className="text-neutral-600 mb-8">
          {format(timestamp, "MMMM d, yyyy 'at' h:mm a")}
        </p>

        <div className="flex flex-row gap-3">
          <button
            onClick={onViewRecord}
            className="w-full py-3 px-6 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
          >
            View the Record
          </button>
          
          <button
            onClick={onBackToRecords}
            className="w-full py-3 px-6 bg-white border border-neutral-200 text-neutral-900 rounded-full hover:bg-neutral-50 transition-colors"
          >
            Back to All Records
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default RecordSuccessModal; 