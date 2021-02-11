import React from 'react';
import './App.css';
import Chat from '../components/Chat/Chat';
import MessageInput from '../components/MessageInput/MessageInput';

const ChatRoom = ({ sendMessage, message, setMessage }) => {
  return (
    <div className='rounded-container w-2/4 bg-blue-50 p-5'>
      <Chat />
      <MessageInput
        sendMessage={sendMessage}
        message={message}
        setMessage={setMessage}
      />
    </div>
  );
};

export default ChatRoom;
