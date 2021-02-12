const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const formatMessage = require('../src/utils/messages');
const { joinUser, getUser } = require('../src/utils/users');

// Create Server
const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Setup Routes
const router = require('./router');
app.use(router);

// Socket.io connections and events
io.on('connection', (socket) => {
  socket.on('joinRoom', ({ name, topic }) => {
    const currentUser = joinUser(socket.id, name, topic);

    socket.join(currentUser.topic);

    socket.emit('message', formatMessage('admin', 'Welcome to Chatters'));
  });

  // socket.on('message');

  socket.on('disconnect', () => {
    console.log('a user has left the chat');
  });
});

//Listen to server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`));
