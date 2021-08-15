import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { TouchableOpacity, ActivityIndicator, ScrollView, Dimensions, Text } from "react-native";
import Slide from "../../components/Home/Slide";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Border from "../../components/Home/Border"
import { useNavigation } from "@react-navigation/native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  margin: 10px 0px;
  padding: 0 20px;
  margin-bottom: 30px;
`;

const Title = styled.Text`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
  color: black;
  font-weight: bold;
  font-size: 16px;
`;
const Container = styled.View`
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

const nowContest = [
  {
    id: 1,
    url : 'http://dangdangtrekking.com/',
    imageTitle : require('../../image/댕댕트레킹_2021_9월_11일.jpg')
  },
  {
    id: 2,
    url : 'http://bbangrun.com/',
    imageTitle : require('../../image/빵빵런_2021_9월1일.jpg')
  },
  {
    id: 3,
    url : 'http://www.2021pjsports.kr/sports-all-festival',
    imageTitle: require('../../image/경기도생활체육대축전_2021_9월10일.jpg')
  }
];

export default function Contest ({ loading }) {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: loading ? "center" : "flex-start"
      }}
    >
      {loading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <>
          <Container>
            <Title><FontAwesome name="flag" size={24} color="green" />  대회 정보</Title>
            <TouchableOpacity onPress={() => {navigation.navigate('MoreContest')}}>
              <Text style={{fontWeight: '600', fontSize:14}}> 더 많은 대회 보기 <AntDesign name="rightcircle" size={14} color="black" /> </Text>
            </TouchableOpacity>
          </Container>
          <SliderContainer>
            <Swiper controlsProps={{ dotsTouchable: true, prevPos: false, nextPos: false}} loop timeout={5} >
              {nowContest.map(contest => (
                <Slide
                    key={contest.id}
                    backgroundImage = {contest.imageTitle}
                    url = {contest.url}
                />
              ))}
            </Swiper>
          </SliderContainer>
          <Border/>
        </>
      )}
    </ScrollView>
  );
}