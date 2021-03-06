import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeEntry from "../screens/Home/HomeEntry";
import SearchGym from "../screens/Search/SearchGym";
import Community from "./Community";
import Setting from "../screens/Setting/Setting";
import { Platform } from "react-native";
import { Entypo } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export default () => {
  return (
<Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "홈 화면") {
            iconName += "home";
          } else if (route.name === "체육관 찾기") {
            iconName += "search";
          } else if (route.name === "커뮤니티") {
            return <Entypo name="chat" size={24} color={focused ? "white" : "lightgrey"} />;
          } else if (route.name === "내 정보") {
            iconName += "settings";
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? "white" : "lightgrey"}
              size={26}
            />
          );
        }
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'lightgray',
        iconStyle: {
          marginTop:5
        },
        labelStyle: {
          marginBottom:10
        },
        style: {
          height:65,
          backgroundColor: "rgba(12, 144, 125, 1)",
          borderTopColor: "rgba(12, 144, 125, 1)"
        }
      }}
    >
      <Tabs.Screen name="홈 화면" component={HomeEntry} />
      <Tabs.Screen name="체육관 찾기" component={SearchGym} />
      <Tabs.Screen name="커뮤니티" component={Community}/>
      <Tabs.Screen name="내 정보" component={Setting}/>
    </Tabs.Navigator>
  );
};