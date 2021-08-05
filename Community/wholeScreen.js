import React,{useState} from "react"
import {Center,Input,Icon,IconButton,Text,HStack,VStack,Box,Divider,NativeBaseProvider} from "native-base"
import { MaterialIcons, Ionicons } from "@expo/vector-icons"
import { FontAwesome } from '@expo/vector-icons';

export default function PostingScreen(){
   const [newComment,setNewComment]=useState("")
    function  AddComment({input})
    {
      return(
        <HStack space={2} px={1} >
            <VStack>
              <Icon size="sm" as={<FontAwesome name="user-circle" size={24} color="black" />}></Icon>
            <Text>user</Text>
            </VStack>
            <Center><Text>{input}</Text></Center>
          </HStack>
      )
    }
     const c=["저도 할래요!"];
   const submit=(newComment)=>{
     c.push(newComment)
   }

  const info={
     sports :"배드민턴",
   location:"안동시",
    id:"hello",
    title: "농구 같이 하실 분!!",
    comments: "1",
    date: "2021 07 24",
    looks: "4",
    contents: "저녁에 농구 같이 하실 분 구해요"
   }

  
  function EachPosting({info,submit})
{

  function Sett({label,value}){
    return(
      <HStack space={2}  rounded={4}>
        <Center px={2}  py={2}><Text fontSize="md">{label}</Text></Center>
        <Center px={2}  py={1} ><Text fontSize="lg">{value}</Text></Center>
      </HStack>
    )
  }
   
  
  return(
     <Center mx={-1} pt={20}>
        <VStack space={1}  width="80%" pb={2}>
         <Sett label="종목" value={info.sports}></Sett>
         <Sett label="위치" value={info.location}></Sett>
         <Box ml={-1}><Sett label="작성자" value={info.id}></Sett></Box>
         <Sett label="제목" value={info.title}></Sett> 
         <Box bg="gray.50"  h={32} rounded={16} p={2}>
           <Text fontSize="lg" p={2}>{info.contents}</Text>
         </Box>
         <Center my={2}ml={20}>{`${info.date} 작성`}</Center>
        </VStack>
        <Divider my={4}  />
        <VStack width="80%">
        <Box rounded={8} p={2} px={4} width="100%" bg="purple.300" ><Text fontSize="xl" color="white">댓글 </Text></Box>
        <VStack rounded={12} bg="gray.50"  space={2} px={1} py={2} width="100%">
        {
          c.map((cur)=>
          {
            if(cur)
            {
              return(<AddComment input={cur} />)
            }
          })
        }
          <Input placeholder="댓글을 입력하세요"
                 mt={1}
                 value={newComment}
                 onChange={(e)=>setNewComment(e.target.value)}
                 InputRightElement={
                   <IconButton variant="solid"  
                              onPress={submit}  
                               icon={
                                 <Icon size="sm" as={<FontAwesome name="send" size={24} />} color="white" />
                               }
                               bg="purple.300" />
                 }
               ></Input>
        </VStack>
        </VStack>
    </Center>
  )
}
   return (
    <NativeBaseProvider>
    <EachPosting info={info} />
    </NativeBaseProvider>
  );
}