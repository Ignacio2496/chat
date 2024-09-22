import { createContext, PropsWithChildren, useContext, useState } from "react";

export type UserSession = {
  userName: string;
  avatarUrl: string;
  signedIn: string;
  isSessionActive: boolean;
};

export const possibleAvatars = [
  "https://i.imgur.com/1.jpg",
  "https://i.imgur.com/2.jpg",
  "https://i.imgur.com/3.jpg",
  "https://i.imgur.com/4.jpg",
  "https://i.imgur.com/5.jpg",
  "https://i.imgur.com/6.jpg",
  "https://i.imgur.com/7.jpg",
  "https://i.imgur.com/8.jpg",
  "https://i.imgur.com/9.jpg",
  "https://i.imgur.com/10.jpg",
  "https://i.imgur.com/11.jpg",
  "https://i.imgur.com/12.jpg",
  "https://i.imgur.com/13.jpg",
  "https://i.imgur.com/14.jpg",
  "https://i.imgur.com/15.jpg",
  "https://i.imgur.com/16.jpg",
  "https://i.imgur.com/17.jpg",
  "https://i.imgur.com/18.jpg",
  "https://i.imgur.com/19.jpg",
  "https://i.imgur.com/20.jpg",
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
