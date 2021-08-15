import React from "react";
import { ScrollView } from "react-native";
import Athlete from "./Athlete";
import Location from "./Location";
import SearchButt from "./SearchButt";
// import SearchResult from "../SearchResult/SearchResult";

export default () => (
  <ScrollView showsHorizontalScrollIndicator={false} >
    <Athlete></Athlete>
    <Location></Location>
    <SearchButt></SearchButt>
  </ScrollView>
);