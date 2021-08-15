import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import Modal from 'react-native-modal'

const Text = styled.Text``;

const ImageBox = styled.View`
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(1, 1, 1, 0.2);
  border-radius: 25px;
  padding: 10px 10px;
  margin-bottom: 10px;
`;

const BG = styled.Image`
  height: 35px;
  width: 35px;
  margin: 0 5px;
`;



function RecordInput(props) {
  const [enteredTotal, setEnteredTotal] = useState('');
  const [enteredStartHour, setEnteredStartHour] = useState('');
  const [enteredStartMin, setEnteredStartMin] = useState('');
  const [enteredEndHour, setEnteredEndHour] = useState('');
  const [enteredEndMin, setEnteredEndMin] = useState('');

  const [pressImage, setPressImage] = useState([
    {id: 1, press: true}, {id: 2, press: true}, {id: 3, press: true},
    {id: 4, press: true}, {id: 5, press: true}, {id: 6, press: true}]);

  const [iconId, setIconId] = useState(1);

  const totalInputHandler = (enteredText) => {
    setEnteredTotal(enteredText);
  };
  const startHourInputHandler = (enteredText) => {
    setEnteredStartHour(enteredText);
  };
  const startMinInputHandler = (enteredText) => {
    setEnteredStartMin(enteredText);
  };
  const endHourInputHandler = (enteredText) => {
    setEnteredEndHour(enteredText);
  };
  const endMinInputHandler = (enteredText) => {
    setEnteredEndMin(enteredText);
  };

  const addRecordHandler = () => {
    props.onAddRecord({iconId, enteredStartHour, enteredStartMin, enteredEndHour, enteredEndMin, enteredTotal});
    setEnteredStartHour('');
    setEnteredStartMin('');
    setEnteredEndHour('');
    setEnteredEndMin('');
    setEnteredTotal('');
    setPressImage(
      pressImage.map(function(image){
        image.press = true;
        return image;
      })
    );
  };

  const cancelRecordHandler = () => {
    props.onCancel();
    setEnteredStartHour('');
    setEnteredStartMin('');
    setEnteredEndHour('');
    setEnteredEndMin('');
    setEnteredTotal('');
    setPressImage(
      pressImage.map(function(image){
        image.press = true;
        return image;
      })
    );
  }

  const onPress= (iconId) => {
    console.log(pressImage);

    setPressImage(
      pressImage.map( image => image.id === iconId ? {...image, press: !image.press} : {...image, press: true})
    );
    console.log(iconId);

    setIconId(iconId);
  }

  return (
    <Modal visible={props.visible} animationType="fade" style={styles.modal}>
      <View style={styles.innerView}>
        <p style={{fontWeight: 900}}>운동 종목</p>
        {/*이미지 고르기 */}
        <ImageBox>
          <TouchableOpacity onPress={()=>{onPress(1)}} style={pressImage.find(item=> item.id===1).press ? styles.untouched : styles.touched}>
            <BG source={require('../../image/basketball.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onPress(2)}} style={pressImage.find(item=> item.id===2).press ? styles.untouched : styles.touched}>
            <BG source={require('../../image/bicycle.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onPress(3)}} style={pressImage.find(item=> item.id===3).press ? styles.untouched : styles.touched}>
            <BG source={require('../../image/ping-pong.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onPress(4)}} style={pressImage.find(item=> item.id===4).press ? styles.untouched : styles.touched}>
            <BG source={require('../../image/baseball.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onPress(5)}} style={pressImage.find(item=> item.id===5).press ? styles.untouched : styles.touched}>
            <BG source={require('../../image/soccer.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onPress(6)}} style={pressImage.find(item=> item.id===6).press ? styles.untouched : styles.touched}>
            <BG source={require('../../image/tennis.png')} />
          </TouchableOpacity>
        </ImageBox>
        {/* 운동 시간 */}
        <p style={{fontWeight: 900}}>운동 시간</p>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom: 15}}>
          <TextInput
            maxLength={2} 
            placeholder="00"
            style={styles.textInputStyle}
            onChangeText={startHourInputHandler}
            value={enteredStartHour}
          />
          <div style={{fontSize : 13, marginLeft: 5, marginRight: 5}}>:</div>
          <TextInput
            maxLength={2} 
            placeholder="00"
            style={styles.textInputStyle}
            onChangeText={startMinInputHandler}
            value={enteredStartMin}
          />
          <div style={{fontSize : 13, marginLeft: 5, marginRight: 5}}>-</div>
          <TextInput
            maxLength={2}
            placeholder="00"
            style={styles.textInputStyle}
            onChangeText={endHourInputHandler}
            value={enteredEndHour}
          />
          <div style={{fontSize : 13,marginLeft: 5, marginRight: 5}}>:</div>
          <TextInput
            maxLength={2}
            placeholder="00"
            style={styles.textInputStyle}
            onChangeText={endMinInputHandler}
            value={enteredEndMin}
          />
        </div>
        <p style={{fontWeight: 900}}>총 운동 시간</p>
        {/* 총 시간 */}
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom: 15}}>
          <TextInput
            placeholder="0"
            style={styles.textInputStyle}
            onChangeText={totalInputHandler}
            value={enteredTotal}
          />
          <div style={{fontSize : 13, marginLeft: 2}}>시간</div>
        </div>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1} onPress={addRecordHandler} >
            <Text>기록하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={cancelRecordHandler} >
            <Text>취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    display:'flex',
    backgroundColor: 'rgba(1, 1, 1, 0.3)',
    margin: 0,
    marginBottom: 65,
    alignItems: 'center'
  },
  innerView: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80vw',
    height: '60vh',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'rgb(13, 98, 122)'
  },
  textInputStyle: {
    width: '10%',
    borderBottomColor: 'black',
    textAlign: 'center',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    margin: 10,
    marginBottom: 20
  },
  button1: {
    backgroundColor: "rgb(194, 192, 231)",
    borderRadius: 25,
    width: '45%',
    padding: 10,
    textAlign: 'center',
  },
  button2: {
    backgroundColor: "rgba(236, 159, 87, 0.8)",
    borderRadius: 25,
    width: '45%',
    padding: 10,
    textAlign: 'center'
  },
  touched: {
    opacity: 0.5
  },
  untouched: {
    opacity: 1
  }
});

export default RecordInput;