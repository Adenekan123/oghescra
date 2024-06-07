import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link, Stack, router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Button, Pressable } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.background,
        },
        headerTintColor: Colors.light.tint,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Messages",
          headerLeft:()=>(
              <Pressable onPress={()=> router.push("/")}>
                <Ionicons name="arrow-back" size={22} color={"#fff"} />
              </Pressable>
          )
        }}
      />
    </Stack>
  );
}
