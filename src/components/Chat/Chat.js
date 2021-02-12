import React from 'react';
import './Chat.css';
import Messages from './Messages/Messages';

const Chat = ({ messageList, name }) => {
  return (
    <div className='chat-container'>
      <div id='messages'>
        {Object.entries(messageList).map((message, i) => (
          <Messages key={i} message={message[1]} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
