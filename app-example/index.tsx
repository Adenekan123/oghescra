import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Pressable, View } from "react-native";

export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <ThemedView
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,
        gap: 20,
      }}
    >
      <Pressable
        onPress={() => router.push("tokens")}
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: Colors.light.tint,
          padding: 20,
          rowGap: 8,
          borderRadius: 16,
          flexBasis: "47%",
        }}
      >
        <View>
          <Ionicons name="people" size={56} color={Colors.light.background} />
        </View>
        <ThemedText>5</ThemedText>
        <ThemedText>My Visitors</ThemedText>
      </Pressable>
      <Pressable
        onPress={() => router.navigate("messages")}
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: Colors.light.tint,
          padding: 20,
          rowGap: 8,
          borderRadius: 16,
          flexBasis: "47%",
        }}
      >
        <View>
          <Ionicons name="chatbox" size={56} color={"green"} />
        </View>
        <ThemedText>20</ThemedText>
        <ThemedText>Messages</ThemedText>
      </Pressable>
      <Pressable
        onPress={() => router.navigate("outstandings")}
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: Colors.light.tint,
          padding: 20,
          rowGap: 8,
          borderRadius: 16,
          flexBasis: "47%",
        }}
      >
        <View>
          <Ionicons name="card-outline" size={56} color={"red"} />
        </View>
        <ThemedText>N0.00</ThemedText>
        <ThemedText>My Outstandings</ThemedText>
      </Pressable>
      <Pressable
        onPress={() => router.navigate("complaints")}
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: Colors.light.tint,
          padding: 20,
          rowGap: 8,
          borderRadius: 16,
          flexBasis: "47%",
        }}
      >
        <View>
          <Ionicons name="information-circle-outline" size={56} color={"gray"} />
        </View>
        <ThemedText>4</ThemedText>
        <ThemedText>Complaints</ThemedText>
      </Pressable>
    </ThemedView>
  );
}
