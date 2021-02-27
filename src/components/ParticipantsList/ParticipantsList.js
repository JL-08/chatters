import React, { useContext } from 'react';
import '../App.css';
import './ParticipantsList.css';

import Participants from './Participants/Participants';

import { MessageContext } from '../ChatApp/ChatApp';

const ParticipantsList = () => {
  const { participantsList } = useContext(MessageContext);

  return (
    <div className='box-shadow box-bg-color md:h-3/5 sm:h-96 md:w-full sm:w-1/2 rounded-2xl p-3'>
      <h1 className='font-bold mb-2'>Participants</h1>
      <div className='participants-container'>
        {participantsList.map((user, i) => (
          <Participants key={i} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ParticipantsList;
