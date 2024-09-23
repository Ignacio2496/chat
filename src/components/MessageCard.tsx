type MessageCardProps = {
  message: string;
  isOwnerSessionMessage?: boolean;
};

export function MessageCard({
  message,
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
          className={`py-2 px-3 text-black ${
            isOwnerSessionMessage ? "text-left" : "text-right"
          }`}
        >
          {message}
        </p>
      </div>
    </div>
  );
}
