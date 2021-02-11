const express = require('express');
const http = require('http');
const socketio = require('socket.io');

// Create Server
const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Setup Routes
const router = require('./router');
app.use(router);

// Socket.io connections and events
io.on('connection', (socket) => {
  console.log('Welcome');
  socket.on('message', () => {
    socket.emit('fromServer', 'werwer');
  });

  socket.on('disconnect', () => {
    console.log('a user has left the chat');
  });
});

//Listen to server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`));
