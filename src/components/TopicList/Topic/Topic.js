import React from 'react';

const Topic = ({ topic, changeTopic }) => {
  console.log(topic);
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
