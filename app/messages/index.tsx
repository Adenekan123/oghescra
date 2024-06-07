import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Message from "@/components/messages/message";
import { IMessage } from "@/types";
import { router, useNavigation } from "expo-router";
import React, { useCallback, useEffect } from "react";
import { FlatList, SafeAreaView } from "react-native";

const myMessages: IMessage[] = [
  {
    messageID: 1,
    residentID: "ytfrewrtgh",
    visitorName: "James",
    message: `Your expected visitor(s) (James) has been let into your Estate/GRA and should be with you shortly`,
  },
  {
    messageID: 2,
    residentID: "fgdswwefr",
    visitorName: "Wood",
    message: `Your expected visitor(s) (Wood) has been let into your Estate/GRA and should be with you shortly`,
  },
  {
    messageID: 3,
    residentID: "ytrefrghf",
    visitorName: "Kyle",
    message: `Your expected visitor(s) (JamKylees) has been let into your Estate/GRA and should be with you shortly`,
  },
  {
    messageID: 4,
    residentID: "lkjhgfdghj",
    visitorName: "Jolie",
    message: `Your expected visitor(s) (Jolie) has been let into your Estate/GRA and should be with you shortly`,
  },
  {
    messageID: 5,
    residentID: "jhgfdfghj",
    visitorName: "Kunle",
    message: `Your expected visitor(s) (Kunle) has been let into your Estate/GRA and should be with you shortly`,
  },
  {
    messageID: 6,
    residentID: "lkjhgfdghj",
    visitorName: "Funke",
    message: `Your expected visitor(s) (Funke) has been let into your Estate/GRA and should be with you shortly`,
  },
  {
    messageID: 7,
    residentID: "mnbvcvfgh",
    visitorName: "Maryam",
    message: `Your expected visitor(s) (Maryam) has been let into your Estate/GRA and should be with you shortly`,
  },
  {
    messageID: 8,
    residentID: "iuytrefgh",
    visitorName: "Luka",
    message: `Your expected visitor(s) (Luka) has been let into your Estate/GRA and should be with you shortly`,
  }
];

const Messages = () => {
  const renderItem = useCallback(({ item }: { item: IMessage }) => {
    return (
      <Message
        key={item.messageID}
        message={item}
        onPress={() => router.push(`messages/details/${item.messageID}`)}
      />
    );
  }, []);

 
  return (
    <ThemedView style={{flex:1}}>
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <FlatList
          data={myMessages}
          renderItem={renderItem}
          keyExtractor={(item) => item.visitorName}
        />
      </SafeAreaView>
    </ThemedView>
  );
};

export default Messages;
