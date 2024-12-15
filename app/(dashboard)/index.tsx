import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useMessageContext } from "@/context/message/useMessageContext";
import { useOutstandingContext } from "@/context/outstandings/useOutstandingContext";
import { useTokenContext } from "@/context/token/useTokenContext";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useMemo } from "react";
import { ActivityIndicator, Pressable, View } from "react-native";

export default function Index() {
  const {tokens,loading} = useTokenContext();
  const {messages,loading:messagesLoading} = useMessageContext();
  const {totalOutstandings,loading:loadingOutstanding} = useOutstandingContext();

  const outstandingValue = useMemo(()=>{
    if(!totalOutstandings.length) return 0;
    else return totalOutstandings[0].balance
  },[])
  return (
    <ThemedView
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,
        gap: 12,
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
          // maxWidth: "47%",
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
        <ThemedText type="subtitle">
        {loadingOutstanding ? <ActivityIndicator color={Colors.light.background}/> : ` N${parseFloat(outstandingValue+"").toLocaleString("en",{minimumFractionDigits:2})}`}
         
          </ThemedText>
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
          // maxWidth: "47%",
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
        <ThemedText type="subtitle">{loading ? <ActivityIndicator color={Colors.light.background}/> : tokens.length}</ThemedText>
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
          // maxWidth: "47%",
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
          <Entypo name="chat" size={52} color={"green"} />
        </View>
        <ThemedText type="subtitle">{messagesLoading ? <ActivityIndicator color={Colors.light.background}/> : messages.length}</ThemedText>
        <ThemedText>Messages</ThemedText>
      </Pressable>
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
          // maxWidth: "47%",
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
