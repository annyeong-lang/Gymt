import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons, Entypo, AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Width = Dimensions.get('window').width;

const Title = styled.Text`
  font-weight: 600;
  margin: 10px 10px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
`;


const BG = styled.Image`
  width: ${Width / 3};   
  height: ${Width / 3};
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Edit = styled.View`
  background-color: white;
  padding: 20px 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const MyPost= styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
`;
const PostBox= styled.View`
  border: 1px solid grey;
`;

const PostColumn= styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 10px;
  border: 1px solid grey;
`;

const SemiTitle = styled.Text`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 600;
  margin: 10px;
  font-size: 15px;
`;

export default function Settings() {
  const [selectedCity, setSelectedCity] = useState();
  const [selectedDo, setSelectedDo] = useState();
  const navigation = useNavigation();

  //edit
  const [EditCondition, setEditCondition]= useState(true);
  return (
      <View style={styles.container}>
      <View>
        <Title>
          <Text style={{fontSize: 30}}>내 정보</Text>
          <TouchableOpacity onPress={()=>{setEditCondition(!EditCondition)}}>
            <Text style={styles.edit}>Edit<Feather style={styles.icon} name="edit" size={14} color="black" /></Text>
          </TouchableOpacity>
        </Title>
        <Edit>
          <View style={styles.ImageName}>
            <BG source={{uri:'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg'}}></BG>
            <Text style={{fontSize: 15, fontWeight: 600, marginBottom:10}}>USER NICKNAME</Text>
          </View>
          <View style={styles.formElement}>
          <SemiTitle><Entypo name="location-pin" size={24} color="rgb(120, 32, 255)" />위치</SemiTitle>
            <View style={styles.locationPicker} pointerEvents={EditCondition ? 'none' : 'auto'}>
              <Picker
                style={EditCondition? styles.focusedPicker : styles.picker}
                selectedValue={selectedCity}
                onValueChange={(itemValue) =>
                  setSelectedCity(itemValue)
                }>
                <Picker.Item label="경주시" value="경주시" />
                <Picker.Item label="포항시" value="포항시" />
                <Picker.Item label="구미시" value="구미시" />
              </Picker>
              <Picker
                style={EditCondition? styles.focusedPicker : styles.picker}
                selectedValue={selectedDo}
                onValueChange={(itemValue) =>
                  setSelectedDo(itemValue)
                }>
                <Picker.Item label="광평동" value="광평동" />
                <Picker.Item label="공단동" value="공단동" />
                <Picker.Item label="구포동" value="구포동" />
              </Picker>
            </View>
          </View>
          {/*내가 쓴 글 */}
          <MyPost>
          <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
            <SemiTitle><MaterialCommunityIcons name="post" size={22} color="rgb(255,88,31)" /> 내가 쓴 글</SemiTitle>
            <Text style={{fontWeight: 600, fontSize:14}}> 더보기 <AntDesign name="rightcircle" size={14} color="black" /> </Text>
          </View>
          <PostBox>
            <PostColumn>
              <Text style={styles.numColumn}>번호</Text>
              <Text>제목</Text>
            </PostColumn>
            <PostColumn>
              <Text style={styles.numColumn}>1</Text>
              <Text>농구 같이 하실 분!!</Text>
            </PostColumn>
          </PostBox>
        </MyPost>
        </Edit>
      </View>
      {/*비밀번호 재설정과 로그아웃 */}
      <View style={styles.last}>
        <TouchableOpacity><Text style={{marginBottom: 15, fontWeight: '600', color:'rgb(13, 98, 122)'}}>비밀번호 재설정하기</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('Login')}}><Text style={{fontWeight: '600', color:'rgb(13, 98, 122)'}}>로그아웃</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%"
  },
  edit:{
    backgroundColor: "rgb(236, 159, 87)",
    borderRadius: 25,
    padding: 3,
    marginLeft: 8,
    borderWidth: 2,
  },
  numColumn: {
    width: '20%'
  },
  ImageName: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formElement: {
    paddingLeft: 20,
    paddingRight: 20
  },
  formInput: {
    marginTop: 5,
    height: 35,
    minWidth: 200,
    borderRadius:10,
    borderWidth: 1,
    borderColor: "grey",
    padding: 13
  },
  focusedFormInput: {
    marginTop: 5,
    height: 35,
    minWidth: 200,
    borderRadius:10,
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "rgba(1, 1, 1, 0.05)",
    padding: 13
  },
  locationPicker: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  picker: {
    padding: 8,
    borderRadius: 10,
    width: "49%"
  },
  focusedPicker: {
    padding: 8,
    backgroundColor: "rgba(1, 1, 1, 0.05)",
    borderRadius: 10,
    width: "49%"
  },
  last:{
    backgroundColor: 'rgba(0,0,0,0)',
    height:'20%',
    dlsplay:'flex',
    flexDirection: 'column',
    alignItems:'center',
    paddingTop:25,
    paddingBottom:50
  }
});
