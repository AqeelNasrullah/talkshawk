import React, { createContext, useContext } from "react";
import { io } from "socket.io-client";
import { app } from "../config";

const SocketContext = createContext({ socket: null });

export const useSocket = () => useContext(SocketContext);

const SocketProvider = ({ children }) => {
  const socket = io(app.backendURL);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
