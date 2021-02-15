import { useEffect, useState, createContext } from 'react';
import queryString from 'query-string';
import socketIOClient from 'socket.io-client';

import TopicList from '../TopicList/TopicList';
import ChatRoom from '../ChatRoom/ChatRoom';
import RoomInfo from '../RoomInfo/RoomInfo';

const ENDPOINT = 'http://127.0.0.1:8000';
let socket;

//TODO: change names of vague variable names
//TODO: add scroll to bottom

// Create context for passing of states to components
export const MessageContext = createContext();

const ChatApp = ({ location }) => {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [adminMessageList, setAdminMessageList] = useState([]);
  const [participantsList, setParticipantsList] = useState([]);
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    // Connect to a socket
    socket = socketIOClient(ENDPOINT);

    // Get name and topic from query
    const { name, topic } = queryString.parse(location.search);

    const capitalizedTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
    setTopic(capitalizedTopic);
    setName(name);

    // Join user in room
    socket.emit('joinRoom', { name, topic });
  }, [location.search]);

  useEffect(() => {
    // Listen for sent messages by user
    // Stores the sent message in list
    socket.on('message', (message) => {
      if (message.name === 'admin') {
        setAdminMessageList((msg) => [...msg, message]);
      } else {
        setMessageList((msg) => [...msg, message]);
      }
    });

    socket.on('displayParticipants', (users) => {
      setParticipantsList([...users]);
    });

    socket.on('displayTopics', (topics) => {
      setTopicList([...topics]);
    });
  }, []);

  // onClick handlers
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

  const changeTopic = (e) => {
    const newTopic = e.target.innerHTML.toLowerCase();
    window.location.href = `http://127.0.0.1:3000/chat?name=${name}&topic=${newTopic}`;
  };

  return (
    <div className='flex p-4 w-full h-full space-x-2'>
      <MessageContext.Provider
        value={{
          name,
          topic,
          setMessage,
          messageList,
          adminMessageList,
          participantsList,
          topicList,
          sendMessage,
          changeTopic,
        }}
      >
        <TopicList />
        <ChatRoom />
        <RoomInfo />
      </MessageContext.Provider>
    </div>
  );
};

export default ChatApp;
