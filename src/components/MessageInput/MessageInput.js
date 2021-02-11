import React from 'react';
import './MessageInput.css';

const MessageInput = ({ sendMessage, message, setMessage }) => {
  return (
    <div className='input-container'>
      <div className='input-wrapper'>
        <input
          type='text'
          id='text-input'
          placeholder='Message goes here...'
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button className='btn-send' onClick={(e) => sendMessage(e)}>
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
