import React from 'react';
import '../App.css';

import ParticipantsList from '../ParticipantsList/ParticipantsList';
import Announcements from '../Announcements/Announcements';

const RoomInfo = () => {
  return (
    <div className='md:w-1/4 sm:w-full h-full md:px-5 sm:px-0 flex md:flex-col sm:flex-row sm:space-x-2 md:space-x-0 justify-between'>
      <ParticipantsList />
      <Announcements />
    </div>
  );
};

export default RoomInfo;
