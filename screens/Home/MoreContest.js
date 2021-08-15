import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
//나중에 json으로 바꾸든 머든
const contestList = [
    {
        id: 4,
        date: '9월 10일',
        sport: '종합',
        title: '제32회 경기도 생활체육대축전',
        target : '일반'
    },
    {
        id: 4,
        date: '9월 11일',
        sport: '마라톤',
        title: '댕댕트레킹2021',
        target : '일반'
    },
    {
        id: 4,
        date: '9월 12일',
        sport: '조정',
        title: '제18회 K-water 사장배 물사랑 전국조정대회',
        target : '중, 고, 대, 일반'
    },
    {
        id: 4,
        date: '9월 26일',
        sport: '마라톤',
        title: '빵빵런2021',
        target : '일반'
    },
    {
        id: 1,
        date: '11월 21일',
        sport: '조정',
        title: '제7회 충주시장배 전국생활체육조정대회',
        target : '고, 대, 일반'
    },
    {
        id: 2,
        date: '11월 21일',
        sport: '조정',
        title: '제10회 충주탄금호배 전국조정대회',
        target : '중, 고, 대, 일반'
    },
    {
        id: 3,
        date: '11월 14일',
        sport: '조정',
        title: '제47회 장보고기 전국조정대회',
        target : '고, 대, 일반'
    },
    {
        id: 4,
        date: '11월 7일',
        sport: '조정',
        title: '제14회 부산광역시장배 전국조정대회',
        target : '고, 대, 일반'
    }
];


export default function MoreContest(){
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.tableHeader}>
            <Text style={{ display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: 20, textAlign: 'center'}}><MaterialIcons name="run-circle" size={24} color="rgb(236, 159, 87)" /> 2021년 체육대회 정보</Text>
          </View>
          <View style={styles.tableList}>
            <View style={styles.tableRowMain}>
              <View
                style={{
                  width: "17%",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <Text style={styles.titleText}>날짜</Text>
              </View>
              <View
                style={{ width: "70%", display: "flex", alignItems: "center" }}
              >
                <Text style={styles.titleText}>제목</Text>
              </View>
              <View
                style={{ width: "13%", display: "flex", alignItems: "center" }}
              >
                <Text style={styles.titleText}>종목</Text>
              </View>
            </View>
            {contestList.map( function (item) {
              return (
                <View style={styles.tableRow} key={item.id}>
                  <View
                    style={{
                      width: "17%",
                      display: "flex",
                      alignItems: "center",
                      borderRightWidth: 1,
                      borderRightColor: "#ccc",
                      paddingHorizontal:5
                    }}
                  >
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}><Text style={{fontSize: 13}}>{item.date}</Text></ScrollView>
                  </View>
                  <View
                    style={{
                      width: "70%",
                      display: "flex",
                      alignItems: "center",
                      borderRightWidth: 1,
                      borderRightColor: "#ccc",
                      paddingHorizontal:5
                    }}
                  >
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}><Text style={{fontSize: 13}}>{item.title}</Text></ScrollView>
                  </View>
                  <View
                    style={{
                      width: "13%",
                      display: "flex",
                      alignItems: "center",
                      paddingHorizontal:5
                    }}
                  >
                    <ScrollView showsHorizontalScrollIndicator={false}horizontal={true}><Text style={{fontSize: 13}}>{item.sport}</Text></ScrollView>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  titleText:{
    color: "white",
    fontWeight: 500
  },
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 35,
    backgroundColor: "#F2F2F2"
  },
  content: {
    backgroundColor: "white",
    borderColor: "#ccc",
    borderRadius: 20,
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingBottom:20
  },
  tableHeader: {
    display: "flex",
    alignItems: "center",
    margin: 20
},
  input: {
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  tableList: {
    display: "flex",
    flexDirection: "column"
  },
  tableRowMain: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "rgb(13, 98, 122)",
    padding: 5
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
});
