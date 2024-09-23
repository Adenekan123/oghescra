import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link, router, useNavigation } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { useCallback, useMemo } from "react";
import { Button, Pressable } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {

  const back = () => router.back();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="index"
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
       
        <Drawer.Screen
          name="index"
          options={{ title: "Oghescra Ota", drawerLabel: "Dahboard" }}
        />
         <Drawer.Screen
          name="profile"
          options={{
            headerLeft: () => (
              <Pressable
                style={{ padding: 16 }}
                onPress={back}
              >
                <Ionicons name="arrow-back" size={22} color={"#fff"} />
              </Pressable>
            ),
          }}
        />
        <Drawer.Screen
          name="tokens"
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="outstandings"
          options={{
            headerLeft: () => (
              <Pressable
                style={{ padding: 16 }}
                onPress={back}
              >
                <Ionicons name="arrow-back" size={22} color={"#fff"} />
              </Pressable>
            ),
          }}
        />
        <Drawer.Screen
          name="complaints"
          options={{
            headerLeft: () => (
              <Pressable
                style={{ padding: 16 }}
                onPress={back}
              >
                <Ionicons name="arrow-back" size={22} color={"#fff"} />
              </Pressable>
            ),
          }}
        />
        <Drawer.Screen
          name="messages"
          options={{
            headerShown: false,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
