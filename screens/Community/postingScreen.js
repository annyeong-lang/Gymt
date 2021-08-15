import {
  VStack,
  Input,
  Button,Box,
  NativeBaseProvider,
  Icon,Divider,
  Center
} from 'native-base';
import React ,{useState} from 'react';
import PostingElement from '../../components/community/postingElement';
import { FontAwesome } from '@expo/vector-icons';
import ShowComments from '../../components/community/commentlist';
import { ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';
export default function PostingScreen({navigation})
{
  const onPress=()=>(navigation.navigate("h"))
  const [com,setCom]=useState("");
  const [clist,setClist]=useState(["저요!!"]);

  const onChange=(e)=>{
    setCom(e.target.value)
  }

  const onSubmit=(e)=>{
   setCom(e.target.value)
    const content=com
    setClist((clist)=>{
      return [...clist,com]
    })
  }

  return(
    <NativeBaseProvider>
   <ScrollView>
 <Box pt={6} pl={20} m={0} bg="white">
   <TouchableOpacity onPress={onPress}><Icon as={<Ionicons name="arrow-back-circle-outline" color="black" />} size="lg" ></Icon>
   </TouchableOpacity></Box>
    <Center m={0} pt={10} bg="white">
    <PostingElement />
    <Divider my={4}  />
    <Center width="80%" bg="purple.300" rounded={8} _text={{color:"white",fontSize:"lg"}} h={10}>댓글</Center>
    <VStack p={2} rounded={8} width="80%" bg="white">
    <ShowComments clist={clist} />
     <Input placeholder="댓글을 입력하세요"
            mt={1}
            value={com}
            onChange={onChange}
            InputRightElement={
           <Button
                  onPress={onSubmit} 
                  bg="purple.300">
                      <Icon size="sm" as={<FontAwesome name="send" size={24} />} color="white" />
                    
                </Button>
            }
        ></Input>
        </VStack>
    </Center>
    </ScrollView>
    </NativeBaseProvider>
  )
 
}