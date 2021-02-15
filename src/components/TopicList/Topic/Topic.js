import React from 'react';

const Topic = ({ topic, changeTopic }) => {
  return (
    <li
      className='list-item'
      onClick={(e) => {
        changeTopic(e);
      }}
    >
      {topic}
    </li>
  );
};

export default Topic;
