import React from 'react';
import Login from './Login';
import ChatApp from './ChatApp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
