import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';import styled from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';

const Health_record = styled.View`
    margin: 0 40px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

`;

const BG = styled.Image`
  height: 35px;
  width: 35px;
`;

export default function RecordItem(props) {
  const ImageList = [require('../../image/basketball.png'), require('../../image/bicycle.png'), require('../../image/ping-pong.png'), require('../../image/baseball.png'), require('../../image/soccer.png'), require('../../image/tennis.png')]
  return (
    <>
      <Health_record>
        <View style={{display:'flex', width: '85%', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <BG source={ImageList[props.iconId-1]} />
          <Text>{props.startHour}:{props.startMin} - {props.endHour}:{props.endMin}</Text>
          <Text>{props.total}시간</Text>
        </View>
        <TouchableOpacity
            style={{width: '15%', display:'flex', alignItems:'flex-end'}}
            activeOpacity={0.8}
            onPress={props.onDelete.bind(this, props.id)}
        >
          <FontAwesome name="trash" size={15} color="grey" />
        </TouchableOpacity>
      </Health_record>

    </>
  );
}