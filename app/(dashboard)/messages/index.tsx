import { IMessage } from "@/api/messages/types";
import { ThemedView } from "@/components/ThemedView";
import Message from "@/components/messages/message";
import { useMessageContext } from "@/context/message/useMessageContext";
import { router } from "expo-router";
import React, { useCallback, useMemo } from "react";
import { FlatList, SafeAreaView } from "react-native";



const Messages = () => {
  const {messages,readMessageAync} = useMessageContext();

  const residentialId = useMemo(() => "1", []);

  const onRead = useCallback(async (residentialId: string, mesId: string) => {
    if (!residentialId || !mesId) return;
    const isRead = await readMessageAync(residentialId, mesId);
    if(isRead) router.push(`/messages/details/${mesId}`);
  }, []);

  const renderItem = useCallback(({ item }: { item: IMessage }) => {
    return (
      <Message
        key={item.id}
        message={item}
        onPress={()=>onRead(residentialId, item.id+"")}
      />
    );
  }, []);

 
  return (
    <ThemedView style={{flex:1}}>
      <SafeAreaView style={{ flex: 1, padding: 22 }}>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id as unknown as string}
        />
      </SafeAreaView>
    </ThemedView>
  );
};

export default Messages;
