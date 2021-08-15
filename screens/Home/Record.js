//날씨 정보
import styled from "styled-components/native";
import { FontAwesome, Entypo } from '@expo/vector-icons';
import Border from "../../components/Home/Border"
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import RecordItem from '../../components/Home/RecordItem';
import RecordInput from '../../components/Home/RecordInput';

const date = new Date();

const Today = styled.Text`
    background-color: rgb(166, 255, 178);
    border-radius: 10px;
    margin-left: 10px;
    padding: 3px 3px;
    font-size: 12px;
`;

const Container = styled.View`
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
`;


export default function Record() {
  const [courseRecords, setCourseRecords] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addRecordHandler = (recordList) => {
    setCourseRecords((currentRecords) => [
      ...currentRecords,
      { id: Math.random().toString(), value: recordList }
    ]);
    setIsAddMode(false);
  };

  const removeRecordHandler = (recordId) => {
    setCourseRecords((currentRecords) => {
      return currentRecords.filter((record) => record.id !== recordId);
    });
  };

  const cancelRecordAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View>
      <Container>
        <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <FontAwesome name="heartbeat" size={20} color="red" />
          <Text style={{fontSize:16, fontWeight:'600', fontFamily:'SCDream'}}> 운동 기록</Text>
          <Today>{date.getMonth() + 1}월 {date.getDate()}일</Today>
        </View>
        <FontAwesome style={{marginRight: 10}} name="calendar" size={22} color="black" />
      </Container>
        <RecordInput
          visible={isAddMode}
          onAddRecord={addRecordHandler}
          onCancel={cancelRecordAdditionHandler}
        />
        <FlatList
          keyExtractor={(item) => item.id}
          data={courseRecords}
          renderItem={(itemData) => {
            return (
              <RecordItem
                id={itemData.item.id}
                onDelete={removeRecordHandler}
                iconId={itemData.item.value.iconId}
                startHour={itemData.item.value.enteredStartHour}
                startMin={itemData.item.value.enteredStartMin}
                endHour={itemData.item.value.enteredEndHour}
                endMin={itemData.item.value.enteredEndMin}
                total={itemData.item.value.enteredTotal}
              />
            );
          }}
        />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setIsAddMode(true)} >
          <Entypo name="circle-with-plus" size={34} color="rgb(236, 159, 87)" />
        </TouchableOpacity>
      </View>
     <Border/>
    </View>
 );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  }
});
