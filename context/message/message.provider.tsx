import React, { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { MessageContext } from "./message.context";
import { getInbox, readInbox } from "@/api/messages";
import { IMessage } from "@/api/messages/types";

function dummyReadInbox (messages:IMessage[], mesId:string) {
  const message = messages.find((message) => String(message.id) === mesId);
  console.log({messages,mesId});
  if (!message) return;
  return {...message, status: 1};
}

interface IProps {
  children: ReactNode;
}

const MessageProvider = (props: IProps) => {
  const { children } = props;
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const residentialId = useMemo(() => "1", []);

  const readMessageAync = useCallback(
    async (residentialId: string, mesId: string) => {
      if (!residentialId || !mesId) return;
      try {
        // setLoading(true);
        
        // const message = await readInbox(residentialId, mesId);
        const message =  dummyReadInbox(messages, mesId);
        if (!message) throw new Error("Failed to read message");
        const newMessages = messages.map((m) =>
          m.id == message.id ? message : m
        );
        setMessages(newMessages);
      } catch (err) {
        console.log(err);
        return false
      } finally {
        // setLoading(false);
        return true
      }
    },
    [messages,dummyReadInbox]
  );
  const getMessages = useCallback(async (residentialId: string) => {
    if (!residentialId) return;
    try {
      setLoading(true);
      const messages = await getInbox(residentialId);
      if (!messages) throw new Error("Failed to get messages");
      setMessages(messages);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(()=>{
    getMessages(residentialId);
  },[getMessages]);
  return (
    <MessageContext.Provider
      value={{ messages, setMessages, readMessageAync, loading }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
