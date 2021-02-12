import React from 'react';

const Messages = ({ message, name }) => {
  let isSentByCurrentUser = false;

  if (message.name === name) {
    isSentByCurrentUser = true;
  }
  return (
    <div>
      {isSentByCurrentUser ? (
        <div className='align-right'>
          <div className='user-message'>
            <div className='user-inner-container'>
              <div className='user-message-container'>
                {/* <p className='username'>You</p> */}
                <p className='text'>{message.msg}</p>
              </div>
              <span className='date'>{message.time}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className='other-message'>
          <div className='other-inner-container'>
            <div className='other-message-container'>
              <p className='username'>{message.name}</p>
              <p className='text'>{message.msg}</p>
            </div>
            <span className='date'>{message.time}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
