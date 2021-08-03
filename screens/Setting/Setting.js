import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const Width = Dimensions.get('window').width;

const Title = styled.Text`
  font-size: 30px;
  font-weight: 600;
  margin: 10px 10px;
  margin-bottom: 20px;
`;
const Container = styled.View`
  padding: 0 20px;
  padding-top: 20px;
  background-color: white;
  width: 100%;
  height: 100%;
`;
const BG = styled.Image`
  width: ${Width / 2.5};   
  height: ${Width / 2.5};
  border-radius: 50%;
  border: 2px solid black;
  margin-bottom: 20px;
`;

const Edit = styled.View``;
const MyPost= styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const PostBox= styled.View`
  border: 1px solid grey;
`;

const PostColumn= styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px;
  border: 1px solid grey;
`;

export default function Settings() {
  const [password, setPassword] = useState("");
  const [selectedCity, setSelectedCity] = useState();
  const [selectedGun, setSelectedGun] = useState();
  const [selectedDo, setSelectedDo] = useState();
  const [PasswordCondition, setPasswordCondition]= useState(true);
  const [LocationCondition, setLocationCondition]= useState(true);
  return (
    <Container>
      <Edit>
        <View >
          <Title>내 정보</Title>
        </View>
        <View style={styles.settingForm}>
        <BG source={require('../../image/user.png')}></BG>
        <View stlye={styles.formColumn}>
          <View style={styles.form}>
            <Text style={styles.formLabel}>비밀번호 변경
              <TouchableOpacity onPress={()=>{setPasswordCondition(!PasswordCondition)}}>
                <Feather style={styles.icon} name="edit" size={18} color="black" />
              </TouchableOpacity>
            </Text>
            <View pointerEvents={PasswordCondition ? 'none' : 'auto'}>
            <TextInput
              value={password}
              placeholder="********"
              onChangeText={setPassword}
              style={PasswordCondition? styles.focusedFormInput : styles.formInput}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
            />
            </View>
          </View>
          <View style={styles.formElement}>
            <Text style={styles.formLabel}>위치
              <TouchableOpacity onPress={()=>{setLocationCondition(!LocationCondition)}}>
                <Feather style={styles.icon} name="edit" size={18} color="black" />
              </TouchableOpacity>
            </Text>
            <View pointerEvents={LocationCondition ? 'none' : 'auto'}>
              <Picker
                style={LocationCondition? styles.focusedPicker : styles.picker}
                selectedValue={selectedCity}
                onValueChange={(itemValue) =>
                  setSelectedCity(itemValue)
                }>
                <Picker.Item label="영천시" value="영천시" />
                <Picker.Item label="포항시" value="포항시" />
                <Picker.Item label="구미시" value="구미시" />
              </Picker>
              {/* 
              <Picker
                style={LocationCondition? styles.focusedPicker : styles.picker}
                selectedValue={selectedGun}
                onValueChange={(itemValue) =>
                  setSelectedGun(itemValue)
                }>
                <Picker.Item label="성주군" value="성주군" />
                <Picker.Item label="장흥군" value="장흥군" />
              </Picker>
              */}
              <Picker
                style={LocationCondition? styles.focusedPicker : styles.picker}
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
        </View>
        </View>
      </Edit>
      <MyPost>
        <Text style={styles.semiTitle}>내가 쓴 글</Text>
        <PostBox>
          <PostColumn>
            <Text style={styles.numColumn}>번호</Text>
            <Text>제목</Text>
          </PostColumn>
          <PostColumn>
            <Text style={styles.numColumn}>1</Text>
            <Text>오천체육문화타운에서 농구 같이 하실 분!</Text>
          </PostColumn>
        </PostBox>
      </MyPost>
    </Container>
  );
};

const styles = StyleSheet.create({
  numColumn: {
    width: '20%'
  },
  semiTitle: {
    fontWeight: 600,
    margin: 15,
    fontSize: 20
  },
  icon: {
    marginLeft: 3
  },
  settingForm: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15
  },
  formColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  form: {
    marginBottom: 20
  },
  formLabel: {
    fontWeight: 600,
    display:'flex',
    alignItems: 'center'
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
  picker: {
    padding: 8,
    borderRadius: 10,
    marginTop: 5
  },
  focusedPicker: {
    padding: 8,
    backgroundColor: "rgba(1, 1, 1, 0.05)",
    borderRadius: 10,
    marginTop: 5
  }
});
