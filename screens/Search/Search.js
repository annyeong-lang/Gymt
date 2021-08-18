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
import { MaterialIcons } from '@expo/vector-icons';

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
  background-color: rgb(255,255,255);
  padding-top: 15px;
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
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <MaterialIcons name="sports" size={24} color="rgb(236, 159, 87)" />
            <Text style={styles.title}> 종목별 체육관 찾기</Text></View>
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
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <MaterialIcons name="edit-location" size={24} color="rgb(236, 159, 87)" />
            <Text style={styles.title}> 위치별 체육관 찾기</Text>
          </View>
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
      fontSize: 18,
      fontWeight: "400",
      fontFamily:'SCDream'
    },
    row: {
      display: "flex",
      flexDirection: "row",
      // height : 100,
      justifyContent: "space-between",
    },
    row1: {
      flexDirection: "row",
      // height : 100,
      marginTop: 20,
      justifyContent: "center",
      alignItems: "flex-end"
    },
    row2: {
      flexDirection: "row",
      // height : 100,
      justifyContent: "center",
      alignItems: "flex-end",
      // alignContent:"center",
      // marginTop: 30,
      marginTop: 230
      
    },
    group: {
      height: 110,
      marginVertical: 30,
      marginHorizontal: 15
    },
    buttonStyle: {
      width: '19%',
      height: 80,
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
      width: '19%',
      height: 40,
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
      fontSize: 13,
      fontWeight: "400",
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
      fontSize: 18,
      fontWeight: "400",
      fontFamily:'SCDream',
    }
  })