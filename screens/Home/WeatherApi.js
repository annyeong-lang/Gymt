//위치 정보: google geocoding API billing 등록해야해서 일단 보류.
import React from 'react';
import {Alert} from "react-native";
import Loading from "../../components/Home/Loading";
import * as Location from "expo-location"
import axios from "axios";
import Weather from "../../components/Home/Weather";
import styled from "styled-components/native";
import Title from "../../components/Title";
import Border from "../../components/Home/Border";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const API_KEY = "94dea71c10b27b8da09d12bf914ae49c";
const GOOGLE_KEY = "#";
const GEO_CODER = "#";

export default class WeatherApi extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp, humidity },
        weather
      }
    } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );

    /*
    vworld api => localhost로는 막혀서 보류,,
    await axios.get(
      `http://api.vworld.kr/req/address?service=address&request=getAddress&version=2.0&crs=epsg:4326&point=${latitude},${longitude}&format=json&type=both&zipcode=true&simple=false&key=${GEO_CODER}`
    );
    */
    
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
      humidity
    });
  };
  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();

      /*
      await Location.setGoogleApiKey(GOOGLE_KEY);
      const place = await Location.reverseGeocodeAsync({
        latitude, longitude
      }, true)[3];
      */

      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("위치를 찾을 수 없습니다.");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition, humidity } = this.state;
    return isLoading ? (
    <>
      <Container>
        <MaterialCommunityIcons name="weather-sunny" size={24} color="orange" />
        <Title title={"오늘의 날씨"} />      
      </Container>
      <Loading />
      <Border/>
    </>
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} humidity={humidity}/>
    );
  }
}


const Container = styled.View`
  padding: 0 20px;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;
