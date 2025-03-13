import React from 'react';
import { Modal } from '../Common/modal';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center p-5">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
          Logout Confirmation
        </h2>
        <p className="text-neutral-600 mb-8">
          Are you sure you want to logout? You will need to login again to access your account.
        </p>
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 text-sm font-medium text-neutral-900 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-6 py-3 text-sm font-medium text-white bg-orange-500 rounded-xl hover:bg-orange-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </Modal>
  );
}; 