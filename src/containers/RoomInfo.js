import React from 'react';
import './App.css';

import Participants from './Participants';
import Announcements from './Announcements';

const RoomInfo = () => {
  return (
    <div className='bg-white w-1/4 h-full px-5 flex flex-col justify-between'>
      <Participants />
      <Announcements />
    </div>
  );
};

export default RoomInfo;
