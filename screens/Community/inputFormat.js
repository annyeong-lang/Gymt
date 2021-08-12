import {
    VStack,
    Input,Center,
    Button,HStack,
    TextArea
  } from 'native-base';
  import React from 'react';
  import Selects from "../../components/community/selects"
  
   
  export default function Inputs ({sports,location,handleSelect,handle,title,id,submit,contents}) {
   
   const time=new Date().toLocaleDateString();
    const sp=["골프","배드민턴","농구","축구","야구","배구"]
    const lo=["포항시","경주시","김천시","안동시","구미시","영주시"]
  
    return (
        <Center mt={10}>
        <VStack width="80%" space={1}>
        <Selects label="종목" item={sports}  arr={sp} handle={handleSelect} />
        <Selects label="위치" item={location} arr={lo} handle={handleSelect} />
        <HStack pl={3}space={3}>
        <Center>id</Center> 
        <Input  
             placeholder="작성자" 
             width="85%"
             ml={2}
             name="idInput"
             value={id}         
             onChange={handle}/>
        </HStack>
        <HStack pl={1} space={2}>
        <Center>제목</Center>
        <Input placeholder="제목" 
               width="85%"
               value={title}
               name="titleInput"
               onChange={handle}
              />
        </HStack>
        <TextArea h={48} 
                  name="textInput"
                  value={contents}
                  onChange={handle}/>
        <Center>{time}</Center>
        <Button  onPress={submit} bg="purple.300" _text={{color:"white"}}>작성</Button>
        </VStack>
        </Center>
    )
  }