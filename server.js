require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");

global.onlineUsers = {};

const PORT = process.env.PORT || 8000;
const BASE_URL = process.env.BASE_URL || "/api";

const app = express();
const server = http.createServer(app);

app.use(cors({ origin: "*", credentials: true }));
app.use(cors(logger("dev")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get(BASE_URL, (req, res) => {
  res.status(200).json({ message: "Server is up & running..." });
});

app.use(express.static(path.join(__dirname, "client", build)));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

server.listen(PORT, () => {
  console.log(`Listening to *:${PORT}`);
});

// sockets

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
