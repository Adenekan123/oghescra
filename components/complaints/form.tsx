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
      <ThemedView style={{ gap: 32, paddingHorizontal:16 }}>
        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="Subject"
        />
        <TextInput
          style={[styles.input, { height: 80, paddingTop: 12 }]}
          keyboardType="default"
          placeholder="Write something here..."
          multiline
          textAlignVertical="top"
        />
        <Pressable
          style={{
            paddingVertical: 16,
            backgroundColor: Colors.light.background,
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginTop: 20,
          }}
        >
          <ThemedText
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
              fontSize:18
            }}
          >
            Submit
          </ThemedText>
          <Ionicons name="send" size={18} color={"#fff"} />
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
