import { IVisitor } from "@/types";
import React from "react";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";
import { Link, router } from "expo-router";
import { Pressable } from "react-native";
import { IToken } from "@/api/tokens/types";

const SingleToken = ({ token }: { token: IToken }) => {
  const { tokenId, visitor: visitorName, status } = token;
  return (
    <Pressable
      onPress={() => router.push(`tokens/details/${tokenId}`)}
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        paddingHorizontal: 8,
        paddingVertical: 12,
        marginBottom:16,
        borderRadius:8,
        shadowColor: Colors.light.text,
        shadowRadius: 16,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        elevation: 1,
      }}
    >
      <ThemedView
        style={{
          flexDirection: "row",
          gap: 16,
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <ThemedView style={{ backgroundColor: "#fff" }}>
          <Ionicons name="person-circle" size={38}  />
        </ThemedView>
        <ThemedView style={{ backgroundColor: "#fff" }}>
          <ThemedText type="subtitle" style={{ fontSize: 14 }}>{visitorName}</ThemedText>
          <ThemedText style={{ fontSize: 14, color: "grey" }}>
            Token: {tokenId}
          </ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={{ backgroundColor: "#fff" }}>
        <ThemedText
          style={{
            backgroundColor: status ? "black" : "green",
            color: "#fff",
            paddingHorizontal: 12,
            paddingVertical: 2,
            borderRadius: 50,
            fontSize:12,
            letterSpacing:1
          }}
        >
          {status}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
};

export default SingleToken;
