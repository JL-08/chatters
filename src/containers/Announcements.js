import React, { useContext } from 'react';
import './App.css';
import './Announcements.css';
import AnnouncementMessage from '../components/AnnouncementMessage/AnnouncementMessage';

import { MessageContext } from './ChatApp';

const Announcements = () => {
  const { adminMessageList } = useContext(MessageContext);

  return (
    <div className='box-shadow box-bg-color h-2/6 rounded-2xl p-3'>
      <h1 className='font-bold'>Announcements</h1>
      <div className='announce-container py-2 px-5'>
        {/* <p id='announce-msg-users'>
          <span id='announce-user'>user</span> has joined the chat
        </p> */}
        {Object.entries(adminMessageList).map((message, i) => (
          <AnnouncementMessage key={i} message={message[1].msg} />
        ))}
      </div>
    </div>
  );
};

export default Announcements;
