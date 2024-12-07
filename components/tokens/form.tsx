import { Colors } from "@/constants/Colors";
import React, { ChangeEvent, useCallback, useState } from "react";
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
import { useTokenContext } from "@/context/token/useTokenContext";
import { IAddToken } from "@/api/tokens/types";

const TokenForm = () => {
  const [input, setInput] = useState<IAddToken>({
    visitorEmail: "",
    visitorName: "",
    visitorNo: 0,
    visitorPhone: "",
    reason: "",
  });

  const handleInputChange = useCallback((key: string, value: string) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  }, []);
  const { addTokenAsync,loading } = useTokenContext();
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "center", gap: 32 }}>
          <TextInput
            keyboardType="default"
            style={styles.input}
            placeholder="Visitor's Name"
            value={input.visitorName}
            onChangeText={(e) => handleInputChange("visitorName", e)}
          />
          <TextInput
            keyboardType="phone-pad"
            style={styles.input}
            placeholder="Visitor's Phone Number"
            value={input.visitorPhone}
            onChangeText={(e) => handleInputChange("visitorPhone", e)}
          />
          <TextInput
            keyboardType="email-address"
            style={styles.input}
            placeholder="Visitor's Email (optional)"
            value={input.visitorEmail}
            onChangeText={(e) => handleInputChange("visitorEmail", e)}
          />
          <TextInput
            keyboardType="default"
            style={styles.input}
            placeholder="Purpose of Visiting"
            value={input.reason}
            onChangeText={(e) => handleInputChange("reason", e)}
          />
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="Number of Visitor(s)"
            value={input.visitorNo as unknown as string}
            onChangeText={(e) => handleInputChange("visitorNo", e)}
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
              opacity: loading ? 0.5 : 1,
            }}
            onPress={()=>addTokenAsync(input)}
            disabled={loading}
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
    height: 56,
    width: "100%",
    paddingHorizontal: 16,
    color: "#111",
    borderWidth: 1,
    borderColor: "#c084fc",
    borderRadius: 8,
  },
});

export default TokenForm;
