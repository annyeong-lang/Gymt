import {Box,Text,VStack,HStack,Center,Icon} from "native-base"
import React from "react"
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";
export default function PostLists ({lists=[]})
{
  function Keywords({item}){
    return(
      <Center
      mx={2} my={1} 
       width={20} h={8}
        bg="purple.400"
        px={1}
        py={1}
        rounded="md"
       _text={
         {
         color:"white",
         fontSize: "md",
         fontWeight: "500",
         }
         }
      >{item}</Center>
    )
  }
 
  return(
    <VStack space={2}>
    {lists.map((data,index)=>{
      if(data){
        return(
          <TouchableOpacity onPress={}> 
          <Box bg="purple.50" rounded="md" py={1} width="100%">
          <HStack>
              <Keywords item={data.sports} />
              <Keywords item={data.location} />
          </HStack>
      <VStack>
      <Text px={5}
           py={3}
           fontSize="lg">{data.title}</Text>
      <HStack space={8} mx={4} mt={1}>
        <Text 
        px={1}
           py={1}
           fontSize= "xs"
           
              >작성자 : {data.id}</Text>
        <Text px={1} 
           py={1}   
           position="absolute" right={6}       
           fontSize="xs">{data.date}</Text>
      </HStack>
      <HStack mx={8} my={2}space={20}>
        <HStack alignItems="center" space={2}>
           <Icon
              as={<Ionicons name="chatbubbles"  color="black" />}
              color="gray.500"
              size={5}
            />
           <Text fontSize="sm">댓글 {data.comments}</Text>
        </HStack>
          <Text fontSize="sm" >조회수 {data.looks}</Text>
      </HStack>
      </VStack>
       </Box>
       </TouchableOpacity> 
        )
      }
    })
    }
  </VStack>
  )
}
