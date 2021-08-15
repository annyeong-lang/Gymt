import React, { useState } from "react";
import { TouchableOpacity, View} from "react-native";
import styled from "styled-components/native";
import Title from "../../components/Title";
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

// const { width: WIDTH } = Dimensions.get("window");

const TextBox = styled.Text`
    display: flex;
    align-items: center;
`;
const Text = styled.Text`
    margin-left: 5px;
    font-size: 13px;
    font-Family: 'SCDream';
`;

const SemiTitle = styled.Text`
    font-weight: 600;
    margin-bottom: 5px;
`;
const Container = styled.View`
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
`;

const BG = styled.Image`
  margin: 0px 20px;  
  margin-top: 15px;
  border-radius: 10px;
  width: width;
  height: 220px;
  margin-bottom: 10px;
`;

const Result_content = styled.View`
    padding: 0 20px;
    margin-bottom: 20px;
`;



export default function SearchResult(){
  const [color, setColor] = useState("false");
  // const goBack= () =>{
  //   history.goBack();
  // };
    //font
  const [loaded] = useFonts({
    SCDream: require('../../assets/fonts/SCDream3.otf'),
  });
  if (!loaded) {
    return null;
  }
  return(
    <View>
      {/* <Container>
      <Button onPress={() => navigation.navigate("Search")} title="다시 검색">
      <Button onClick={goBack} title="다시 검색">
        </Button>
      </Container> */}
      <Container>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <AntDesign name="rightcircle" size={20} color="rgb(236, 159, 87)" />
          <Title title={"체육관 결과"} />
        </View>
        <TouchableOpacity onPress={()=>setColor(!color)}>
          {color?
            <AntDesign name="staro" size={24} color="rgb(255, 194, 81)" /> :
            <AntDesign name="star" size={24} color="rgb(255, 194, 81)" />}
        </TouchableOpacity>
      </Container>
      <BG source={'https://www.phsisul.org/File/Download/a13a0a4d7fe11880a27a3cee83f239fd'} />
      <Result_content>
        <SemiTitle>경상북도 포항시 오천체육문화타운</SemiTitle>
        <TextBox><FontAwesome name="map-marker" size={18} color="black" /><Text>경북 포항시 남구 냉천로 580</Text></TextBox>
        <TextBox><FontAwesome name="phone" size={18} color="black" /><Text>054-280-9525</Text></TextBox>
        <TextBox><AntDesign name="clockcircle" size={15} color="black" /><Text>07:00 ~ 23:00</Text></TextBox>
        <TextBox><Feather name="check-square" size={15} color="black" /><Text>배드민턴, 탁구, 농구, 축구, 풋살</Text></TextBox>
        <TextBox><FontAwesome name="won" size={15} color="black" /><Text>부분 유료</Text></TextBox>
      </Result_content>
    </View>
  );
    
  };