import React from "react";
import { Dimensions, StyleSheet, Text, View, Button } from "react-native";
import styled from "styled-components/native";
import Title from "../../components/Title";
import Icon from 'react-native-vector-icons/FontAwesome';
import { BorderlessButton } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';

// const { width: WIDTH } = Dimensions.get("window");
// const TextBox = styled.Text`
//     display: flex;
//     align-items: center;
// `;

// const Container = styled.View`
//   padding: 0 20px;
//   align-items: center;
//   flex-direction: row;
//   margin-top: 20px;
// `;

// const Athlete_button = styled.View`
//     padding: 0 20px;
//     margin-bottom: 20px;
// `;

// export default () => (
//     <div>
//       <Container>
//         <MaterialIcons name="sports" size={24} color="black" />
//         <Title title={"종목별 체육관 찾기"} />
//       </Container>
//       <Button title="축구" color="#ffffff" font-color="#000000"/>
//     </div>
//   );

//   const styles = StyleSheet.create({
//     buttonStyle: {
//         minWidth: 200,
//         marginBottom: 5,
//         height: 40,
//         textAlign: 'center',
//         dlsplay: 'flex',
//         justifyContent: 'center',
//         borderWidth: 2,
//         borderColor: "black",
//         backgroundColor: "white",
//         borderRadius: 10
//       },
// });

function Separator(){
    return <View style={styles.separator} />;
}
// const Athlete = () =>(
//     <View>
//         <Text>
//         <MaterialIcons name="sports" size={24} color="black" />
//         <Text>종목별 체육관 찾기</Text>
//         </Text>
//         <Button title="축구" color="#f2c2c2c"/>
//     </View>
// );
export default function App(){
    return(
        <View style= {styles.container}>
            <Text>
            <MaterialIcons name="sports" size={24} color="black" />
            <Text>종목별 체육관 찾기</Text>
            </Text>
        <Button title="축구" color="#f2c2c2c"/>
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

// export default Athlete;