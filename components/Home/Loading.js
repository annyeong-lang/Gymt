import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Weather_container = styled.View`
  padding: 10px 0px;  
  padding-right: 40px;
  background-color: rgb(240, 240, 240);
  margin: 0 20px;
  margin-top: 10px;
  margin-bottom: 30px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
`;

export default function Loading() {
  return (
    <Weather_container>
      <Text style={{fontSize:20, margin: 30}}>Loading...</Text>
    </Weather_container>
  );
}
