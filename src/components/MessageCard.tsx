type MessageCardProps = {
  message: string;
  username?: string;
  isOwnerSessionMessage?: boolean;
};

export function MessageCard({
  message,
  username,
  isOwnerSessionMessage,
}: MessageCardProps) {
  return (
    <div
      className={`w-full flex flex-col ${
        isOwnerSessionMessage ? "items-start" : "items-end"
      }`}
    >
      <div
        className={`${
          isOwnerSessionMessage ? "bg-primary" : "bg-white"
        } rounded-lg w-fit max-w-[74%] shadow-background shadow-md`}
      >
        <p
          className={`px-3 pt-1 text-small capitalize ${
            isOwnerSessionMessage ? "text-left pr-7" : "text-right pl-7"
          }`}
        >
          {username}
        </p>
        <p
          className={`pb-2 px-3 text-black ${
            isOwnerSessionMessage ? "text-left" : "text-right"
          }`}
        >
          {message}
        </p>
      </div>
    </div>
  );
}
