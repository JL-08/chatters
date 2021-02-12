import React from 'react';
import './App.css';
import Chat from '../components/Chat/Chat';
import MessageInput from '../components/MessageInput/MessageInput';

const ChatRoom = ({ sendMessage, message, setMessage, messageList, name }) => {
  return (
    <div className='box-outline w-2/4 bg-blue-50 p-5 rounded-2xl'>
      <Chat messageList={messageList} name={name} />
      <MessageInput
        sendMessage={sendMessage}
        message={message}
        setMessage={setMessage}
      />
    </div>
  );
};

export default ChatRoom;
