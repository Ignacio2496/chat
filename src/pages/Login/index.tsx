import { possibleAvatars, useChatContext } from "../../hooks/useChatContext";

const Login = () => {
  const { userSession } = useChatContext();

  console.log(userSession);

  const randomPosition = Math.floor(Math.random() * 10);

  return (
    <div>
      <img
        src={possibleAvatars[randomPosition]}
        alt=""
        className="w-24 h-24 rounded-full block"
      />
    </div>
  );
};

export default Login;
