import React from 'react';
import './Chat.css';
import Messages from './Messages/Messages';

const Chat = ({ messageList }) => {
  return (
    <div className='chat-container'>
      <div id='messages'>
        {Object.entries(messageList).map((message) => (
          <Messages key={message[1].name} message={message[1]} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
