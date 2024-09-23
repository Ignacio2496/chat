import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type UserSession = {
  userName: string;
  avatarUrl: string;
  signedIn: string;
};

export const possibleAvatars = [
  "https://cdn-icons-png.flaticon.com/512/147/147144.png",
  "https://cdn-icons-png.freepik.com/512/147/147133.png",
  "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
  "https://cdn-icons-png.flaticon.com/512/147/147142.png",
  "https://cdn-icons-png.flaticon.com/512/8090/8090406.png",
  "https://cdn-icons-png.flaticon.com/512/3781/3781973.png",
  "https://cdn-icons-png.flaticon.com/512/4975/4975733.png",
  "https://cdn-icons-png.flaticon.com/512/190/190670.png",
  "https://cdn-icons-png.flaticon.com/512/147/147137.png",
  "https://cdn-icons-png.flaticon.com/512/147/147135.png",
];

interface ChatContext {
  userSession: UserSession | null;
  setUserSession: React.Dispatch<React.SetStateAction<UserSession | null>>;
}

export const chatContext = createContext<ChatContext>({
  setUserSession: () => {},
  userSession: null,
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ChatContextProps extends PropsWithChildren {}

export function ChatContextProvider({ children }: ChatContextProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const storagedUserSession = localStorage.getItem("userSession") as
    | string
    | null;

  const [userSession, setUserSession] = useState<UserSession | null>(
    storagedUserSession ? JSON.parse(storagedUserSession) : null
  );

  useEffect(() => {
    if (!userSession && pathname === "/chat") navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSession, pathname]);

  useEffect(() => {
    if (userSession && pathname === "/") navigate("/chat");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSession, pathname]);

  return (
    <chatContext.Provider value={{ setUserSession, userSession }}>
      {children}
    </chatContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useChatContext() {
  return useContext(chatContext);
}
