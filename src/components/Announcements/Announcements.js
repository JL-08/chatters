import React, { useContext } from 'react';
import '../App.css';
import './Announcements.css';
import AnnouncementMessage from './AnnouncementMessage/AnnouncementMessage';

import { MessageContext } from '../ChatApp/ChatApp';

//TODO: add scroll bars and scroll to bottom
const Announcements = () => {
  const { adminMessageList } = useContext(MessageContext);

  return (
    <div className='box-shadow box-bg-color md:h-2/6 sm:h-96 md:w-full sm:w-1/2 rounded-2xl p-3'>
      <h1 className='font-bold mb-2'>Announcements</h1>
      <div className='announce-container'>
        {Object.entries(adminMessageList).map((message, i) => (
          <AnnouncementMessage key={i} message={message[1].messageText} />
        ))}
      </div>
    </div>
  );
};

export default Announcements;
