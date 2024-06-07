import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Visitor from "@/components/tokens/visitor";
import { IVisitor } from "@/types";
import React, { useCallback, useMemo } from "react";
import { FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const visitors: IVisitor[] = [
  {
    tokenID: "hgfdsfgdc",
    residentID: "jiytrerty",
    residentName: "John Doe",
    residentAddress: "lagos",
    visitor: "Ebedi",
    visitorEmail: "ebedi@gmail.com",
    visitorNo: "089765432456",
    reason: "Billing",
    status: "unused",
    active: 1,
    generated: "2022",
  },
  {
    tokenID: "iuyt5678",
    residentID: "hgfd4356",
    residentName: "John Doe",
    residentAddress: "lagos",
    visitor: "bunto",
    visitorEmail: "bunto@gmail.com",
    visitorNo: "089765432456",
    reason: "grocceraies",
    status: "unused",
    active: 1,
    generated: "2042",
  },
];

const Token = () => {

  const renderItem = useCallback(({item}:{item:IVisitor})=>{
    return  <Visitor key={item.tokenID} visitor={item} />
  },[]) 
  return (
      <ThemedView style={{ flex: 1, rowGap: 14,paddingHorizontal: 16, paddingVertical: 24 }}>
        <FlatList data={visitors} renderItem={renderItem} keyExtractor={(item)=>item.generated} />
      </ThemedView>
  );
};

export default Token;
