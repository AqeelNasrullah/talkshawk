require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

global.onlineUsers = {};

const PORT = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(socket.id + " connected");

  socket.on("load", (msg) => {
    console.log(msg + " " + socket.id);
  });

  socket.on("disconnect", () => {
    console.log(socket.id + " disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Listening to *:${PORT}`);
});
