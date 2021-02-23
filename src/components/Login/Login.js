import React, { useState, useEffect } from 'react';
import '../App.css';
import './Login.css';

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

  const selectTopic = (e) => {
    const inputTopic = document.querySelector('#inputTopic');
    inputTopic.value = e.target.innerHTML;
    setTopic(e.target.innerHTML);
  };

  return (
    <div className='bg-login h-full w-full flex justify-center'>
      <div className='login-container bg-white rounded-container p-5 flex border border-black rounded-lg'>
        <div className='login-wrapper h-full w-2/3 m-auto flex flex-col '>
          <h2 className='text-center text-4xl font-bold'>LOGIN</h2>
          <form className='flex flex-col space-y-3'>
            <div class='relative mt-4'>
              <input
                type='text'
                required=''
                placeholder='Name'
                onChange={(event) => setName(event.target.value)}
                className='w-full px-4 py-2 mtb-2 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2'
              />
            </div>
            {/* <div>
              <label className='block text-sm text-gray-00'>Name</label>
              <input
                className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
                type='text'
                required=''
                placeholder='ex. Bob, Dalisay, John, etc.'
                onChange={(event) => setName(event.target.value)}
              />
            </div> */}
            <div class='relative '>
              <input
                id='inputTopic'
                type='text'
                required=''
                placeholder='Topic'
                onChange={(event) => setTopic(event.target.value)}
                className='w-full px-4 py-2 mtb-2 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2'
              />
            </div>
            {/* <div>
              <label className='block text-sm text-gray-00'>Topic</label>
              <input
                id='inputTopic'
                className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
                type='text'
                required=''
                placeholder='ex. Dogs, Programming, Hiking, etc.'
                onChange={(event) => setTopic(event.target.value)}
              />
            </div> */}
            <ul>Active Topics</ul>
            <div className='flex flex-wrap'>
              {Object.entries(topicList).map((topic, i) => (
                <Topics
                  key={i}
                  topic={topic[1].name}
                  selectTopic={selectTopic}
                />
              ))}
            </div>
            <div className='mt-4'>
              <Link onClick={handleLogin} to={'/chat'}>
                {/* <button
                  className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded'
                  type='submit'
                >
                  Submit
                </button> */}
                <button
                  class='px-8 py-2 w-full font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2'
                  type='submit'
                >
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
