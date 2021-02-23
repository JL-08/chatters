import React from 'react';

const Topics = ({ topic }) => {
  return (
    <div className='p-2 bg-white rounded-lg shadow-xs dark:bg-gray-800 border border-solid border-gray-800 hover:bg-gray-200'>
      <p className='font-semibold text-gray-600 dark:text-gray-300'>{topic}</p>
    </div>
  );
};

export default Topics;
