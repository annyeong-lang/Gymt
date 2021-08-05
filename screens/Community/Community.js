import React from "react"

import {Center,Input,Icon,IconButton,Text,HStack,VStack,Box,Divider,NativeBaseProvider} from "native-base"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CommunityHomeScreen from "./communityhomeScreen";
import PostingScreen from "./postingScreen";
import WritingScreen from "./writeScreen";
 const Stacks=createStackNavigator();
export default function App(){
 
  return(
     <Stacks.Navigator
           screenOptions={
            {headerShown : false}} >
    <Stacks.Screen name="h" component={CommunityHomeScreen} />
    <Stacks.Screen name="wh" component={PostingScreen} /> 
    <Stacks.Screen name="w" component={WritingScreen} />   
     </Stacks.Navigator>
  
  
  )
}