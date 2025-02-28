import React, { useState } from 'react';
import { TabSection } from '../components/Client/tab-section';
import { UserProfile } from '../components/Client/user-profile';
import { LogoutModal } from '../components/Auth/logout-modal';
import { EditableField } from '../components/Client/editable-field';

export const AccountSettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // This would typically come from your auth context or user state
  const user = {
    fullName: "John Doe",
    email: "john.doe@example.com"
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    // Implement actual logout logic here
    console.log('Logging out...');
    setShowLogoutModal(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

      <section className="flex sm:flex-row flex-col overflow-hidden relative gap-2.5 p-4 mt-5 text-sm rounded-3xl bg-white bg-opacity-60 min-h-[625px]">
        <div className="sm:w-[30%] w-full">
          <TabSection 
            activeTab={activeTab} 
            onTabChange={setActiveTab}
            tabs={[
              { id: 'profile', label: 'Profile Information' },
              { id: 'password', label: 'Change Password' },
              { id: 'logout', label: 'Log Out', onClick: handleLogout }
            ]}
          />
        </div>
        <div className='sm:w-[70%] w-full'>
          {activeTab === "profile" && <UserProfile user={user} />}
          {activeTab === "password" && <ChangePasswordForm />}
        </div>
      </section>

      <LogoutModal 
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleConfirmLogout}
      />
    </div>
  );
}

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match');
      return;
    }
    // Implement password change logic here
    console.log('Changing password...');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md space-y-6">
      <EditableField
        label="Current Password"
        value={currentPassword}
        onSave={setCurrentPassword}
        type="password"
      />
      <EditableField
        label="New Password"
        value={newPassword}
        onSave={setNewPassword}
        type="password"
      />
      <EditableField
        label="Confirm New Password"
        value={confirmPassword}
        onSave={setConfirmPassword}
        type="password"
      />
      <button 
        type="submit" 
        className="w-full bg-orange-500 text-white py-2.5 px-4 rounded-[40px] hover:bg-orange-600 text-sm font-medium"
      >
        Update Password
      </button>
    </form>
  );
};
