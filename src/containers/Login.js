import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Room = () => {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');

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
          <div class=''>
            <label class='block text-sm text-gray-00'>Name</label>
            <input
              class='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
              type='text'
              required=''
              placeholder='ex. Bob, Dalisay, John, etc.'
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div class=''>
            <label class='block text-sm text-gray-00'>Topic</label>
            <input
              class='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
              type='text'
              required=''
              placeholder='ex. Dogs, Programming, Hiking, etc.'
              onChange={(event) => setTopic(event.target.value)}
            />
          </div>
          <ul>Active Topics</ul>
          <div className='flex space-x-3'>
            <div class='w-1/2 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border border-solid border-gray-800'>
              <h4 class='mb-4 font-semibold text-gray-600 dark:text-gray-300'>
                Programming
              </h4>
              <p class='text-gray-600 dark:text-gray-400'>200 people are in</p>
            </div>
            <div class='w-1/2 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border border-solid border-gray-800'>
              <h4 class='mb-4 font-semibold text-gray-600 dark:text-gray-300'>
                Animals
              </h4>
              <p class='text-gray-600 dark:text-gray-400'>1999 people are in</p>
            </div>
          </div>
          <div class='mt-4'>
            <Link
              onClick={(e) => (!name || !topic ? e.preventDefault() : null)}
              to={`/chat?name=${name}&topic=${topic}`}
            >
              <button
                class='px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded'
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

export default Room;
