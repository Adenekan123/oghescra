import { Stack } from "expo-router";
import React from "react";
import { RootSiblingParent } from 'react-native-root-siblings';



const RootLayout = () => {
  return (
    <RootSiblingParent>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      </Stack>
     
    </RootSiblingParent>
  );
};

export default RootLayout;
