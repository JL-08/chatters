import { useEffect, useState, useContext, createContext } from 'react';
import queryString from 'query-string';
import socketIOClient from 'socket.io-client';

import Room from './Room';
import ChatRoom from './ChatRoom';
import Participants from './Participants';

const ENDPOINT = 'http://127.0.0.1:8000';
let socket;

const ChatApp = ({ location }) => {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = socketIOClient(ENDPOINT);

    const { name, topic } = queryString.parse(location.search);
    setTopic(topic);
    setName(name);

    socket.emit('joinRoom', { name, topic });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((messages) => [...messages, msg]);
      console.log(messages);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    socket.emit('chatMessage', message);
    const textInput = document.getElementById('text-input');

    setMessages(message);
    textInput.value = '';
  };

  return (
    <div className='flex p-4 w-full h-screen space-x-2'>
      <Room />
      <ChatRoom setMessage={setMessage} sendMessage={sendMessage} />
      <Participants />
    </div>
  );
};

export default ChatApp;
