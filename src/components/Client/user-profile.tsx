import React from 'react';
import { EditableField } from './editable-field';

interface UserProfileProps {
  user?: {
    fullName: string;
    email: string;
  };
}

export const UserProfile: React.FC<UserProfileProps> = ({ 
  user = {
    fullName: "John Doe",
    email: "john.doe@example.com"
  }
}) => {
  const handleSaveFullName = (newValue: string) => {
    // Implement API call to update user's full name
    console.log('Saving new full name:', newValue);
  };

  const handleSaveEmail = (newValue: string) => {
    // Implement API call to update user's email
    console.log('Saving new email:', newValue);
  };

  return (
    <div className="p-6 space-y-6">
      <EditableField 
        label="Full Name"
        value={user.fullName}
        onSave={handleSaveFullName}
      />
      <EditableField 
        label="Email"
        value={user.email}
        onSave={handleSaveEmail}
      />
    </div>
  );
};
