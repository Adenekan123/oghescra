import React from "react";
import { ThemedText } from "../ThemedText";
import { Pressable, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { IOutstanding } from "@/api/outstandings/types";
import { Ionicons } from "@expo/vector-icons";

interface IProps {
  outstanding: IOutstanding;
}
const Outstanding = (props: IProps) => {
  const { dueType, billAmount, billDate, status } = props.outstanding;
  return (
    <View
      style={{
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: Colors.light.tint,
        paddingVertical: 6,
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
      <View style={{}}>
        <ThemedText
          numberOfLines={1}
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: Colors.light.text,
            paddingHorizontal: 16,
          }}
        >
          {dueType}
        </ThemedText>
        <ThemedText
          style={{
            fontSize: 12,
            fontWeight: 500,
            borderBottomColor: "#eeee",
            paddingHorizontal: 16,
          }}
        >
          {billDate}
        </ThemedText>
      </View>

      <Pressable style={{paddingVertical:4,paddingHorizontal:8,flexDirection:"row", alignItems:"center", gap:6}}>
        <ThemedText
          style={{
            color: "red",
          }}
        >
          N{billAmount.toLocaleString("en", { minimumFractionDigits: 2 })}
        </ThemedText>
        <Ionicons name="chevron-forward" size={16} color={"red"} />
      </Pressable>
    </View>
  );
};

export default Outstanding;
