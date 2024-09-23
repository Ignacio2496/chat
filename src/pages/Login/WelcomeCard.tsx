import { Button } from "@nextui-org/react";
import { MessageCard } from "../../components/MessageCard";

type WelcomeCardProps = {
  setContinueToJoin: React.Dispatch<React.SetStateAction<boolean>>;
  continueToJoin: boolean;
};

export function WelcomeCard({ setContinueToJoin }: WelcomeCardProps) {
  return (
    <div className="bg-gray-light w-full flex justify-center shadow-md flex-col items-end gap-7 rounded-b-xl">
      <div className="w-full flex flex-col items-end gap-3 pr-5 pt-6">
        <MessageCard message="Welcome to our model chat project." />
        <MessageCard
          message="Join us in a public chat to interact and discuss about different
        topics."
        />
      </div>
      <div className="w-full flex justify-center items-center mt-24">
        <Button
          color="primary"
          className="text-black rounded-md font-bold text-xl px-12 py-6 mb-6"
          onClick={() => setContinueToJoin(true)}
        >
          Sure, join
        </Button>
      </div>
    </div>
  );
}
