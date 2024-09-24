import axios from "axios";
import { useChatContext } from "../../hooks/useChatContext";
import { MessageCard } from "../../components/MessageCard";
import { Button, Input } from "@nextui-org/react";
import { SendHorizonal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

type Message = {
  message: string;
  username: string;
  timestamp: Date;
};

const WSChat = () => {
  const { userSession } = useChatContext();
  const [userMessage, setUserMessage] = useState<string>("");
  const [messages, setMessages] = useState<Array<Message>>([]);
  const chatRef = useRef<HTMLDivElement>(null);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    // Establish the socket connection once when the component mounts
    const newSocket = io("http://localhost:12345", {
      reconnectionDelayMax: 1000,
    });
    setSocket(newSocket);

    newSocket.on("connection", () => {
      console.log("connected");
    });

    newSocket.on("newMessage", (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Cleanup the socket connection when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload on form submit

    if (userMessage.trim() && socket) {
      socket.emit("message", {
        username: userSession?.userName.toLowerCase(),
        message: userMessage,
      });
      setUserMessage(""); // Clear input after sending
    }
  };

  return (
    <div className="w-full min-h-screen h-full flex justify-center items-center flex-col px-4">
      <div className="w-full max-w-[1240px] rounded-xl overflow-hidden">
        <div className="flex gap-3 bg-white items-center w-full py-2 px-5">
          <div className="rounded-full w-14 h-14 flex justify-center items-center flex-col">
            <img
              src={userSession?.avatarUrl}
              alt="avatar"
              className="min-w-14 w-14 min-h-14 h-14"
            />
          </div>
          <p className="text-gray-dark text-lg font-bold capitalize">
            {userSession?.userName}
          </p>
        </div>
        <div className="relative bg-gray-light w-full flex justify-start shadow-md flex-col items-end rounded-b-xl min-h-[80vh] h-[80vh]">
          <div
            ref={chatRef}
            className="w-full overflow-y-auto flex flex-col gap-5 px-5 py-6 h-full scrollbar-hide"
          >
            {messages?.map((message) => (
              <MessageCard
                username={message.username}
                key={message.timestamp.toString()}
                message={message.message}
                isOwnerSessionMessage={Boolean(
                  message.username.toLowerCase() ===
                    userSession?.userName.toLowerCase()
                )}
              />
            ))}
          </div>
          <form
            className="w-full flex items-center justify-center gap-3 px-3 py-5  bottom-0"
            onSubmit={sendMessage}
          >
            <Input
              type="text"
              variant="bordered"
              placeholder="Type something..."
              classNames={{
                label: "font-semibold text-md pl-1",
                inputWrapper: "w-full bg-white rounded-md border-none",
              }}
              className="shadow-md rounded-md md:max-w-[70%] text-black"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
            <Button
              isIconOnly
              type="submit"
              color="primary"
              className="rounded-md shadow-md"
            >
              <SendHorizonal className="stroke-black" strokeWidth={1.4} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WSChat;
