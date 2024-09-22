import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ChatContextProvider } from "./hooks/useChatContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChatContextProvider>
        <App />
      </ChatContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
