import React from 'react';
import Login from './Login/Login';
import ChatApp from './ChatApp/ChatApp';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='flex p-4 w-full h-screen'>
      <Router>
        <Route path='/chat' exact component={ChatApp} />
        <Route path='/' exact component={Login} />
      </Router>
    </div>
  );
};

export default App;
