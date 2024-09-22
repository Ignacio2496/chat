import { possibleAvatars, useChatContext } from "../../hooks/useChatContext";

const Login = () => {
  const { userSession } = useChatContext();

  console.log(userSession);

  return (
    <div>
      <img
        src={possibleAvatars[0]}
        alt=""
        className="w-24 h-24 rounded-full block"
      />
    </div>
  );
};

export default Login;
