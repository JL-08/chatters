import React, { useContext } from 'react';
import './Chat.css';
import Messages from './Messages/Messages';
import { MessageContext } from '../ChatApp/ChatApp';

const Chat = () => {
  const { messageList, socketId } = useContext(MessageContext);

  return (
    <div className='chat-container space-y-3'>
      <div id='messages'>
        {Object.entries(messageList).map((message, i) => (
          <Messages key={i} message={message[1]} socketId={socketId} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
