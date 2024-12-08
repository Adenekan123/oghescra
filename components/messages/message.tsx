import React from "react";
import { ThemedText } from "../ThemedText";
import { Pressable, View } from "react-native";
import { IMessage } from "@/api/messages/types";
import { Colors } from "../../constants/Colors";

const Message = ({
  message,
  preview = false,
  onPress,
}: {
  message: IMessage;
  preview?: boolean;
  onPress?: () => void;
}) => {
  const { subject, message: text, status } = message;
  return (
    <Pressable
      onPress={onPress}
      style={{
        // flex: 1,
        backgroundColor: Colors.light.tint,
        marginVertical: 6,
        borderRadius: 8,
        shadowColor: Colors.light.text,
        shadowRadius: 16,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        elevation: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#eeee",
        }}
      >
        <ThemedText
          numberOfLines={preview ? 1 : undefined}
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: status === 0 ? Colors.light.background : "#333",
            paddingVertical: 10,
            paddingHorizontal: 16,
          }}
        >
          {subject}
        </ThemedText>
        {status === 0 && (
          <ThemedText
            style={{
              fontSize: 12,
              fontWeight: 500,
              fontStyle: "italic",
              color: Colors.light.background,
              borderBottomWidth: 1,
              borderBottomColor: "#eeee",
              paddingVertical: 10,
              paddingHorizontal: 16,
            }}
          >
            Unread
          </ThemedText>
        )}
      </View>

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
