import React from "react";
import styled from "styled-components/native";

const Text = styled.Text`
  margin-left: 5px;
  color: black;
  font-weight: bold;
  font-size: 16px;
  font-Family:'SCDream';
`;

const Title = ({ title }) => <Text>{title}</Text>;

export default Title;