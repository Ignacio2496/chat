import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import WSChat from "./pages/WSChat";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/ws-chat" element={<WSChat />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
