import { IVisitor } from "@/types";
import React from "react";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";
import { Link, router } from "expo-router";
import { Pressable } from "react-native";

const Visitor = ({ visitor }: { visitor: IVisitor }) => {
  const { tokenID, visitor: visitorName, status } = visitor;
  return (
    <Pressable
      onPress={() => router.push(`tokens/details/${tokenID}`)}
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        paddingHorizontal: 8,
        paddingVertical: 12,
        marginVertical:6,
        borderRadius:8
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
          <Ionicons name="person-circle" size={56} />
        </ThemedView>
        <ThemedView style={{ backgroundColor: "#fff" }}>
          <ThemedText style={{ fontSize: 14 }}>{visitorName}</ThemedText>
          <ThemedText style={{ fontSize: 14, color: "grey" }}>
            Token: {tokenID}
          </ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={{ backgroundColor: "#fff" }}>
        <ThemedText
          style={{
            backgroundColor: status ? "red" : "green",
            color: "#fff",
            paddingHorizontal: 12,
            paddingVertical: 4,
            borderRadius: 50,
          }}
        >
          {status}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
};

export default Visitor;
