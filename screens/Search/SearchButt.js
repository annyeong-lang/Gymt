import React from "react";
import { Dimensions, StyleSheet, Text, View, Button,TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Title from "../../components/Title";
import Icon from 'react-native-vector-icons/FontAwesome';
import { BorderlessButton } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';
import SearchResult from './SearchResult'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useNavigation } from "@react-navigation/native";


export default function SearchButt(){
  const navigation = useNavigation();
  // const goToResult = () =>
  //   navigation.navigate("SearchResult");
  // function goToResult(e) {
  //   window.location.replace("./SearchResult");
  // }

    return(
      <Router>
        <View style= {styles.container}>
            <Text style={styles.title}>
            </Text>
        {/* <Link to="./SearchResult"> */}
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('SearchResult')}>
        <Link to="./SearchResult" >체육관 검색</Link>
        </TouchableOpacity>
        {/* </Link> */}
        </View>
        </Router>
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
    },
    buttonStyle: {
        minWidth: 200,
        marginBottom: 5,
        height: 40,
        textAlign: 'center',
        dlsplay: 'flex',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "#f3f3f3",
        borderRadius: 10
      },
  });