import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';

const styles = StyleSheet.create({
  title:{
    marginLeft: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily:'SCDream'
  }
});

export default function Title ({ title }) {
  const [loaded] = useFonts({
    SCDream: require('../assets/fonts/SCDream3.otf'),
  });
  if (!loaded) {
    return null;
  }
  return(
    <Text style={styles.title}>{title}</Text>
  );
}