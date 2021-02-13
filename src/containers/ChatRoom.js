import React from 'react';
import './App.css';
import Chat from '../components/Chat/Chat';
import MessageInput from '../components/MessageInput/MessageInput';

const ChatRoom = () => {
  return (
    <div className='box-outline w-2/4 bg-blue-50 p-5 rounded-2xl'>
      <Chat />
      <MessageInput />
    </div>
  );
};

export default ChatRoom;
