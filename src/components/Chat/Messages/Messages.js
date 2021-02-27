import React from 'react';
import moment from 'moment';

const Messages = ({ message, socketId }) => {
  let isSentByCurrentUser = false;
  let formatDate = 0;

  if (message.socketId === socketId) {
    isSentByCurrentUser = true;
  }

  if (message.sentAt.length > 8) {
    formatDate = moment(message.sentAt).format('h:mm a');
  } else {
    formatDate = message.sentAt;
  }

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
              <span className='date'>{formatDate}</span>
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
            <span className='date'>{formatDate}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
