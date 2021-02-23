import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import Topics from './Topics/Topics';
import { getAllTopics } from '../../utils/api';

const Login = ({ setName, setTopic, handleLogin }) => {
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    (async () => {
      const topics = await getAllTopics();
      if (topics) {
        setTopicList([...topics]);
      }
    })();
  }, []);

  const containerStyle = {
    height: '70%',
    width: '50%',
    margin: 'auto',
  };
  const contentWrapper = {
    marginTop: '2em',
  };

  return (
    <div style={containerStyle} className='rounded-container p-5 flex'>
      <div style={contentWrapper} className='h-full w-2/3 m-auto flex flex-col'>
        <h2 className='text-center text-4xl font-bold'>LOGIN</h2>
        <form className='flex flex-col space-y-3'>
          <div className=''>
            <label className='block text-sm text-gray-00'>Name</label>
            <input
              className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
              type='text'
              required=''
              placeholder='ex. Bob, Dalisay, John, etc.'
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className=''>
            <label className='block text-sm text-gray-00'>Topic</label>
            <input
              className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
              type='text'
              required=''
              placeholder='ex. Dogs, Programming, Hiking, etc.'
              onChange={(event) => setTopic(event.target.value)}
            />
          </div>
          <ul>Active Topics</ul>
          <div className='flex space-x-3'>
            {Object.entries(topicList).map((topic, i) => (
              <Topics key={i} topic={topic[1].name} />
            ))}
          </div>
          <div className='mt-4'>
            <Link onClick={handleLogin} to={'/chat'}>
              <button
                className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded'
                type='submit'
              >
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
