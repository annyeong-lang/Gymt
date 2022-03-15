import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, ScrollView, Text} from "react-native";
import styled from "styled-components/native";
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { db } from "../../config";
import { collection, getDocs } from "../../node_modules/firebase/firestore";

const TextBox = styled.Text`
    display: flex;
    align-items: center;
    font-size: 13px;
    font-Family:'SCDream';
`;

const SemiTitle = styled.Text`
    font-weight: 600;
    margin-bottom: 5px;
    font-Family:'SCDream';
`;

const Container = styled.View`
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
`;

const BG = styled.Image`
  margin: 10px 20px;  
  margin-top: 15px;
  border-radius: 10px;
  width: 90%;
  height: 190px;
`;

const Result_content = styled.View`
    padding: 0 20px;
    margin-bottom: 20px;
`;


const styles = StyleSheet.create({
  textList:{
    marginLeft: 5
  }
});


//firebase
let resultList = [];
async function dbGym (resultList) {
  const querySnapshot = await getDocs(collection(db, "gym"));
  querySnapshot.forEach((doc) => {
    resultList.push({
          image : doc.data().image,
          name : doc.data().name,
          location : doc.data().detail_location,
          phoneNum: doc.data().phone_num,
          time: doc.data().time,
          available : doc.data().available,
          cost : doc.data().cost,

          //그 외 필요
          city : doc.data().city,
    });
  });
}
dbGym(resultList);

function filterGym (kind, location) {
  resultList = resultList.filter((item) => 
  {
    return (item.city == location && item.available.includes(kind));
  });
}

export default function SearchResult(props){
  const [color, setColor] = useState("false");
  const kind = props.route.params.kind;
  const location = props.route.params.location;
  filterGym(kind, location);

  const [loaded] = useFonts({
    SCDream: require('../../assets/fonts/SCDream3.otf'),
  });
  
  if (!loaded) {
    return null;
  }
  return(
    <ScrollView>
      <Container>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <AntDesign name="rightcircle" size={20} color="rgb(236, 159, 87)" />
          <Text style={{fontSize:16, fontWeight:'600', fontFamily:'SCDream'}}> 체육관 결과</Text>
        </View>
        <TouchableOpacity onPress={()=>setColor(!color)}>
          {color?
            <AntDesign name="staro" size={24} color="rgb(255, 194, 81)" /> :
            <AntDesign name="star" size={24} color="rgb(255, 194, 81)" />}
        </TouchableOpacity>
      </Container>
      {resultList.map( function (item) {
        return(
        <><BG source={{uri : item.image}} /><Result_content>
            <SemiTitle>{item.name}</SemiTitle>
            <TextBox><FontAwesome name="map-marker" size={18} color="black" /> <Text style={styles.textList}>{item.location}</Text></TextBox>
            <TextBox><FontAwesome name="phone" size={18} color="black" /> <Text style={styles.textList}>{item.phoneNum}</Text></TextBox>
            <TextBox><AntDesign name="clockcircle" size={15} color="black" /> <Text style={styles.textList}>{item.time}</Text></TextBox>
            <TextBox><Feather name="check-square" size={15} color="black" /> <Text style={styles.textList}>{item.available}</Text></TextBox>
            <TextBox><FontAwesome name="won" size={15} color="black" /> <Text style={styles.textList}>{item.cost}</Text></TextBox>
          </Result_content></>
        )
      })}
      
    </ScrollView>
  );
    
  };