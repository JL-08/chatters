import React from 'react';
import '../App.css';
import './ChatRoom.css';
import Chat from '../Chat/Chat';
import MessageInput from '../MessageInput/MessageInput';

const ChatRoom = () => {
  return (
    <div className='box-outline md:w-2/4 sm:w-full md:h-full bg-blue-50 p-5 rounded-2xl chatroom-container'>
      <Chat />
      <MessageInput />
    </div>
  );
};

export default ChatRoom;
