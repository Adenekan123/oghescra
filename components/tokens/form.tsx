import { Colors } from "@/constants/Colors";
import React from "react";
import {
  TextInput,
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { Ionicons } from "@expo/vector-icons";

const TokenForm = () => {
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "center", gap: 20 }}>
          <TextInput
            keyboardType="default"
            style={styles.input}
            placeholder="Visitor's Name"
          />
          <TextInput
            keyboardType="phone-pad"
            style={styles.input}
            placeholder="Visitor's Phone Number"
          />
          <TextInput
            keyboardType="email-address"
            style={styles.input}
            placeholder="Visitor's Email (optional)"
          />
          <TextInput
            keyboardType="default"
            style={styles.input}
            placeholder="Purpose of Visiting"
          />
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="Number of Visitor(s)"
          />

          <Pressable
            style={{
              paddingVertical: 20,
              backgroundColor: Colors.light.background,
              borderRadius: 50,
              flexDirection:"row",
              justifyContent:"center",
              gap:20,
              marginTop:20
            }}
          >
            <Ionicons name="key" size={22} color={"#fff"} />
            <ThemedText
              style={{
                color: "#fff",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Generate Token
            </ThemedText>
          </Pressable>
        </View>
      </ScrollView>
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

export default TokenForm;
