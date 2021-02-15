import React, { useContext } from 'react';
import '../App.css';
import './TopicList.css';
import Topic from './Topic/Topic';

import { MessageContext } from '../ChatApp/ChatApp';

const TopicList = () => {
  const { topic, topicList, changeTopic } = useContext(MessageContext);

  let firstTenTopics = [];
  if (topicList.length < 10) {
    firstTenTopics = topicList.slice(0, topicList.length);
  } else {
    firstTenTopics = topicList.slice(0, 10);
  }
  console.log(firstTenTopics);

  return (
    <div className='bg-white w-1/4 h-full px-5'>
      <div className='box-shadow box-bg-color h-3/5 rounded-2xl p-3'>
        <h1 className='text-2xl mb-2'>#{topic}</h1>
        <div>
          <ul className='font-bold'>Join other topics</ul>
          {firstTenTopics.map((topic, i) => (
            <Topic key={i} topic={topic} changeTopic={changeTopic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicList;
