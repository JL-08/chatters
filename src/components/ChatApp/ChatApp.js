import { useEffect, useState, createContext } from 'react';
import socketIOClient from 'socket.io-client';

import TopicList from '../TopicList/TopicList';
import ChatRoom from '../ChatRoom/ChatRoom';
import RoomInfo from '../RoomInfo/RoomInfo';

import { getAllMessages } from '../../utils/api';

const ENDPOINT = 'http://127.0.0.1:8000';
let socket;

//TODO: change names of vague variable names
//TODO: add scroll to bottom
//TODO: fix reload

// Create context for passing of states to components
export const MessageContext = createContext();

const ChatApp = ({ loggedName, loggedTopic, setLoggedTopic }) => {
  const [name, setName] = useState('');
  const [socketId, setSocketId] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [adminMessageList, setAdminMessageList] = useState([]);
  const [participantsList, setParticipantsList] = useState([]);
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    // Connect to a socket
    socket = socketIOClient(ENDPOINT);

    const capitalizedName =
      loggedName.charAt(0).toUpperCase() + loggedName.slice(1);
    const capitalizedTopic =
      loggedTopic.charAt(0).toUpperCase() + loggedTopic.slice(1);
    setTopic(capitalizedTopic);
    setName(capitalizedName);

    // Join user in room
    socket.emit('joinRoom', {
      name: capitalizedName,
      topic: capitalizedTopic,
    });

    (async () => {
      const msgs = await getAllMessages(capitalizedTopic);
      if (msgs) {
        setMessageList([...msgs]);
      }
    })();
  }, [loggedName, loggedTopic]);

  useEffect(() => {
    // Listen for sent messages by user
    // Stores the sent message in list
    socket.on('getSocketId', (socketId) => {
      console.log(socketId);
      setSocketId(socketId);
    });

    socket.on('message', (message) => {
      if (message.sentBy === 'admin') {
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
  }, [loggedTopic]);

  // onClick handlers
  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit('chatMessage', message);
      const textInput = document.getElementById('text-input');

      textInput.value = '';
      setMessage('');
    }
  };

  const changeTopic = async (e) => {
    const newTopic = e.target.innerHTML;

    await socket.emit('changeTopic', topic, newTopic);
    setLoggedTopic(newTopic);
  };

  const disconnectUser = (e) => {
    socket.close();
  };

  return (
    <div className='flex p-4 w-full h-full space-x-2'>
      <MessageContext.Provider
        value={{
          name,
          socketId,
          topic,
          setMessage,
          messageList,
          adminMessageList,
          participantsList,
          topicList,
          sendMessage,
          changeTopic,
          disconnectUser,
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
