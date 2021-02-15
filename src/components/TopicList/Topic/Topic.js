import React from 'react';

const Topic = ({ topic, changeTopic }) => {
  console.log(changeTopic);
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
