import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './TopicList.css';
import Topic from './Topic/Topic';

import { MessageContext } from '../ChatApp/ChatApp';

const TopicList = () => {
  const removeCurrentTopic = (topics, currentTopic) => {
    return topics.filter((val) => val.name !== currentTopic);
  };

  const { topic, topicList, changeTopic, disconnectUser, name } = useContext(
    MessageContext
  );

  const newTopicList = removeCurrentTopic(topicList, topic);

  return (
    <div className='md:w-1/4 sm:w-full md:h-full sm:h-1/3 md:px-5 sm:px-0'>
      <div className='flex sm:flex-row md:flex-col box-shadow box-bg-color md:h-3/5 sm:h-full rounded-2xl p-3'>
        <div className='md:flex-col md:w-full sm:w-1/2 sm:flex'>
          <h1 className='text-2xl mb-1'>
            #{topic} as {name}
          </h1>
          <Link onClick={(e) => disconnectUser(e)} to={'/'}>
            <button className='mb-2 text-md'>Leave</button>
          </Link>
        </div>
        <div className='sm:w-1/2 flex sm:flex-row md:flex-col space-x-2'>
          <ul className='font-bold sm:hidden'>Join other topics</ul>
          {Object.entries(newTopicList).map((topic, i) => (
            <Topic key={i} topic={topic[1].name} changeTopic={changeTopic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicList;
