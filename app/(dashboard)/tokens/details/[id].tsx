import { ThemedView } from "@/components/ThemedView";
import Details from "@/components/tokens/details";
import { useTokenContext } from "@/context/token/useTokenContext";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useMemo } from "react";



const TokenDetails = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const {tokens} = useTokenContext();
  const details = useMemo(() => {
    if (!id) return null;
    return tokens.find((token) => token.tokenId === id);
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
