import React from "react";
import {Input,IconButton,Icon} from "native-base";
import { AntDesign } from "@expo/vector-icons"

export default function SearchBar({word,handle}){
  return (
        <Input 
          placeholder="Search"
          value={word}
          variant="filled"
          width="90%"
          mb={5}
          bg="gray.100"
          borderRadius={10}
          py={1}
          onChange={(e)=>{
            handle(e.target.value)}}  
          px={2}
          InputRightElement={
            <IconButton
           
                variant="solid"
                bg="purple.400"
                icon={<Icon size="sm"  
                            as={<AntDesign name="search1" />} 
                            color="white" />
                      } />
            }
          />              
  )
}