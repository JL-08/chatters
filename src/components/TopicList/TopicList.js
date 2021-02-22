import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './TopicList.css';
import Topic from './Topic/Topic';

import { MessageContext } from '../ChatApp/ChatApp';

const TopicList = () => {
  // const getTopicsBySize = (topics, size) => {
  //   if (topics.length < size) {
  //     return topics.slice(0, topics.length);
  //   } else {
  //     return topics.slice(0, size);
  //   }
  // };

  const removeCurrentTopic = (topics, currentTopic) => {
    return topics.filter((val) => val.name !== currentTopic);
  };

  const { topic, topicList, changeTopic, disconnectUser } = useContext(
    MessageContext
  );

  const newTopicList = removeCurrentTopic(topicList, topic);

  return (
    <div className='bg-white w-1/4 h-full px-5'>
      <div className='box-shadow box-bg-color h-3/5 rounded-2xl p-3'>
        <h1 className='text-2xl mb-1'>#{topic}</h1>
        <Link onClick={(e) => disconnectUser(e)} to={'/'}>
          <button className='mb-2'>Leave</button>
        </Link>
        <div>
          <ul className='font-bold'>Join other topics</ul>
          {Object.entries(newTopicList).map((topic, i) => (
            <Topic key={i} topic={topic[1].name} changeTopic={changeTopic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicList;
