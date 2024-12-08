import { ThemedView } from "@/components/ThemedView";
import Message from "@/components/messages/message";
import { useMessageContext } from "@/context/message/useMessageContext";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useMemo } from "react";


const TokenDetails = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const {messages} = useMessageContext()
  const details = useMemo(() => {
    if (!id) return null;
    return messages.find((message) => message.id === Number(id));
  }, [id]);

  useEffect(() => {
    navigation.setOptions({
      title: `Message details`,
    });
  });
  return (
    details && (
      <ThemedView style={{paddingHorizontal:16, paddingVertical:32,flex:1}}>
        <Message message={details} preview={true} />
      </ThemedView>
    )
  );
};

export default TokenDetails;
