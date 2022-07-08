import React, { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { app } from "../config";
import { useSocket } from "../contexts/socket-context";

const Chat = () => {
  const { socket } = useSocket();
  const [message, setMessage] = useState();

  useEffect(() => {
    socket.on("welcome", (msg) => {
      setMessage(msg);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{app.name}</title>
      </Helmet>
      <div>
        <h1>{app.name}</h1>
        <h4>{message}</h4>
      </div>
    </>
  );
};

export default Chat;
