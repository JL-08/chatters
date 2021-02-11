import React from 'react';
import './App.css';
import Chat from '../components/Chat/Chat';
import MessageInput from '../components/MessageInput/MessageInput';

const ChatRoom = () => {
  return (
    <div className='rounded-container w-2/4 bg-blue-50 p-5'>
      <Chat />
      <MessageInput />
    </div>
  );
};

export default ChatRoom;
