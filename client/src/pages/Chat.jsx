import React from "react";
import { Helmet } from "react-helmet-async";
import { app } from "../config";

const Chat = () => {
  return (
    <>
      <Helmet>
        <title>{app.name}</title>
      </Helmet>
      <div>
        <h1>{app.name}</h1>
      </div>
    </>
  );
};

export default Chat;
