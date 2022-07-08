import React from "react";
import { BrowserRouter } from "react-router-dom";
import SocketProvider from "./contexts/socket-context";
import Main from "./pages/Main";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <HelmetProvider>
      <SocketProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </SocketProvider>
    </HelmetProvider>
  );
};

export default App;
