import { IMessage } from "@/api/messages/types";
import { createContext } from "react";

export const MessageContext = createContext<{
  messages: IMessage[];
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>;
  readMessageAync: (residentialId: string, mesId: string) => Promise<boolean | undefined>;
  loading:boolean;
}>({
  messages: [],
  setMessages: () => {},
  readMessageAync: async () => true,
  loading:false
});
