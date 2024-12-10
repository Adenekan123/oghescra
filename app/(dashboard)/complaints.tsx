import { ThemedView } from "@/components/ThemedView";
import ComplaintForm from "@/components/complaints/form";
import React from "react";
import { View } from "react-native";

const Complaints = () => {
  return (
    <ThemedView style={{flex:1, justifyContent: "center", paddingTop:"30%", paddingHorizontal:6 }}>
      <View style={{flex:1}}>
        <ComplaintForm />
      </View>
    </ThemedView>
  );
};

export default Complaints;
