import React from 'react'
import { ConversationsHeader } from '../components/Conversations/conversations-header'
import TranscriptViewer from '../components/Conversations/transcript-viewer'
export const ConversationPage = () => {
  return (
        <div>
          <ConversationsHeader />
          <TranscriptViewer />
        </div>
  ) 
}
