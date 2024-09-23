import { Button, Input } from "@nextui-org/react";
import { possibleAvatars } from "../../hooks/useChatContext";

export function LoginCard() {
  const randomPosition = Math.floor(Math.random() * 10);

  return (
    <div className="bg-gray-light w-full flex justify-center shadow-md flex-col items-end gap-7 rounded-b-xl">
      <div className="flex w-full flex-col justify-center items-center p-12 gap-12">
        <div className="w-32 h-32 min-w-32 min-h-32 rounded-full">
          <img
            src={possibleAvatars[randomPosition]}
            alt="avatar"
            className="w-32 h-32 min-w-32 min-h-32 object-cover rounded-full block"
          />
        </div>
        <div className="flex flex-col justify-center w-full items-center gap-7">
          <Input
            type="text"
            label="Name"
            labelPlacement="outside"
            placeholder="Type your name"
            variant="bordered"
            classNames={{
              label: "font-semibold text-md pl-1",
              inputWrapper: "w-full bg-white rounded-md border-none",
            }}
            className="shadow-md shadow-background rounded-md"
          />
          <Input
            type="text"
            label="Surname"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Type your surname"
            classNames={{
              label: "font-semibold text-md pl-1",
              inputWrapper: "w-full bg-white rounded-md border-none",
              base: "",
            }}
            className="shadow-md rounded-md shadow-background"
          />
        </div>
        <div className="w-full flex justify-center items-center mt-10">
          <Button
            color="primary"
            className="text-black rounded-md font-bold text-xl px-28 py-6"
          >
            Join
          </Button>
        </div>
      </div>
    </div>
  );
}
