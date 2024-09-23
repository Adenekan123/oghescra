import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, ScrollView, View } from "react-native";

const Profile = () => {
  return (
    <ThemedView style={{ flex: 1, padding: 22 }}>
      <ScrollView style={{ flex: 1 }}>
        <ThemedView
          style={{
            backgroundColor: "#fff",
            shadowColor: "#eee",
            alignItems: "center",
            padding: 32,
            borderRadius: 16,
          }}
        >
          <Ionicons name="person-circle-sharp" size={80} />
          <ThemedText type="subtitle" style={{marginTop: 8 }}>
            John Doe
          </ThemedText>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <ThemedText style={{ fontSize: 14, color: "grey" }}>
              Apartment:
            </ThemedText>
            <ThemedText
              style={{ fontSize: 14, color: Colors.light.background }}
            >
              Flat
            </ThemedText>
          </View>
        </ThemedView>
        <View
          style={{
            rowGap: 24,
            backgroundColor: "#fff",
            marginTop: 20,
            paddingVertical: 24,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              alignItems: "center",
              gap: 4,
              paddingHorizontal: 20,
            }}
          >
            <ThemedText style={{ fontSize: 18, color:"#333", fontWeight: "bold" }}>
              ORA100000003
            </ThemedText>
            <ThemedText style={{ color: "grey", fontSize: 14 }}>
              Residence ID
            </ThemedText>
          </View>
        </View>
        <View
          style={{
            rowGap: 32,
            backgroundColor: "#fff",
            marginTop: 20,
            paddingVertical: 24,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 60,
              paddingHorizontal: 20,
            }}
          >
            <Ionicons name="call" size={24} color={Colors.light.background} />
            <ThemedText>080656789765</ThemedText>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 60,
              paddingHorizontal: 20,
            }}
          >
            <Ionicons name="mail" size={24} color={Colors.light.background} />
            <ThemedText>okesadef@gmail.com</ThemedText>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 60,
              paddingHorizontal: 20,
            }}
          >
            <Ionicons
              name="calendar"
              size={24}
              color={Colors.light.background}
            />
            <ThemedText>11-01-1967</ThemedText>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 60,
              paddingHorizontal: 20,
            }}
          >
            <Ionicons
              name="location"
              size={24}
              color={Colors.light.background}
            />
            <ThemedText>0, Zone 1</ThemedText>
          </View>
        </View>
        <Pressable
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 28,
            backgroundColor: Colors.light.background,
            padding: 16,
            borderRadius: 150,
          }}
        >
          <ThemedText
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
              fontSize:18,
            }}
          >
            Sign out
          </ThemedText>
          <FontAwesome name="sign-out" size={18} color={"white"} />
        </Pressable>
      </ScrollView>
    </ThemedView>
  );
};

export default Profile;
