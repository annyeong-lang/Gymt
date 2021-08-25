//날씨 정보
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Border from "./Border";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from 'expo-font';

const Container = styled.View`
  padding: 0 20px;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;

const Weather_container = styled.View`
  padding: 10px 0px;  
  padding-bottom: 20px;
  margin: 0 20px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//추가 코드

const weatherOptions = {
  Thunderstorm: {
      iconName: "weather-lightning-rainy",
      gradient: ["#23074d", "#cc5333"],
      color: "white",
      title: "비 많이 내림",
      comment: "오늘은 비가 많이 내리네요!" + "\n" + "오늘은 실외 운동은 삼가는 게 좋겠어요."
  },
  Rain: {
      iconName: "weather-rainy",
      gradient: ["#191654", "#43C6AC"],
      color: "white",
      title: "비",
      comment: "오늘은 비가 내리네요!" + "\n" + "오늘은 실내 운동은 어떨까요?"
  },
  Snow: {
      iconName: "weather-snowy",
      gradient: ["#CFDEF3", "#E0EAFC"],
      color: "white",
      title: "눈",
      comment: "오늘은 눈이 내리네요!" + "\n" + "오늘은 실내 운동은 어떨까요?"
  },
  Clear: {
      iconName: "weather-sunny",
      gradient: ["#fc4a1a", "#f7b733"],
      color: "white",
      title: "맑음",
      comment: "오늘은 바깥이 맑네요!" + "\n" + "오늘은 실외 운동은 어떨까요?"
  },
  Clouds: {
      iconName: "weather-cloudy",
      gradient: ["#7F7FD5", "#86A8E7", "#91EAE4"],
      color: "white",
      title: "흐림",
      comment: "오늘은 날이 흐려요~" + "\n" + "실내 운동을 추천해요!"
  },
  Mist: {
      iconName: "weather-fog",
      gradient: ["#403B4A", "#E7E9BB"],
      color: "white",
      title: "안개",
      comment: "오늘은 안개가 꼈어요~"

  }
};

export default function Weather ({ temp, condition, humidity }) {
  const [loaded] = useFonts({
    SCDream: require('../../assets/fonts/SCDream3.otf'),
  });
  if (!loaded) {
    return null;
  }
  condition = 'Clear'; // 혹시 몰라서 시연할 때 오류날까봐 추가.
  return(
  <>
    <Container>
      <MaterialCommunityIcons name="weather-sunny" size={24} color="orange" />
        <Text> </Text>
        <Text style={{fontSize:16, fontWeight:'600', fontFamily:'SCDream'}}>오늘의 날씨</Text>
    </Container>
    <Weather_container>
      <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}
      >
        <View style={{width:'30%', paddingLeft: 20}}>
          <MaterialCommunityIcons
              size={80}
              name={weatherOptions[condition].iconName}
              color={weatherOptions[condition].color}
          />
        </View>
        <View style={styles.weatherText}>
          <Text style={styles.temp}>{temp}°</Text>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.humidity}>습도: {humidity}</Text>
        </View>
        <View style={styles.weatherMessage}>
          <Text style={{fontWeight: '900', fontFamily:'SCDream'}}>{weatherOptions[condition].comment}</Text>
        </View>
      </LinearGradient>
    </Weather_container>
    <Border/>
  </>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    borderRadius: 10
  },
  //온도 날씨 습도
  temp: {
    fontSize: 18,
    fontFamily:'SCDream',
    fontWeight: "800",
    color: 'white'
  },
  title: {
    fontSize: 12,
    marginRight: 5,
    fontFamily:'SCDream',
    fontWeight: "600",
    color: 'white'
  },
  humidity: {
    fontSize: 12,
    marginRight: 5,
    fontFamily:'SCDream',
    fontWeight: "600",
    color: 'white'
  },
  //날씨 코멘트
  weatherText:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '20%',
  },
  weatherMessage: {
    width: '50%',
    height: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    padding: 10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    borderWidth: 2,
    backgroundColor: 'white'
  }
});