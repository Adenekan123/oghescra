import { IVisitor } from "@/types";
import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { View } from "react-native";

const Details = ({ details }: { details: IVisitor }) => {
  const {
    tokenID,
    visitor,
    visitorEmail,
    reason,
    visitorNo,
    status,
    generated,
    loggedin,
    loggedout,
  } = details;
  return (
    <View style={{backgroundColor: "#fff", }}>
      <View style={{ flexDirection: "row", gap: 20, justifyContent:"space-between",borderBottomWidth:1,borderBottomColor:"#eee",padding: 16  }}>
        <ThemedText style={{ color: "grey", fontSize: 14,flexBasis:100 }}>
          Token ID:
        </ThemedText>
        <ThemedText style={{fontSize:16}}>{tokenID}</ThemedText>
      </View>
      <View style={{ flexDirection: "row", gap: 20, justifyContent:"space-between",borderBottomWidth:1,borderBottomColor:"#eee",padding: 16  }}>
        <ThemedText style={{ color: "grey", fontSize: 14,flexBasis:100 }}>
          Name:
        </ThemedText>
        <ThemedText style={{fontSize:16}}>{visitor}</ThemedText>
      </View>
      <View style={{ flexDirection: "row", gap: 20,justifyContent:"space-between",borderBottomWidth:1,borderBottomColor:"#eee",padding: 16  }}>
        <ThemedText style={{ color: "grey", fontSize: 14,flexBasis:100 }}>
          Email:
        </ThemedText>
        <ThemedText style={{fontSize:16}}>{visitorEmail}</ThemedText>
      </View>
      <View style={{ flexDirection: "row", gap: 20,justifyContent:"space-between",borderBottomWidth:1,borderBottomColor:"#eee",padding: 16  }}>
        <ThemedText style={{ color: "grey", fontSize: 14,flexBasis:100 }}>
          Reason:
        </ThemedText>
        <ThemedText style={{fontSize:16}}>{reason}</ThemedText>
      </View>
      <View style={{ flexDirection: "row", gap: 20,justifyContent:"space-between",borderBottomWidth:1,borderBottomColor:"#eee",padding: 16  }}>
        <ThemedText style={{ color: "grey", fontSize: 14,flexBasis:100 }}>
          Number of visitors:
        </ThemedText>
        <ThemedText style={{fontSize:16}}>{visitorNo}</ThemedText>
      </View>
      <View style={{ flexDirection: "row", gap: 20,justifyContent:"space-between",borderBottomWidth:1,borderBottomColor:"#eee",padding: 16  }}>
        <ThemedText style={{ color: "grey", fontSize: 14,flexBasis:100 }}>
          Status:
        </ThemedText>
        <ThemedText style={{fontSize:16}}>{status}</ThemedText>
      </View>
      <View style={{ flexDirection: "row", gap: 20,justifyContent:"space-between",padding: 16  }}>
        <ThemedText style={{ color: "grey", fontSize: 14,flexBasis:100 }}>
          Generated:
        </ThemedText>
        <ThemedText style={{fontSize:16}}>{generated}</ThemedText>
      </View>
    </View>
  );
};

export default Details;
