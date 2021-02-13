import { useEffect, useState, createContext } from 'react';
import queryString from 'query-string';
import socketIOClient from 'socket.io-client';

import Room from './Room';
import ChatRoom from './ChatRoom';
import Participants from './Participants';

const ENDPOINT = 'http://127.0.0.1:8000';
let socket;

//TODO: change names of vague variable names

// Create context for passing of states to components
export const MessageContext = createContext();

const ChatApp = ({ location }) => {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    // Connect to a socket
    socket = socketIOClient(ENDPOINT);

    // Get name and topic from query
    const { name, topic } = queryString.parse(location.search);
    setTopic(topic);
    setName(name);

    // Join user in room
    socket.emit('joinRoom', { name, topic });
  }, [location.search]);

  useEffect(() => {
    // Listen for sent messages by user
    // Stores the sent message in list
    socket.on('message', (message) => {
      setMessageList((msg) => [...msg, message]);
    });
  }, []);

  // onClick handler
  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit('chatMessage', message);
      const textInput = document.getElementById('text-input');

      setMessage(message);

      textInput.value = '';
      setMessage('');
    }
  };

  return (
    <div className='flex p-4 w-full h-full space-x-2'>
      <MessageContext.Provider
        value={{ setMessage, sendMessage, messageList, name }}
      >
        <Room />
        <ChatRoom />
        <Participants />
      </MessageContext.Provider>
    </div>
  );
};

export default ChatApp;
