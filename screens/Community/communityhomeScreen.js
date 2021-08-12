import React ,{ useState } from "react"
import SearchBar from "../../components/community/searchBar"
import Summary from "./summary"
import {NativeBaseProvider,Center,ScrollView,Button,Fab, Icon, Box} from "native-base"
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons"

export default function CommunityHomeScreen({navigation}){
  const [word,setWord]=useState("");
  const [list,setList]=useState(Plists);

  const filtering = (e)=>{
    const filtered = Plists.filter((cur)=>{return cur.sports.includes(e)||cur.location.includes(e)})
    setList(filtered)
    setWord(e)
  }

  const touch=()=>{
    return(navigation.navigate("wh"));
  }
  
  const go=()=>{
    return(navigation.navigate("w"))
  }

  return(
     <NativeBaseProvider>
     <Center mt={10} width="100%" px={4}>
     <SearchBar word={word}  handle={filtering} />
    </Center>
    <ScrollView px={4}>
        {
          list.map((cur)=>{
            return(
              <TouchableOpacity onPress={touch}>
              <Summary 
                       sports={cur.sports}
                       id={cur.id}
                       title={cur.title}
                       date={cur.date}
                       comments={cur.comments}
                       location={cur.location}
                       looks={cur.looks}
                       />
                </TouchableOpacity>
            )
          })
        }
    </ScrollView>
    <Box position="relative" h={100} w="100%">
      <Fab
        position="absolute"
        size="sm"
        onPress={go}
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
      />
    </Box>
     </NativeBaseProvider>
  )
}

const Plists=[
  {
  sports :"배드민턴",
   location:"안동시",
    id:"hello",
    title: "농구 같이 하실 분!!",
    comments: "1",
    date: "2021 07 24",
    looks: "4",
    contents: "저녁에 농구 같이 하실 분 구해요"
  },
  {
    sports:"골프",
    location:"포항시",
    id:"hope",
    title:"골프 같이 배워요",
    comments: "1",
    date: "2021 04 25",
    looks: "0",
    contents: "골프 같이 배우실 분 찾아요"
  },
  {
    sports:"축구",
    location:"안동시",
    id:"soccer",
    title:"축구 같이해요",
    comments:"4",
    date: "2021 08 02",
    looks: "7",
    contents: "일요일 아침 조기축구 동호회 회원 모집중"
  },
  {
    sports:"배드민턴",
    location:"포항시",
    id:"happy",
    title:"배드민턴 같이 쳐요",
    comments:"2",
    date :"2021 05 02",
    looks: "7",
    contents: "같이 배드민턴 치고 싶어요 "
  },
  {
    sports:"농구",
    location:"포항시",
    id:"yoga",
    title:"아침에 농구 하실래요?",
    comments:"2",
    date:"2021 03 24" ,
    looks: "3",
    contents: "농구를 하면서 건강해집시다"
  },
  {
    sports:"배드민턴",
    location:"안동시",
    id:"hot",
    title: "배드민턴 좋아요",
    comments:"1",
    date: "2021 05 25",
    looks:"3" ,
    contents: "배드민턴 같이 하실 분 찾아요"
  }
]