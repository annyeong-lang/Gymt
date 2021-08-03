//날씨 정보
import React from "react";
import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import Title from "../Title";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Border from "./Border";
import { LinearGradient } from "expo-linear-gradient";

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
      title: "비 많이 내림"
  },
  Rain: {
      iconName: "weather-rainy",
      gradient: ["#191654", "#43C6AC"],
      color: "white",
      title: "비"
  },
  Snow: {
      iconName: "weather-snowy",
      gradient: ["#CFDEF3", "#E0EAFC"],
      color: "white",
      title: "눈"
  },
  Clear: {
      iconName: "weather-sunny",
      gradient: ["#fc4a1a", "#f7b733"],
      color: "white",
      title: "맑음"
  },
  Clouds: {
      iconName: "weather-cloudy",
      gradient: ["#7F7FD5", "#86A8E7", "#91EAE4"],
      color: "white",
      title: "흐림"
  },
  Mist: {
      iconName: "weather-fog",
      gradient: ["#403B4A", "#E7E9BB"],
      color: "white",
      title: "안개"
  }
};

export default ({ temp, condition, humidity }) => (
  <>
    <Container>
      <MaterialCommunityIcons name="weather-sunny" size={24} color="orange" />
      <Title title={"오늘의 날씨"} />
    </Container>
    <Weather_container>
      <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}
      >
        <MaterialCommunityIcons
            size={90}
            name={weatherOptions[condition].iconName}
            color={weatherOptions[condition].color}
        />
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.humidity}>습도: {humidity}</Text>
      </LinearGradient>
    </Weather_container>
    <Border/>
  </>
);


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 190,
    height: 190,
    borderRadius: '50%'
  },
  temp: {
    fontSize: 20,
    fontWeight: 800,
    color: 'white'
  },
  title: {
    marginRight: 5,
    fontWeight: 600,
    color: 'white'
  },
  humidity: {
    marginRight: 5,
    fontWeight: 600,
    marginBottom: 20,
    color: 'white'
  }
});