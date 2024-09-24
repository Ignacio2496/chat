import { User } from "lucide-react";

const Login = () => {
  return (
    <div className="w-full min-h-screen h-full flex justify-center items-center flex-col">
      <div className="w-full max-w-128 rounded-xl overflow-hidden">
        <div className="flex gap-3 bg-white items-center w-full py-2 px-5">
          <div className="bg-primary rounded-full w-14 h-14 flex justify-center items-center flex-col">
            <User
              width={28}
              height={28}
              strokeWidth={1.4}
              className="stroke-black"
            />
          </div>
          <p className="text-gray-dark text-lg font-bold">
            Welcome to Chat.dev
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
