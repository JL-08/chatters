import React from 'react';

const Messages = ({ message, name }) => {
  console.log('msg', message);
  let isSentByCurrentUser = false;

  if (message.sentBy === name) {
    isSentByCurrentUser = true;
  }
  console.log(isSentByCurrentUser);
  return (
    <div>
      {isSentByCurrentUser ? (
        <div className='align-right'>
          <div className='user-message'>
            <div className='user-inner-container'>
              <div className='user-message-container'>
                {/* <p className='username'>You</p> */}
                <p className='text'>{message.messageText}</p>
              </div>
              <span className='date'>{message.sentAt}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className='other-message'>
          <div className='other-inner-container'>
            <div className='other-message-container'>
              <p className='username'>{message.sentBy}</p>
              <p className='text'>{message.messageText}</p>
            </div>
            <span className='date'>{message.sentAt}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
