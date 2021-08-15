import React from "react";
import { Text, StyleSheet, View } from "react-native";
import styled from "styled-components/native";

const Weather_container = styled.View`
  padding: 10px 0px;  
  padding-bottom: 20px;
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
    width: '100%',
    height: 100,
    borderRadius: 10,
    backgroundColor: 'rgb(240, 240, 240)'
  }
});