import React, { useContext } from 'react';
import './App.css';
import './Announcements.css';
import AnnouncementMessage from '../components/AnnouncementMessage/AnnouncementMessage';

import { MessageContext } from './ChatApp';

//TODO: add scroll bars and scroll to bottom
const Announcements = () => {
  const { adminMessageList } = useContext(MessageContext);

  return (
    <div className='box-shadow box-bg-color h-2/6 rounded-2xl p-3'>
      <h1 className='font-bold mb-2'>Announcements</h1>
      <div className='announce-container'>
        {Object.entries(adminMessageList).map((message, i) => (
          <AnnouncementMessage key={i} message={message[1].msg} />
        ))}
      </div>
    </div>
  );
};

export default Announcements;
