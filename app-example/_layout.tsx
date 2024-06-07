import { Colors } from "@/constants/Colors";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerStyle: { backgroundColor: Colors.light.background },
          drawerActiveTintColor: Colors.light.tint,
          drawerInactiveTintColor: Colors.light.tint,
          headerStyle: {
            backgroundColor: Colors.light.background,
            // borderBottomRightRadius: 35,
            // borderBottomLeftRadius: 35,
          },
          headerTintColor: Colors.light.tint,
          headerTitleAlign: "center",
        }}
      >
        <Drawer.Screen name="profile" />
        <Drawer.Screen
          name="index"
          options={{ title: "Oghescra Ota", drawerLabel: "Dahboard" }}
        />
        <Drawer.Screen name="tokens" />
        <Drawer.Screen name="outstandings" />
        <Drawer.Screen name="complaints" />
      </Drawer>
    // </GestureHandlerRootView>
  );
}
