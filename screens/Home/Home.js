import React from "react";
import Contest from "./Contest";
import WeatherApi from "./WeatherApi";
import Record from "./Record";
import Interest from "./Interest";
import ScrollContainer from "../../components/ScrollContainer";


export default () => (
  <ScrollContainer>
    <Contest />
    <WeatherApi />
    <Record />
    <Interest />
  </ScrollContainer> 
);