import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Athlete from "./Athlete";
import Location from "./Location";
import SearchButt from "./SearchButt";
import ScrollContainer from "../../components/ScrollContainer";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
});

export default () => (
  <ScrollContainer>
    <Text>체육관 찾기</Text>
    <Athlete></Athlete>
    <Location></Location>
    <SearchButt></SearchButt>
  </ScrollContainer>
);