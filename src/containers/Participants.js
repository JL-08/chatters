import React, { useContext } from 'react';
import './App.css';
import ParticipantsList from '../components/ParticipantsList/ParticipantsList';

import { MessageContext } from './ChatApp';

const Participants = () => {
  const { participantsList } = useContext(MessageContext);
  const containerStyle = {
    height: '85%',
    backgroundColor: '#f9fafd',
  };
  return (
    <div className='box-shadow box-bg-color h-3/5 rounded-2xl p-3'>
      <h1 className='font-bold mb-2'>Participants</h1>
      <div style={containerStyle}>
        {Object.entries(participantsList).map((user, i) => (
          <ParticipantsList key={i} user={user[1].name} />
        ))}
      </div>
    </div>
  );
};

export default Participants;
