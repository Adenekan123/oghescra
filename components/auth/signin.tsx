import React from "react";
import { ThemedView } from "../ThemedView";
import {
  TextInput,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Image,
  View,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

const SigninForm = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ThemedView style={{ gap: 32, paddingHorizontal: 16 }}>
        <View style={{gap:6, marginBottom: 32}}>
          <Image
            source={require("@/assets/images/react-logo.png")}
            style={{ height: 80, width: 80, marginHorizontal: "auto" }}
            resizeMode="contain"
          />
          <ThemedText
            type="subtitle"
            style={{ color: Colors.light.background, textAlign: "center" }}
          >
            Oghescra Signin
          </ThemedText>
        </View>

        {/* <ThemedText type="subtitle">Sign In</ThemedText> */}
        <ThemedView style={{ gap: 10 }}>
          <ThemedText type="defaultSemiBold">Username</ThemedText>
          <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="Subject"
          />
        </ThemedView>
        <ThemedView style={{ gap: 10 }}>
          <ThemedText type="defaultSemiBold">Password</ThemedText>
          <TextInput
            secureTextEntry
            style={styles.input}
            keyboardType="default"
            placeholder="Password"
          />
        </ThemedView>

        <Pressable
          onPress={() => router.push("/(dashboard)")}
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
              // fontSize: 18,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Sign In
          </ThemedText>
        </Pressable>
      </ThemedView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#ffff",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: "#3333",
    borderWidth: 1,
    borderColor: "#c084fc",
    borderRadius: 8,
  },
});

export default SigninForm;
