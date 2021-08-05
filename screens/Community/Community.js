import React from "react"

import {Center,Input,Icon,IconButton,Text,HStack,VStack,Box,Divider,NativeBaseProvider} from "native-base"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

 const Stack=createStackNavigator();
export default function App(){
 
  return(
   
     <NavigationContainer>
     <Stack.Navigator
           screenOptions={
            headerShown : false
           }
      >
    <Stack.Screen name="h" component={CommunityHomeScreen} />
    <Stack.Screen name="wh" component={PostingScreen} /> 
    <Stack.Screen name="w" component={WritingScreen} />   
     </Stack.Navigator>
     </NavigationContainer>
  
  )
}