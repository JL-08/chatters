import React from 'react';
import './App.css';

const Participants = () => {
  return (
    <div className='bg-white w-1/4 h-full px-5 flex flex-col justify-between'>
      <div className='box-shadow bg-blue-50 h-3/5 rounded-2xl p-3'>
        <h1 className='font-bold'>Participants</h1>
      </div>
      <div className='box-shadow bg-blue-50 h-2/6 rounded-2xl p-3'>
        <h1 className='font-bold'>Announcements</h1>
      </div>
    </div>
  );
};

export default Participants;
