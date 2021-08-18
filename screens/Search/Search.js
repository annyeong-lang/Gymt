// import React from "react";
// import { ScrollView } from "react-native";
// import Athlete from "./Athlete";
// import Location from "./Location";
// import SearchButt from "./SearchButt";
// // import SearchResult from "../SearchResult/SearchResult";

// export default () => (
//   <ScrollView showsHorizontalScrollIndicator={false} >
//     <Athlete></Athlete>
//     <Location></Location>
//     <SearchButt></SearchButt>
//   </ScrollView>
// );

import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, Button } from "react-native";
import styled from "styled-components/native";
import { flex, fontWeight, marginTop } from "styled-system";
import { useNavigation } from "@react-navigation/native";

const Icon = styled.Image`
  width: 40px;
  height: 40px;
  margin: 5px
`;
// const Button1 = styled.Button`
//   width: 60,
//   height: 70,
//   border-radius : 5
//   `
// const View = styled.View`
//   flex: 1,
//   height:100,
//   justifyContent: 'center,
//   alignItems:'center'
// `
// const Text= styled.Text`
//   font-size : 15,
//   font-weight: bold
// `

const Container = styled.View`
  width: 100%;
  height: 100%;
  left-margin: 30px;
  backgroundColor: '#ffffff';
  margin-top: 30;
  
`;

const Button2 = (props) => {
  return (
    <TouchableOpacity style={styles.buttonStyle2}>
          <Text style={styles.buttonText}>{props.name}</Text>
    </TouchableOpacity>
  )
}

export default function Search(){
  const navigation = useNavigation();
    return (
      <Container>
        <View style={styles.group}>
          <Text style={styles.title}>종목별 체육관 찾기</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Icon source={require("../../image/soccer.png")}></Icon>
              <Text style={styles.buttonText}>축구</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
              <Icon source={require("../../image/basketball.png")}></Icon>
              <Text style={styles.buttonText}>농구</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
              <Icon source={require("../../image/baseball.png")}></Icon>
              <Text style={styles.buttonText}>야구</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
              <Icon source={require("../../image/volleyball.png")}></Icon>
              <Text style={styles.buttonText}>배구</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
              <Icon source={require("../../image/ping-pong.png")}></Icon>
              <Text style={styles.buttonText}>탁구</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.group}>
          <Text style={styles.title}>위치별 체육관 찾기</Text>
          <View style={styles.row1}>
            <Button2 name="구미시"></Button2>
            <Button2 name="포항시"></Button2>
            <Button2 name="경주시"></Button2>
          </View>
          <View style={styles.row}>
            <Button2 name="김천시"></Button2>
            <Button2 name="안동시"></Button2>
            <Button2 name="영주시"></Button2>
            <Button2 name="영천시"></Button2>
            <Button2 name="경산시"></Button2>
          </View>
          <View style={styles.row}>
            <Button2 name="칠곡군"></Button2>
            <Button2 name="문경시"></Button2>
            <Button2 name="상주시"></Button2>
            <Button2 name="군위군"></Button2>
            <Button2 name="의성군"></Button2>
          </View>
          <View style={styles.row}>
            <Button2 name="청송군"></Button2>
            <Button2 name="영양군"></Button2>
            <Button2 name="영덕군"></Button2>
            <Button2 name="청도군"></Button2>
            <Button2 name="고령군"></Button2>
          </View>
          <View style={styles.row}>
            <Button2 name="성주군"></Button2>
            <Button2 name="예천군"></Button2>
            <Button2 name="봉화군"></Button2>
            <Button2 name="울진군"></Button2>
            <Button2 name="울릉군"></Button2>
          </View>
        </View>

        <View style={styles.row2}>
          <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('SearchResult')}>
            <Text style={styles.buttonText2}>체육관 검색</Text>
          </TouchableOpacity>
        </View>

      </Container>
    );
};

  const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: "bold",
      fontFamily:'SCDream',
    },
    row: {
      flexDirection: "row",
      // height : 100,
      justifyContent: "flex",
      alignItems: "center",
    },
    row1: {
      flexDirection: "row",
      // height : 100,
      marginTop: 10,
      justifyContent: "flex",
      alignItems: "end"
    },
    row2: {
      flexDirection: "row",
      // height : 100,
      justifyContent: "center",
      alignItems: "end",
      // alignContent:"center",
      // marginTop: 30,
      marginTop: 250
      
    },
    group: {
      height: 110,
      margin: 30
    },
    buttonStyle: {
      width: 80,
      height: 90,
      margin: 3,
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1.5,
      borderColor: "#aaaaaa",
      backgroundColor: "#ffffff",
      borderRadius: 5
    },
    buttonStyle2: {
      width: 90,
      height: 50,
      margin: 2,
      // marginTop: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1.5,
      borderColor: "#aaaaaa",
      backgroundColor: "#ffffff",
      // borderRadius: 5
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "bold",
      fontFamily:'SCDream'
    },
    button3: {
      width: 170,
      height: 60,
      borderRadius: 2,
      borderColor: "rgba(12, 144, 125, 1)",
      // display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "white",
      borderWidth: 3
      // marginLeft: '50%'
    },
    buttonText2: {
      fontSize: 22,
      fontWeight: "bold",
      fontFamily:'SCDream',
    }
  })