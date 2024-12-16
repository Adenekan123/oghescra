import { IOutstanding } from "@/api/outstandings/types";
import Outstanding from "@/components/oustanding";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useOutstandingContext } from "@/context/outstandings/useOutstandingContext";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import React, { useCallback, useMemo, useState } from "react";
import { Button, FlatList, Pressable, SafeAreaView, View } from "react-native";

const Outstandings = () => {
  const [all, setAll] = useState<IOutstanding[]>([]);
  const [selected, setSelected] = useState<IOutstanding[]>([]);
  const { oustandings } = useOutstandingContext();

  const update = useCallback(
    (value: IOutstanding) => {
      const existing = selected.find((item) => item.dueType === value.dueType);

      if (!existing) {
        setSelected((prev) => [...prev, value]);
      } else {
        setSelected(selected.filter((item) => item.dueType !== value.dueType));
      }
    },
    [selected]
  );

  const selectAll = useCallback(()=>{
    if(oustandings.length === selected.length) setSelected([]);
    else setSelected(oustandings);
  },[all,selected,oustandings])

  const total = useMemo(() => {
    return selected.reduce((prev, item) => prev + item.billAmount, 0);
  }, [selected]);

  const renderItem = useCallback(
    ({ item }: { item: IOutstanding }) => (
      <Pressable
      onPress={()=>update(item)}
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: Colors.light.tint,
          paddingVertical: 6,
          marginVertical: 6,
          paddingHorizontal: 12,
          borderRadius: 8,
          shadowColor: Colors.light.text,
          shadowRadius: 16,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          elevation: 1,
        }}
      >
        <Checkbox
          value={selected.includes(item)}
          onValueChange={() => update(item)}
          color={Colors.light.background}
        />
        <Outstanding outstanding={item}  />
      </Pressable>
    ),
    [selected]
  );
  return (
    <ThemedView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Pressable onPress={selectAll} style={{paddingHorizontal:16,paddingTop:16,paddingBottom:8, flexDirection:"row", alignItems:"center", gap:12, marginLeft:"auto"}}>
          <ThemedText style={{color:Colors.light.background, fontWeight:500}}>Select All</ThemedText>
          <Checkbox color={Colors.light.background} value={Boolean(oustandings.length === selected.length)} onValueChange={()=>selectAll()} />
        </Pressable>
        <FlatList
          data={oustandings}
          renderItem={renderItem}
          style={{paddingHorizontal:16}}
          keyExtractor={(item, index) =>
            (item.dueType + index) as unknown as string
          }
        />
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12, backgroundColor:Colors.light.background, padding:16 }}>
          <ThemedText
            style={{
              flex:1,
              fontSize: 22,
              fontWeight: 500,
              color: Colors.light.tint,
            }}
          >
            Total: N{total.toLocaleString("en",{minimumFractionDigits:2})}
          </ThemedText>
          <View>
            <Pressable style={{flexDirection:"row", alignItems:"center", backgroundColor:"#fff", paddingVertical:12, paddingHorizontal:16, borderRadius:8, gap:6, justifyContent:"center"}}>
              <Ionicons name="cash-outline" size={24} color={Colors.light.background} />
              <ThemedText style={{fontSize:18, fontWeight:500, color:Colors.light.background}}>Pay Now</ThemedText>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
};

export default Outstandings;
