import React from 'react';
import '../App.css';

import ParticipantsList from '../ParticipantsList/ParticipantsList';
import Announcements from '../Announcements/Announcements';

const RoomInfo = () => {
  return (
    <div className='w-1/4 h-full px-5 flex flex-col justify-between'>
      <ParticipantsList />
      <Announcements />
    </div>
  );
};

export default RoomInfo;
