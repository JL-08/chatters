import React from 'react';
import './Topic.css';

const Topics = ({ topic, selectTopic }) => {
  return (
    <div
      className='hover-effect p-2 mr-3 bg-white rounded-lg shadow-xs border border-solid border-gray-800 hover:bg-gray-800'
      onClick={(e) => {
        selectTopic(e);
      }}
    >
      <p className='font-semibold'>{topic}</p>
    </div>
  );
};

export default Topics;
