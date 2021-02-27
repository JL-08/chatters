import React, { useState, useEffect } from 'react';
import Login from './Login/Login';
import ChatApp from './ChatApp/ChatApp';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { getAllTopics, createTopic } from '../utils/api';

const App = () => {
  const [loggedName, setLoggedName] = useState('');
  const [loggedTopic, setLoggedTopic] = useState('');

  useEffect(() => {
    getAllTopics();
  }, []);

  const handleLogin = () => {
    // createTopic(topic, name)
  };

  return (
    <div className='flex w-full md:h-screen sm:h-full'>
      <Router>
        <Route
          path='/chat'
          exact
          render={() => (
            <ChatApp
              loggedName={loggedName}
              loggedTopic={loggedTopic}
              setLoggedName={setLoggedName}
              setLoggedTopic={setLoggedTopic}
            />
          )}
        />
        <Route
          path='/'
          exact
          render={() => (
            <Login setName={setLoggedName} setTopic={setLoggedTopic} />
          )}
        />
      </Router>
    </div>
  );
};

export default App;
