import React from "react"

import {Center,Input,Icon,IconButton,Text,HStack,VStack,Box,Divider,NativeBaseProvider} from "native-base"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CommunityHomeScreen from "../../components/community/communityHome";



export default function Nav(){
  const Stack=createStackNavigator();
  return(
   <NavigationContainer>
     <Stack.Screen name="summ" component={<CommunityHomeScreen />} />
     <Stack.Screen name="whole" component={<PostingScreen/>} />
     <Stack.Screen name="form" component={<WritingScreen />} />
     <Stack.Screen name="write" component={<WriteButton />} />
   </NavigationContainer>
  )
}