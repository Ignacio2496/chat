// import axios from "axios";
import { useChatContext } from "../../hooks/useChatContext";
// import { useQuery } from "react-query";
import { MessageCard } from "../../components/MessageCard";
import { Button, Input } from "@nextui-org/react";
import { SendHorizonal } from "lucide-react";

const Chat = () => {
  const { userSession } = useChatContext();

  // const { data: messages, isLoading } = useQuery({
  //   queryKey: ["messages"],
  //   queryFn: () =>
  //     axios.get("https://chat-api-production-6dff.up.railway.app/api/messages"),
  // });

  // console.log(messages?.data);
  // console.log(isLoading);

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
          <div className="w-full overflow-y-auto flex flex-col gap-5 px-5 py-6 h-full scrollbar-hide">
            <MessageCard message="Welcome to our model chat project." />
            <MessageCard
              message="Join us in a public chat to interact and discuss about different
        topics."
            />
            <MessageCard message="Welcome to our model chat project." />
            <MessageCard
              message="Join us in a public chat to interact and discuss about different
        topics."
            />
            <MessageCard message="Welcome to our model chat project." />
            <MessageCard
              message="Join us in a public chat to interact and discuss about different
        topics."
            />
            <MessageCard
              message="Welcome to our model chat project."
              isOwnerSessionMessage
            />
            <MessageCard
              message="Join us in a public chat to interact and discuss about different
        topics."
              isOwnerSessionMessage
            />
            <MessageCard message="Welcome to our model chat project." />
            <MessageCard
              message="Join us in a public chat to interact and discuss about different
        topics."
            />
            <MessageCard message="Welcome to our model chat project." />
            <MessageCard
              message="Join us in a public chat to interact and discuss about different
        topics."
            />
            <MessageCard message="Welcome to our model chat project." />
            <MessageCard
              message="Join us in a public chat to interact and discuss about different
        topics."
            />
          </div>
          <div className="w-full flex items-center justify-center gap-3 px-3 py-5  bottom-0">
            <Input
              type="text"
              variant="bordered"
              placeholder="Type something..."
              classNames={{
                label: "font-semibold text-md pl-1",
                inputWrapper: "w-full bg-white rounded-md border-none",
              }}
              className="shadow-md rounded-md md:max-w-[70%] text-black"
            />
            <Button isIconOnly color="primary" className="rounded-md shadow-md">
              <SendHorizonal className="stroke-black" strokeWidth={1.4} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
