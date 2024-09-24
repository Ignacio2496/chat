import axios from "axios";
import { useChatContext } from "../../hooks/useChatContext";
import { useMutation, useQuery } from "react-query";
import { MessageCard } from "../../components/MessageCard";
import { Button, Input, Spinner } from "@nextui-org/react";
import { SendHorizonal } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Message = {
  message: string;
  username: string;
  timestamp: Date;
};

const Chat = () => {
  const { userSession } = useChatContext();
  const [userMessage, setUserMessage] = useState<string>("");

  const chatRef = useRef<HTMLDivElement>(null);

  const {
    data: messages,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      axios.get<{ messages: Message[]; count: number }>(
        "https://chat-api-production-6dff.up.railway.app/api/messages"
      ),
    refetchInterval: 1000,
  });

  const { mutate: sendMessage, isLoading: isSendingMessage } = useMutation({
    mutationFn: () =>
      axios.post(
        "https://chat-api-production-6dff.up.railway.app/api/messages",
        {
          message: userMessage,
          username: userSession?.userName.toLowerCase(),
        }
      ),
    onSuccess: () => {
      setUserMessage("");
      refetch();
    },
  });

  useEffect(() => {
    if (chatRef.current) {
      const { scrollHeight, scrollTop, clientHeight } = chatRef.current;

      const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight - 70;

      if (isScrolledToBottom) {
        chatRef.current.scrollTo({ top: scrollHeight });
      }
    }
  }, [messages, refetch]);

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
            {isLoading && (
              <div className="w-full h-full flex justify-center items-center">
                <Spinner color="default" size="lg" />
              </div>
            )}
            {!isLoading &&
              messages?.data?.messages?.map((message) => (
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
          <form className="w-full flex items-center justify-center gap-3 px-3 py-5  bottom-0">
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
              onChange={(message) => setUserMessage(message.target.value)}
            />
            <Button
              isIconOnly
              type="submit"
              color="primary"
              className="rounded-md shadow-md"
              onClick={() => sendMessage()}
              isDisabled={isSendingMessage}
              isLoading={isSendingMessage}
            >
              <SendHorizonal className="stroke-black" strokeWidth={1.4} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
