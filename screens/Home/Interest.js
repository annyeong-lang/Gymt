//날씨 정보
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import Title from "../../components/Title";
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';

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

const Interested_content = styled.View`
    padding: 0 20px;
    margin-bottom: 20px;
`;

const styles = StyleSheet.create({
  textList:{
    marginLeft: 5
  }
});

export default () => (
    <View>
      <Container>
        <AntDesign name="star" size={20} color="rgb(255, 194, 81)" />
        <Title title={"관심 체육관"} />
      </Container>
      <BG source={require('../../image/체육관.jpg')} />
      <Interested_content>
        <SemiTitle>경상북도 포항시 오천체육문화타운</SemiTitle>
        <TextBox><FontAwesome name="map-marker" size={18} color="black" /> <Text style={styles.textList}>경북 포항시 남구 냉천로 580</Text></TextBox>
        <TextBox><FontAwesome name="phone" size={18} color="black" /> <Text style={styles.textList}>054-280-9525</Text></TextBox>
        <TextBox><AntDesign name="clockcircle" size={15} color="black" /> <Text style={styles.textList}>07:00 ~ 23:00</Text></TextBox>
        <TextBox><Feather name="check-square" size={15} color="black" /> <Text style={styles.textList}>배드민턴, 탁구, 농구, 축구, 풋살</Text></TextBox>
        <TextBox><FontAwesome name="won" size={15} color="black" /> <Text style={styles.textList}>부분 유료</Text></TextBox>
      </Interested_content>
    </View>
  );