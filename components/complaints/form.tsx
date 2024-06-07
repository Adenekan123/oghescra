import React from "react";
import { ThemedView } from "../ThemedView";
import {
  TextInput,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

const ComplaintForm = () => {
  return (
    <KeyboardAvoidingView>
      <ThemedView style={{gap:20}}>
        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="Subject"
        />
        <TextInput
          style={[styles.input,{height:80,paddingTop:12}]}
          keyboardType="default"
          placeholder="Write something here..."
          multiline
          textAlignVertical="top"
          
        />
        <Pressable
          style={{
            paddingVertical: 20,
            backgroundColor: Colors.light.background,
            borderRadius: 50,
            flexDirection: "row",
            justifyContent: "center",
            gap: 20,
            marginTop: 20,
          }}
        >
          <Ionicons name="save" size={22} color={"#fff"} />
          <ThemedText
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Submit
          </ThemedText>
        </Pressable>
      </ThemedView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#ffff",
    height: 50,
    width: "100%",
    paddingHorizontal: 16,
    color: "#3333",
    borderWidth: 1,
    borderColor: "#c084fc",
    borderRadius: 8,
  },
});

export default ComplaintForm;
