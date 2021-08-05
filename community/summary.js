import {Box,Text,VStack,HStack,Center,Icon} from "native-base"
import React from "react"
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";


//각가 data 받아야함
export default function Summary ({sports,location,id,comments,title,date,looks})
{
  const data={
    sports:"배드민턴",
    location:"안동시",
    id:"hot",
    title: "배드민턴 좋아요",
    comments:"1",
    date: "2021 05 25",
    looks:"3" ,
    contents: "배드민턴 같이 하실 분 찾아요"
  }
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
         color:"white",
         fontSize: "md",
         fontWeight: "500",
         }
         }
      >{item}</Center>
    )
  }
  return(
    <Center>
    <VStack space={2} width="80%">
      <Box bg="purple.50" rounded="md" py={1} width="100%">
        <HStack>
              <Keywords item={sports} />
              <Keywords item={location} />
          </HStack>
      <VStack>
      <Text px={5}
           py={3}
           fontSize="lg">{title}</Text>
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
  </VStack>
  </Center>
  )
}
