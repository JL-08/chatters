import React, { useContext } from 'react';
import './Chat.css';
import Messages from './Messages/Messages';
import { MessageContext } from '../ChatApp/ChatApp';

const Chat = () => {
  const { messageList, name } = useContext(MessageContext);
  console.log('messageL', messageList);
  return (
    <div className='chat-container space-y-3'>
      <div id='messages'>
        {Object.entries(messageList).map((message, i) => (
          <Messages key={i} message={message[1]} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
