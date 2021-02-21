import React, { useState, useEffect } from 'react';
import Login from './Login/Login';
import ChatApp from './ChatApp/ChatApp';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { getAllTopics, createTopic } from '../utils/api';

const App = () => {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');

  useEffect(() => {
    getAllTopics();
  }, []);

  const handleLogin = () => {
    // createTopic(topic, name)
  };

  return (
    <div className='flex p-4 w-full h-screen'>
      <Router>
        <Route
          path='/chat'
          exact
          render={() => <ChatApp loggedName={name} loggedTopic={topic} />}
        />
        <Route
          path='/'
          exact
          render={() => <Login setName={setName} setTopic={setTopic} />}
        />
      </Router>
    </div>
  );
};

export default App;
