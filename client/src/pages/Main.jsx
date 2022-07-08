import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import Register from "./Register";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Main;
