import React, { ReactNode, useCallback, useState } from "react";
import { MessageContext } from "./message.context";
import { readInbox } from "@/api/messages";
import { IMessage } from "@/api/messages/types";

interface IProps {
  children: ReactNode;
}

const MessageProvider = (props: IProps) => {
  const { children } = props;
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const readMessageAync = useCallback(
    async (residentialId: string, mesId: string) => {
      if (!residentialId || !mesId) return;
      try {
        setLoading(true);
        const message = await readInbox(residentialId, mesId);
        if (!message) throw new Error("Failed to read message");
        const newMessages = messages.map((m) => m.id == message.id ? message :m);
        setMessages(newMessages);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return (
    <MessageContext.Provider
      value={{ messages, setMessages, readMessageAync, loading }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
