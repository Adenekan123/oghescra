// import * as Clipboard from "expo-clipboard";
import React, { useEffect, useMemo, useState } from "react";
import { ThemedText } from "../ThemedText";
import { Alert, Share, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { IToken } from "@/api/tokens/types";

const Details = ({ details }: { details: IToken }) => {
  const [copied, setCopied] = useState(false);
  const {
    tokenId,
    visitor,
    visitorsEmail,
    reason,
    visitorNo,
    status,
    generated,
  } = details;

  const message = useMemo(
    () => `Hi ${visitor}, your gatepass ID is *${tokenId}*`,
    [visitor, tokenId]
  );

  // const copyToClipboard = async () => {
  //   await Clipboard.setStringAsync(message);
  //   setCopied(true);
  // };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          // Alert.alert(`shared with activity type of ${result.activityType}`)
        } else {
          // setCopied(true);
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copied]);

  return (
    <View style={{ gap: 24 }}>
      <View
        style={{
          backgroundColor: "#fff",
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
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "#eee",
            padding: 16,
          }}
        >
          <ThemedText style={{ color: "grey", fontSize: 14, flexBasis: 100 }}>
            Token ID:
          </ThemedText>
          <ThemedText style={{ fontSize: 16 }}>{tokenId}</ThemedText>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "#eee",
            padding: 16,
          }}
        >
          <ThemedText style={{ color: "grey", fontSize: 14, flexBasis: 100 }}>
            Name:
          </ThemedText>
          <ThemedText style={{ fontSize: 16 }}>{visitor}</ThemedText>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "#eee",
            padding: 16,
          }}
        >
          <ThemedText style={{ color: "grey", fontSize: 14, flexBasis: 100 }}>
            Email:
          </ThemedText>
          <ThemedText style={{ fontSize: 16 }}>{visitorsEmail}</ThemedText>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "#eee",
            padding: 16,
          }}
        >
          <ThemedText style={{ color: "grey", fontSize: 14, flexBasis: 100 }}>
            Reason:
          </ThemedText>
          <ThemedText style={{ fontSize: 16 }}>{reason}</ThemedText>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "#eee",
            padding: 16,
          }}
        >
          <ThemedText style={{ color: "grey", fontSize: 14, flexBasis: 100 }}>
            Number of visitors:
          </ThemedText>
          <ThemedText style={{ fontSize: 16 }}>{visitorNo}</ThemedText>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "#eee",
            padding: 16,
          }}
        >
          <ThemedText style={{ color: "grey", fontSize: 14, flexBasis: 100 }}>
            Status:
          </ThemedText>
          <ThemedText style={{ fontSize: 16 }}>{status}</ThemedText>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <ThemedText style={{ color: "grey", fontSize: 14, flexBasis: 100 }}>
            Generated:
          </ThemedText>
          <ThemedText style={{ fontSize: 16 }}>{generated}</ThemedText>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={onShare}
          style={{
            backgroundColor: Colors.light.background,
            width: 50,
            height: 50,
            borderRadius: 150,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="share" size={24} color={"#fff"} />
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={copyToClipboard}
          style={{
            backgroundColor: Colors.light.background,
            width: 50,
            height: 50,
            borderRadius: 150,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="copy" size={24} color={"#fff"} />
        </TouchableOpacity> */}
        {copied && (
          <View style={{ alignItems: "center" }}>
            <ThemedText>Token ID copied to clipboard</ThemedText>
          </View>
        )}
      </View>
    </View>
  );
};

export default Details;
