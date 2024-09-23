type MessageCardProps = {
  message: string;
};

export function MessageCard({ message }: MessageCardProps) {
  return (
    <div className="bg-white rounded-lg w-fit max-w-[64%] shadow-background shadow-md">
      <p className="py-2 px-3 text-black text-right">{message}</p>
    </div>
  );
}
