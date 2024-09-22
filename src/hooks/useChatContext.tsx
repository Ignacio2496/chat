import { createContext, PropsWithChildren, useContext, useState } from "react";

export type UserSession = {
  userName: string;
  avatarUrl: string;
  signedIn: string;
  isSessionActive: boolean;
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
  const storagedUserSession = localStorage.getItem(
    "userSession"
  ) as UserSession | null;

  const [userSession, setUserSession] = useState<UserSession | null>(
    storagedUserSession ?? null
  );

  return (
    <chatContext.Provider value={{ setUserSession, userSession }}>
      {children}
    </chatContext.Provider>
  );
}

export function useChatContext() {
  return useContext(chatContext);
}
