import React from "react";
import {  StyleSheet, Text, View, Button } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Athlete(){
    return(
        <View style= {styles.container}>
            <Text style={styles.title}>
            <MaterialIcons name="sports" size={24} color="black" />
            <Text>종목별 체육관 찾기</Text>
            </Text>
        <Button title="축구"/>
        <Button title="농구"/>
        <Button title="배구"/>
        <Button title="탁구"/>
        <Button title="배드민턴"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    buttonSize: {
        margin : 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    }
  });