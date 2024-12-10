import { IOutstanding } from "@/api/outstandings/types";
import Outstanding from "@/components/oustanding";
import { ThemedView } from "@/components/ThemedView";
import { useOutstandingContext } from "@/context/outstandings/useOutstandingContext";
import React, { useCallback } from "react";
import { FlatList, SafeAreaView } from "react-native";

const Outstandings = () => {
  const { oustandings } = useOutstandingContext();
  const renderItem = useCallback(
    ({ item }: { item: IOutstanding }) => <Outstanding outstanding={item} />,
    []
  );
  return (
    <ThemedView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, padding: 22 }}>
        <FlatList
          data={oustandings}
          renderItem={renderItem}
          keyExtractor={(item,index) => item.dueType+index as unknown as string}
        />
      </SafeAreaView>
    </ThemedView>
  );
};

export default Outstandings;
