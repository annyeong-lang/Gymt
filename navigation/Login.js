import React, { useState } from "react";
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  padding: 0 20px;
  background-color: rgba(12, 144, 125, 1);
  width: 100%;
  dislpay: flex;
  flex-direction: column;
  align-items: center
  height: 100%;
`;

const BG = styled.Image`
  width: 190px; 
  height: 150px;
`;


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const goToHome = () =>
    navigation.navigate("Tab");

  return (
    <Container>
      <View style={styles.container}>
        <BG source={require('../image/임시로고.png')}></BG>
        <View style={styles.form}>
            <View style={styles.formElement}>
                <TextInput
                value={username}
                onChangeText={setUsername}
                style={styles.formInput}
                placeholder="Email address"
                autoCapitalize="none"
                autoCorrect={false}
                />
            </View>
            <View style={styles.formElement}>
                <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                style={styles.formInput}
                autoCapitalize="Password"
                autoCorrect={false}
                secureTextEntry={true}
                />
            </View>
        </View>
        <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{color:'white'}} onPress={goToHome}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{color:'white'}} onPress={goToHome}>회원가입</Text>
        </TouchableOpacity>
        
        <View style={styles.find}>
            <TouchableOpacity>
                <Text>Find Account</Text>
            </TouchableOpacity>
            <Text style={{marginLeft:3, marginRight: 3}}> | </Text>
            <TouchableOpacity>
                <Text>Find Password</Text>
            </TouchableOpacity>
        </View>

        </View>
    </Container>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    form: {
      marginBottom: 10,
      marginTop: 30
    }, 
    title: {
      fontSize: 30
    },
    formElement: {
      marginBottom: 3
    },
    formInput: {
      height: 40,
      minWidth: 200,
      borderWidth: 2,
      borderColor: "black",
      backgroundColor:'white',
      borderRadius: 10,
      padding: 8
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
      backgroundColor: "rgb(13, 98, 122)",
      borderRadius: 10
    },
    find: {
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    }
});
