import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Details from "@/components/tokens/details";
import { IVisitor } from "@/types";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useMemo } from "react";

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

const TokenDetails = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const details = useMemo(() => {
    if (!id) return null;
    return visitors.find((visitor) => visitor.tokenID === id);
  }, [id]);

  useEffect(() => {
    navigation.setOptions({
      title: `Token Details`,
    });
  });
  return (
    details && (
      <ThemedView style={{flex:1,paddingHorizontal:16,paddingVertical:32}}>
        <Details details={details} />
      </ThemedView>
    )
  );
};

export default TokenDetails;
