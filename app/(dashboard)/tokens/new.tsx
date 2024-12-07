import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TokenForm from "@/components/tokens/form";
import React from "react";
import { View } from "react-native";

const NewToken = () => {
  return (
    <ThemedView style={{ flex: 1, padding: 22, justifyContent: "center" }}>
      <View style={{flex:1,marginTop:32}}>
        <TokenForm />
      </View>
    </ThemedView>
  );
};

export default NewToken;
