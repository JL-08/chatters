import React, { useContext } from 'react';
import '../App.css';
import Participants from './Participants/Participants';

import { MessageContext } from '../ChatApp/ChatApp';

const ParticipantsList = () => {
  const { participantsList } = useContext(MessageContext);
  console.log('pariticiasinpsa', participantsList);
  const containerStyle = {
    height: '85%',
    backgroundColor: '#f9fafd',
  };
  return (
    <div className='box-shadow box-bg-color h-3/5 rounded-2xl p-3'>
      <h1 className='font-bold mb-2'>Participants</h1>
      <div style={containerStyle}>
        {participantsList.map((user, i) => (
          <Participants key={i} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ParticipantsList;
