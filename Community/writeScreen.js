import React from "react"

import {Center,Input,Icon,IconButton,Text,HStack,VStack,Box,Divider,NativeBaseProvider} from "native-base"
import TouchableOpacitiy from "react"
export default function SummaryScreen({navigation})
{
  const touch=({navigation})=>{
    navigation.navigate("write");
  }
  
  return(
    <TouchableOpacitiy onPress={touch(navigation)}>
      <Summary />
    </TouchableOpacitiy>
  )
  
}