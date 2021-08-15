import {
    VStack,
    Input,
    Button,Box,Text,
    NativeBaseProvider,
    HStack,Icon,Divider,
    Center
  } from 'native-base';
  import React from 'react';
  export default function PostingElement(){
   
   
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
   
    function Sett({label,value}){
      return(
        <HStack  rounded={4}>
          <Center m={0} px={2} w={16} py={2} bg="purple.300" rounded={4}><Text color="white" fontSize="md">{label}</Text></Center>
          <Center  m={0} px={2}  py={1}  rounded={4}><Text fontSize="lg">{value}</Text></Center>
        </HStack>
      )
    }   
    return(
          <VStack space={2}  width="80%" pb={2}>
           <Sett label="종목" value={info.sports}></Sett>
           <Sett label="위치" value={info.location}></Sett>
          <Sett label="작성자" value={info.id}></Sett>
           <Sett label="제목" value={info.title}></Sett> 
           <Box bg="gray.50"  h={32} rounded={16} p={2}>
             <Text fontSize="lg" p={2}>{info.contents}</Text>
           </Box>
           <Center my={2}ml={20}>{`${info.date} 작성`}</Center>
          </VStack>
    )
  }
  