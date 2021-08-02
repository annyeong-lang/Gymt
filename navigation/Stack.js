import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default () => (
  /*일단은 navigation 탭 냅두는데 나중에 없애고 tab을 App.js에 넣는 시도 할 예정. */
  <Stack.Navigator
    screenOptions={{
      headerShown: false, //이게 header안보이게
      headerStyle: {
        backgroundColor: "rgba(219, 178, 255, 1)",
        borderBottomColor: "rgba(219, 178, 255, 1)",
        shadowColor: "rgba(219, 178, 255, 1)"
      },
      headerTintColor: "white",
      headerBackTitleVisible: false
    }}
     >
    <Stack.Screen name="Tab" component={Tabs} />
  </Stack.Navigator>
);