import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useTokenContext } from "@/context/token/useTokenContext";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ActivityIndicator, Pressable, View } from "react-native";

export default function Index() {
  const {tokens,loading} = useTokenContext();
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
        onPress={() => router.navigate("outstandings")}
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: Colors.light.tint,
          padding: 20,
          rowGap: 16,
          borderRadius: 16,
          flexBasis: "47%",
          maxWidth: "47%",
          shadowColor: Colors.light.text,
          shadowRadius: 16,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          elevation: 1,
        }}
      >
        <View>
          <Ionicons name="card-outline" size={52} color={"red"} />
        </View>
        <ThemedText type="subtitle">N260,000.00</ThemedText>
        <ThemedText>My Outstandings</ThemedText>
      </Pressable>
      <Pressable
        onPress={() => router.push("tokens")}
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: Colors.light.tint,
          padding: 20,
          rowGap: 16,
          borderRadius: 16,
          flexBasis: "47%",
          shadowColor: Colors.light.text,
          shadowRadius: 16,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          elevation: 1,
        }}
      >
        <View>
          <Ionicons name="people" size={52} color={Colors.light.background} />
        </View>
        <ThemedText type="subtitle">{loading ? <ActivityIndicator/> : tokens.length}</ThemedText>
        <ThemedText type="default">My Visitors</ThemedText>
      </Pressable>
      <Pressable
        onPress={() => router.navigate("messages")}
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: Colors.light.tint,
          padding: 20,
          rowGap: 16,
          borderRadius: 16,
          flexBasis: "47%",
          shadowColor: Colors.light.text,
          shadowRadius: 16,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          elevation: 1,
        }}
      >
        <View>
          <Ionicons name="chatbox" size={52} color={"green"} />
        </View>
        <ThemedText type="subtitle">20</ThemedText>
        <ThemedText>Messages</ThemedText>
      </Pressable>

      {/* <Pressable
        onPress={() => router.navigate("tokens")}
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: Colors.light.tint,
          padding: 20,
          rowGap: 16,
          borderRadius: 16,
          flexBasis: "47%",
          shadowColor: Colors.light.text,
          shadowRadius: 16,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          elevation: 1,
        }}
      >
        <View>
          <Ionicons name="key" size={52} color={"#333"} />
        </View>
        <ThemedText type="subtitle">4</ThemedText>
        <ThemedText>Tokens</ThemedText>
      </Pressable> */}
      <Pressable
        onPress={() => router.navigate("complaints")}
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: Colors.light.tint,
          padding: 20,
          rowGap: 16,
          borderRadius: 16,
          flexBasis: "47%",
          maxWidth: "47%",
          shadowColor: Colors.light.text,
          shadowRadius: 16,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          elevation: 1,
        }}
      >
        <View>
          <Ionicons
            name="information-circle-outline"
            size={52}
            color={"gray"}
          />
        </View>
        <ThemedText type="subtitle">4</ThemedText>
        <ThemedText>Complaints</ThemedText>
      </Pressable>
    </ThemedView>
  );
}
