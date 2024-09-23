import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Message from "@/components/messages/message";
import Details from "@/components/tokens/details";
import { IMessage } from "@/types";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useMemo } from "react";

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
const TokenDetails = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const details = useMemo(() => {
    if (!id) return null;
    return myMessages.find((message) => message.messageID === Number(id));
  }, [id]);

  useEffect(() => {
    navigation.setOptions({
      title: `Message details`,
    });
  });
  return (
    details && (
      <ThemedView style={{paddingHorizontal:16, paddingVertical:32,flex:1}}>
        <Message message={details} preview={true} />
      </ThemedView>
    )
  );
};

export default TokenDetails;
