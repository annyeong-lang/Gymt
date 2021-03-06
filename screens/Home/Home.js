import React from "react";
import Contest from "./Contest";
import WeatherApi from "./WeatherApi";
import Record from "./Record";
import Interest from "./Interest";
import { ScrollView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white'
  }
});
export default () => (
  <ScrollView style={styles.container} showsHorizontalScrollIndicator={false} >
      <Contest />
      <WeatherApi />
      <Record />
      <Interest />
  </ScrollView> 
);

