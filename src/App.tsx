import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import NotFound from "./pages/Not-found";

const App = () => {
  return (
    <Routes>
      {/* Default route "/" leading to Login */}
      <Route path="/" element={<Login />} />

      {/* Protected chat route */}
      <Route path="/chat" element={<Chat />} />

      {/* Catch all route for any other paths */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
