import { ThemedText } from "../ThemedText";
import { Pressable, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { IOutstanding } from "@/api/outstandings/types";
import { Ionicons } from "@expo/vector-icons";



interface IProps {
  outstanding: IOutstanding;
}
const Outstanding = (props: IProps) => {
  const { dueType, billAmount, billDate } = props.outstanding;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between",
       
      }}
    >
      <View style={{}}>
      <ThemedText
          numberOfLines={1}
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: Colors.light.text,
            paddingHorizontal: 16,
          }}
        >
          {dueType}
        </ThemedText>
        <ThemedText
          style={{
            fontSize: 12,
            fontWeight: 500,
            borderBottomColor: "#eeee",
            paddingHorizontal: 16,
          }}
        >
          {billDate}
        </ThemedText>
      </View>

        <ThemedText
          style={{
            color: "red",
            fontWeight:500
          }}
        >
          N{billAmount.toLocaleString("en", { minimumFractionDigits: 2 })}
        </ThemedText>
    </View>
  );
};

export default Outstanding;
