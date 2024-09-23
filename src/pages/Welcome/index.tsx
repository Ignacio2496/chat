import { useNavigate } from "react-router-dom";
import { possibleAvatars } from "../../hooks/useChatContext";

const Welcome = () => {
  const randomPosition = Math.floor(Math.random() * 10);
  const redirect = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen max-w-lg mx-auto">
      <div className="flex gap-3 bg-white items-center  w-full rounded-t-xl p-1 pl-5">
        <img
          src={possibleAvatars[randomPosition]}
          alt=""
          className="w-14 h-14 rounded-full block"
        />
        <p className="text-gray-dark font-bold">Welcome to chat dev</p>
      </div>
      <div className="bg-gray-light w-full flex justify-center shadow-md flex-col items-end gap-7 rounded-b-xl pt-10">
        <div className="bg-white rounded-xl max-w-[200px] mr-5 shadow-gray-dark shadow-md">
          <p className="p-3 text-black ">Welcome to our model chat project.</p>
        </div>
        <div className="bg-white rounded-xl max-w-[200px] mr-5 shadow-gray-dark shadow-md">
          <p className="p-3 text-black ">
            Join us in a public chat to interact and discuss about different
            topics.
          </p>
        </div>
        <div className="w-full flex justify-center items-center mt-24">
          <button
            onClick={() => redirect("/login")}
            className="bg-green text-black px-5 py-2 w-fit rounded-md font-bold text-lg mb-10"
          >
            Sure, join us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
