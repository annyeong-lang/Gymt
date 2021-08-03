import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Login from "./Login";

const Stack = createStackNavigator();

export default () => (
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
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Tab" component={Tabs} />
  </Stack.Navigator>
);