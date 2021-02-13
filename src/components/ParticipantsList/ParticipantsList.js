import React from 'react';

const ParticipantsList = ({ user }) => {
  return (
    <div className='w-full py-1 bg-white'>
      <p>{user}</p>
    </div>
  );
};

export default ParticipantsList;
