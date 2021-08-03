//날씨 정보
import styled from "styled-components/native";
import Title from "../../components/Title";
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import Border from "../../components/Home/Border"
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
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
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const PlusIcon = styled.View`
    margin: 20px 60px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

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
    <div>
      <Container>
        <FontAwesome name="heartbeat" size={20} color="red" />
        <Title title={"운동 기록"} />
        <Today>{date.getMonth() + 1}월 {date.getDate()}일</Today>
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
          <PlusIcon>
              <AntDesign name="pluscircle" size={36} color="rgb(236, 159, 87)" />
          </PlusIcon>
        </TouchableOpacity>
      </View>

     <Border/>
    </div>
 );
}