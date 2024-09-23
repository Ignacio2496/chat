import { possibleAvatars } from "../../hooks/useChatContext";

const Welcome = () => {
  const randomPosition = Math.floor(Math.random() * 10);

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
      <div className="bg-gray-light w-full flex justify-center shadow-md flex-col items-end gap-7 rounded-b-xl pt-10 px-10">
        <div className="flex w-full justify-center items-center">
          <img
            src={possibleAvatars[randomPosition]}
            alt=""
            className="w-32 h-32 rounded-full block"
          />
        </div>
        <div className="w-full flex justify-center items-start  flex-col">
          <p className="text-black">Name:</p>
          <input
            type="text"
            className="w-full bg-white rounded-xl p-2 shadow-sm shadow-black"
          />
        </div>
        <div className="w-full flex justify-center items-start flex-col">
          <p className="text-black">Last name:</p>
          <input
            type="text"
            className="w-full bg-white rounded-xl p-2 shadow-sm shadow-black"
          />
        </div>
        <div className="w-full flex justify-center items-center mt-24">
          <button className="bg-green text-black px-5 py-2 w-fit rounded-md font-bold text-lg mb-10">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
