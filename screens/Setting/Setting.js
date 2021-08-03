import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";


const Container = styled.View`
  padding: 0 20px;
  flex-direction: row;
  margin-top: 20px;
`;



export default () => (
  <Container>
    <Text>Setting</Text>
  </Container>
);