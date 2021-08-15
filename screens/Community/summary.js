import {Box,Text,VStack,HStack,Center,Icon} from "native-base"
import React from "react"
import { Ionicons } from '@expo/vector-icons'; 

export default function Summary ({sports,location,id,comments,title,date,looks})
{
  function Keywords({item}){
    return(
      <Center mx={2} my={1} 
        width={20} h={8}
        bg="purple.400"
        px={1}
        py={1}
        rounded="md"
        _text={
          {
          fontFamily: "SCDream",
          color:"white",
          fontSize: "md",
          fontWeight: "500",
          }
        }
      >{item}</Center>
    )
  }
  return(
    <Center py={2} bg="white" px={2} m={0}>
      <Box bg="purple.50" rounded="md" py={1} width="100%">
        <HStack>
              <Keywords item={sports} />
              <Keywords item={location} />
        </HStack>
      <VStack>
      <Text px={5}
          py={3}
          fontSize="lg"
          style={{fontFamily: "SCDream"}}
      >{title}</Text>
      <HStack space={8} mx={4} mt={1}>
        <Text 
          px={2}
          py={1}
          fontSize= "xs"
        >작성자 : {id}</Text>
        <Text px={1} 
           py={1}   
           position="absolute" right={3}       
           fontSize="xs">{date} 작성</Text>
      </HStack>
      <HStack mx={8} my={2}space={20}>
        <HStack alignItems="center" space={2}>
           <Icon
              as={<Ionicons name="chatbubbles"  color="black" />}
              color="gray.500"
              size={5}
            />
           <Text fontSize="sm">댓글 {comments}</Text>
        </HStack>
          <Text fontSize="sm" >조회수 {looks}</Text>
      </HStack>
      </VStack>
       </Box>
  </Center>
  )
}
