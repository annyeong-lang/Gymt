//날씨 정보
import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Title from "../../components/Title";
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';

const { width: WIDTH } = Dimensions.get("window");

const TextBox = styled.Text`
    display: flex;
    align-items: center;
`;
const Text = styled.Text`
    margin-left: 5px;
`;

const SemiTitle = styled.Text`
    font-weight: 600;
    margin-bottom: 5px;
`;
const Container = styled.View`
  padding: 0 20px;
  align-items: center;
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

const Interested_content = styled.View`
    padding: 0 20px;
    margin-bottom: 20px;
`;

export default () => (
    <div>
      <Container>
        <AntDesign name="star" size={20} color="rgb(255, 194, 81)" />
        <Title title={"관심 체육관"} />
      </Container>
      <BG source={require('../../image/나주시실내체육관.png')} />
      <Interested_content>
        <SemiTitle>전라남도 나주시 실내 체육관</SemiTitle>
        <TextBox><FontAwesome name="map-marker" size={18} color="black" /><Text>전남 나주시 구진포로 519</Text></TextBox>
        <TextBox><FontAwesome name="phone" size={18} color="black" /><Text>016-330-8847</Text></TextBox>
        <TextBox><AntDesign name="clockcircle" size={15} color="black" /><Text>06:00 ~ 22:00</Text></TextBox>
        <TextBox><Feather name="check-square" size={15} color="black" /><Text>배드민턴, 족구, 배구</Text></TextBox>
        <TextBox><FontAwesome name="won" size={15} color="black" /><Text>유료</Text></TextBox>
      </Interested_content>
    </div>
  );