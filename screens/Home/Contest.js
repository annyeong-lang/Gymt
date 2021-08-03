import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, ScrollView, Dimensions } from "react-native";
import Title from "../../components/Title";
import Slide from "../../components/Home/Slide";
import { FontAwesome } from '@expo/vector-icons';
import Border from "../../components/Home/Border"

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  margin: 10px 0px;
  padding: 0 20px;
  margin-bottom: 30px;
`;


const Container = styled.View`
  padding: 0 20px;
  flex-direction: row;
  margin-top: 20px;
`;

const nowContest = [
  {
    url : 'http://dangdangtrekking.com/',
    imageTitle : '댕댕트레킹_2021_9월_11일.jpg'
  },
  {
    url : 'http://bbangrun.com/',
    imageTitle : '빵빵런_2021_9월1일.jpg'
  },
  {
    url : 'http://www.2021pjsports.kr/sports-all-festival',
    imageTitle: '경기도생활체육대축전_2021_9월10일.jpg'
  }
];

export default ({ loading }) => (
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
          <FontAwesome name="flag" size={24} color="green" />
          <Title title={"대회 정보"} />
        </Container>
        <SliderContainer>
          <Swiper controlsProps={{ dotsTouchable: true, prevPos: false, nextPos: false}} loop timeout={5} >
            {nowContest.map(contest => (
              <Slide
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