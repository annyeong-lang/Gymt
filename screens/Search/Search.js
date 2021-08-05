import React from "react";
import { Text } from "react-native";
import Athlete from "./Athlete";
import Location from "./Location";
import SearchButt from "./SearchButt";
import SearchResult from "./SearchResult";
import ScrollContainer from "../../components/ScrollContainer";

export default () => (
  <ScrollContainer>
    <Athlete></Athlete>
    <Location></Location>
    <SearchButt></SearchButt>
    {/* <SearchResult></SearchResult> */}
  </ScrollContainer>
);