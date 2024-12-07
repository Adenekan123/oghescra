import { IToken } from "@/api/tokens/types";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import SingleToken from "@/components/tokens/singletoken";
import Visitor from "@/components/tokens/singletoken";
import { useTokenContext } from "@/context/token/useTokenContext";
import { IVisitor } from "@/types";
import React, { useCallback, useMemo } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// const visitors: IVisitor[] = [
//   {
//     tokenID: "hgfdsfgdc",
//     residentID: "jiytrerty",
//     residentName: "John Doe",
//     residentAddress: "lagos",
//     visitor: "Ebedi",
//     visitorEmail: "ebedi@gmail.com",
//     visitorNo: "089765432456",
//     reason: "Billing",
//     status: "unused",
//     active: 1,
//     generated: "2022",
//   },
//   {
//     tokenID: "iuyt5678",
//     residentID: "hgfd4356",
//     residentName: "John Doe",
//     residentAddress: "lagos",
//     visitor: "bunto",
//     visitorEmail: "bunto@gmail.com",
//     visitorNo: "089765432456",
//     reason: "grocceraies",
//     status: "unused",
//     active: 1,
//     generated: "2042",
//   },
// ];

const Token = () => {
  const { tokens, loading } = useTokenContext();
  const renderItem = useCallback(({ item }: { item: IToken }) => {
    return <SingleToken key={item.tokenId} token={item} />;
  }, []);
  return (
    <ThemedView
      style={{
        flex: 1,
        paddingHorizontal: 22,
        paddingVertical: 24,
      }}
    >
      {loading ? (
        <ActivityIndicator size={26} color={"#111"} />
      ) : (
        <FlatList
          data={tokens}
          renderItem={renderItem}
          keyExtractor={(item) => item.tokenId as string}
        />
      )}
    </ThemedView>
  );
};

export default Token;
