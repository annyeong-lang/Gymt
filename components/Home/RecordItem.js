import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';

const Health_record = styled.View`
    margin: 0 80px;
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
  const ImageList = ['basketball.png', 'bicycle.png', 'ping-pong.png', 'baseball.png', 'soccer.png', 'tennis.png']
  return (
    <>
      <Health_record>
        <div style={{display:'flex', width: '85%', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <BG source={require(`../../image/${ImageList[props.iconId-1]}`)} />
          <span>{props.startHour}:{props.startMin} - {props.endHour}:{props.endMin}</span>
          <span>{props.total}시간</span>
        </div>
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