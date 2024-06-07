import { IMessage } from "@/types";
import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Pressable } from "react-native";

const Message = ({
  message,
  preview = false,
  onPress,
}: {
  message: IMessage;
  preview?: boolean;
  onPress?: () => void;
}) => {
  const { visitorName, message: text } = message;
  return (
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
        backgroundColor: "#fff",
        marginVertical: 6,
        borderRadius: 8,
      }}
    >
      <ThemedText
        numberOfLines={preview ? 1 : undefined}
        style={{
          fontSize: 15,
          fontWeight: 500,
          color: "gray",
          borderBottomWidth: 1,
          borderBottomColor: "#eeee",
          paddingVertical: 10,
          paddingHorizontal: 16,
        }}
      >
        Your Visitor ({visitorName})
      </ThemedText>
      <ThemedText
        style={{ fontSize: 13, paddingVertical: 10, paddingHorizontal: 16 }}
        numberOfLines={!preview ? 1 : undefined}
      >
        {text}
      </ThemedText>
    </Pressable>
  );
};

export default Message;
