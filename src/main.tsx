import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ChatContextProvider } from "./hooks/useChatContext";
import { NextUIProvider } from "@nextui-org/system";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <ChatContextProvider>
            <App />
          </ChatContextProvider>
        </NextUIProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
