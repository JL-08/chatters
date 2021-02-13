const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const formatMessage = require('../src/utils/messages');
const {
  joinUser,
  getCurrentUser,
  getDeactiveUser,
} = require('../src/utils/users');

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

    socket.emit(
      'message',
      formatMessage('admin', 'Welcome to Chatters', false)
    );

    socket.broadcast
      .to(currentUser.topic)
      .emit(
        'message',
        formatMessage('admin', `${currentUser.name} has joined the chat`, false)
      );
  });

  socket.on('chatMessage', (message) => {
    const { name, topic } = getCurrentUser(socket.id);

    io.to(topic).emit('message', formatMessage(name, message, true));
  });

  socket.on('disconnect', () => {
    const user = getDeactiveUser(socket.id);

    if (user) {
      io.to(user.topic).emit(
        'message',
        formatMessage('admin', `${user.name} has left the chat`, false)
      );
    }
  });
});

//Listen to server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`));
