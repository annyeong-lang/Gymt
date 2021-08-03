import React from "react";
import { Text, StyleSheet, View } from "react-native";
import styled from "styled-components/native";

const Weather_container = styled.View`
  padding: 10px 0px;  
  padding-bottom: 20px;
  <!--background-color: rgb(240, 240, 240);-->
  margin: 0 20px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loading() {
  return (
    <Weather_container>
      <View style={styles.container}>
      <Text style={{fontSize:15, margin: 30}}>Loading...</Text>
      </View>
    </Weather_container>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 190,
    height: 190,
    borderRadius: '50%',
    backgroundColor: 'rgb(240, 240, 240)'
  }
});