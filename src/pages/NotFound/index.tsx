import { Button } from "@nextui-org/react";
import SadFaceIcon from "../../components/SadFaceIcon";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navegatie = useNavigate();
  return (
    <div className="w-full min-h-screen h-full flex justify-center items-center flex-col">
      <div className="w-full max-w-128 rounded-xl overflow-hidden">
        <div className="flex flex-col gap-3 bg-white items-center w-full py-2 px-5 justify-center">
          <SadFaceIcon />
          <p className="text-gray-dark text-lg font-bold">404 not found </p>
          <Button
            onClick={() => navegatie("/")}
            color="primary"
            className="text-black font-bold mt-2"
          >
            Back to chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
