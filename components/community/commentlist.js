import React from 'react';
import {Center,VStack,Box,HStack,Icon,Text} from "native-base"
import { FontAwesome } from '@expo/vector-icons';
export default function ShowComments({clist=[""]})
{
  var cnt=0;
  function  AddComment({input,order})
    {
      return(
        <HStack space={2} px={1}  >
            <VStack>
              <Icon size="sm" as={<FontAwesome name="user-circle" size={24} color="black" />}></Icon>
            <Text>{`user${order}`}</Text>
            </VStack>
            <Center w={20}><Text>{input}</Text></Center>
          </HStack>
      )
    }
    return(
      <VStack width="80%" space={4}>
      {
        clist.map((cur)=>{
          cnt=cnt+1;
          if(cur)
          {
            return(<AddComment key={cnt} order={cnt} input={cur} />)
          }
          
         } )
      }
      </VStack>
    )
}