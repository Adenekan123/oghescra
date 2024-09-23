import SigninForm from "@/components/auth/signin";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";


export default function Index() {
  return (
    <ThemedView style={{ flex: 1, justifyContent: "center", padding: 16 }}>
      <SigninForm />
      <StatusBar style="light" backgroundColor={Colors.light.background} />
    </ThemedView>
  );
}

// const styles = StyleSheet.create({
//   textInput: {
//     backgroundColor: "#fff",
//     marginBottom: 16,
//     paddingHorizontal: 16,
//     paddingVertical: 14,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#c084fc",
//   },
//   labelInput: {
//     marginBottom: 8,
//   },
//   btnContainer: {
//     marginVertical: 16,
//     // flex:1
//   },
//   btn: {
//     backgroundColor: Colors.light.background,
//     paddingHorizontal: 22,
//     paddingVertical: 18,
//     borderRadius: 8,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   btnText: {
//     color: "#fff",
//     fontWeight: "bold",
//     textTransform: "uppercase",
//     letterSpacing: 1,
//     fontSize: 16,
//   },
// });
