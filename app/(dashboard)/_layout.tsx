import { StatusBar } from "expo-status-bar";
import { Colors } from "@/constants/Colors";
import MessageProvider from "@/context/message/message.provider";
import OutstandingProvider from "@/context/outstandings/outstanding.provider";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TokenProvider from "@/context/token/token.provider";
import { DrawerItemList } from "@react-navigation/drawer";

export default function RootLayout() {
  const back = () => router.back();
  return (
    <TokenProvider>
      <MessageProvider>
        <OutstandingProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
              initialRouteName="index"
              screenOptions={{
                drawerPosition: "left",
                drawerType: "front",
                drawerStyle: {
                  backgroundColor: Colors.light.background,
                  width: 250,
                },
                drawerActiveTintColor: Colors.light.tint,
                drawerInactiveTintColor: Colors.light.tint,
                headerStyle: {
                  backgroundColor: Colors.light.background,
                },
                headerTintColor: Colors.light.tint,
                headerTitleAlign: "center",
              }}
              drawerContent={(props) => {
                return (
                  <SafeAreaView>
                    <View
                      style={{
                        height: 200,
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: Colors.light.tint,
                        paddingBottom: 0,
                      }}
                    >
                      <Ionicons
                        name="person-circle-sharp"
                        size={80}
                        color={"#fff"}
                      />
                      <Text
                        style={{
                          fontSize: 22,
                          color: "#fff",
                          fontWeight: "bold",
                          marginVertical: 2,
                        }}
                      >
                        John Doe
                      </Text>
                    </View>
                    <DrawerItemList {...props} />
                    <Pressable style={{flexDirection:"row", alignItems:"center", gap:30, marginLeft:20, marginTop:14}}>
                      <Ionicons name="log-out" size={22} color={"#fff"} />
                      <Text
                        style={{
                          color: "#fff",
                          fontWeight: "500",
                        }}
                      >
                        Signout
                      </Text>
                    </Pressable>
                  </SafeAreaView>
                );
              }}
            >
              <Drawer.Screen
                name="index"
                options={{
                  title: "Oghescra Ota",
                  drawerLabel: "Dahboard",

                  drawerIcon: () => (
                    <Ionicons name="home" size={22} color={"#fff"} />
                  ),
                }}
              />
              <Drawer.Screen
                name="profile"
                options={{
                  drawerIcon: () => (
                    <Ionicons name="person" size={22} color={"#fff"} />
                  ),
                  drawerLabel: "My profile",
                  headerLeft: () => (
                    <Pressable style={{ padding: 16 }} onPress={back}>
                      <Ionicons name="arrow-back" size={22} color={"#fff"} />
                    </Pressable>
                  ),
                }}
              />
              <Drawer.Screen
                name="tokens"
                options={{
                  headerShown: false,
                  drawerLabel: "Token",
                  drawerIcon: () => (
                    <Ionicons name="key" size={22} color={"#fff"} />
                  ),
                }}
              />
              <Drawer.Screen
                name="outstandings"
                options={{
                  headerTitle: "Outstandings",
                  drawerLabel: "My outstandings",
                  drawerIcon: () => (
                    <Ionicons name="cash" size={22} color={"#fff"} />
                  ),
                  headerLeft: () => (
                    <Pressable style={{ padding: 16 }} onPress={back}>
                      <Ionicons name="arrow-back" size={22} color={"#fff"} />
                    </Pressable>
                  ),
                }}
              />
              <Drawer.Screen
                name="paymenthistory"
                options={{
                  headerTitle: "Payment history",
                  drawerLabel: "Payment history",
                  drawerIcon: () => (
                    <Ionicons name="time" size={22} color={"#fff"} />
                  ),
                  headerLeft: () => (
                    <Pressable style={{ padding: 16 }} onPress={back}>
                      <Ionicons name="arrow-back" size={22} color={"#fff"} />
                    </Pressable>
                  ),
                }}
              />
              <Drawer.Screen
                name="vendors"
                options={{
                  headerTitle: "Vendors",
                  drawerLabel: "Vendors",
                  drawerIcon: () => (
                    <Entypo name="users" size={22} color={"#fff"} />
                  ),
                  headerLeft: () => (
                    <Pressable style={{ padding: 16 }} onPress={back}>
                      <Ionicons name="arrow-back" size={22} color={"#fff"} />
                    </Pressable>
                  ),
                }}
              />
              <Drawer.Screen
                name="complaints"
                options={{
                  headerTitle: "Complaints",
                  drawerLabel: "Complaint",
                  drawerIcon: () => (
                    <Ionicons name="help-buoy" size={22} color={"#fff"} />
                  ),
                  headerLeft: () => (
                    <Pressable style={{ padding: 16 }} onPress={back}>
                      <Ionicons name="arrow-back" size={22} color={"#fff"} />
                    </Pressable>
                  ),
                }}
              />
              <Drawer.Screen
                name="messages"
                options={{
                  headerShown: false,
                  drawerItemStyle: { display: "none" },
                }}
              />
            </Drawer>
          </GestureHandlerRootView>
          <StatusBar style="light" />
        </OutstandingProvider>
      </MessageProvider>
    </TokenProvider>
  );
}
