import React from 'react';

const AnnouncementMessage = ({ message }) => {
  let colorStyle = {};
  if (message.includes('has left the chat')) {
    colorStyle = {
      color: '#FF2955',
    };
  } else if (message.includes('has joined the chat')) {
    colorStyle = {
      color: '#1BAA38',
    };
  } else {
    colorStyle = {
      color: '#3B33A1',
    };
  }
  return (
    <p style={colorStyle} id='announce-msg-admin'>
      {message}
    </p>
  );
};

export default AnnouncementMessage;
