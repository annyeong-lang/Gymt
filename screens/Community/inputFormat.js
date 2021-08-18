import {
  VStack,
  Input,Center,
  Button,HStack,
  TextArea,Select
} from 'native-base';
import React from 'react';

export default function Inputs ({inputs,onChange,onSubmit}) {
 
 const time=new Date().toLocaleDateString();
  const sp=["골프","배드민턴","농구","축구","야구","배구","수영","핸드볼","야구","탁구","족구"]
  const lo=["포항시","경주시","김천시","안동시","구미시","영주시","영천시"]

  return (
      <Center pt={10} m={0} bg="white">
      <VStack width="80%" space={1}>
      <HStack alignItems="center" space={2} >
        <Center ml={-1} width={10} _text={{color:"#0c907d" ,bold:"true"}}>종목</Center>
        <Select SelectedValue={inputs.sports}
                   width="40%"
                   minWidth={20}
                   placeholder="--"
                   mt={1}
                   onChange={onChange}
                   name="sports" >
          {sp.map((cur)=>(
          <Select.Item label={cur} value={cur} /> ))}
        </Select>
      </HStack>
      <HStack alignItems="center" space={2} >
        <Center ml={-1} pl={-2}width={10} _text={{color:"#0c907d",bold:"true"}}>위치</Center>
        <Select SelectedValue={inputs.location}
                   width="40%"
                   minWidth={20}
                   placeholder="--"
                   onChange={onChange}
                   mt={1}
                   name="location" >
          {lo.map((cur)=>(
          <Select.Item label={cur} value={cur} /> ))}
        </Select>
      </HStack>
      <HStack pl={3}space={3}>
      <Center _text={{color:"#0c907d",bold:"true"}}>id</Center> 
      <Input  
           placeholder="작성자" 
           width="40%"
           ml={2}
           name="id"
           value={inputs.id}         
           onChange={onChange}/>
      </HStack>
      <HStack pl={1} space={2}>
      <Center _text={{color:"#0c907d",bold:"true"}}>제목</Center>
      <Input placeholder="제목" 
             width="85%"
             value={inputs.title}
             name="titleInput"
             onChange={onChange}
            />
      </HStack>
      <TextArea h={48} 
                name="textInput"
                value={inputs.contents}
                onChange={onChange}/>
      <Center>{time}</Center>
      <Button  onPress={onSubmit} bg="#0c907d" _text={{color:"white"}}>작성</Button>
      </VStack>
      </Center>
  )
}