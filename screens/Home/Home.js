import React from "react";
import { StyleSheet } from "react-native";
import Contest from "./Contest";
import WeatherApi from "./WeatherApi";
import Record from "./Record";
import Interest from "./Interest";
import ScrollContainer from "../../components/ScrollContainer";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
});

export default () => (
  <ScrollContainer>
    <Contest />
    <WeatherApi />
    <Record />
    <Interest />
  </ScrollContainer> 
);