import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ChatContextProvider } from "./hooks/useChatContext";
import { NextUIProvider } from "@nextui-org/system";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <ChatContextProvider>
          <App />
        </ChatContextProvider>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
