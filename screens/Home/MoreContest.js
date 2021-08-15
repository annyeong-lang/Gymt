import React from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";

//나중에 json으로 바꾸든 머든
const contestList = [
    {
        id: 1,
        date: '2021-11-21',
        sport: '조정',
        title: '제7회 충주시장배 전국생활체육조정대회',
        target : '고, 대, 일반'
    },
    {
        id: 2,
        date: '2021-11-21',
        sport: '조정',
        title: '제10회 충주탄금호배 전국조정대회',
        target : '중, 고, 대, 일반'
    },
    {
        id: 3,
        date: '2021-11-14',
        sport: '조정',
        title: '제47회 장보고기 전국조정대회',
        target : '고, 대, 일반'
    },
    {
        id: 4,
        date: '2021-11-07',
        sport: '조정',
        title: '제14회 부산광역시장배 전국조정대회',
        target : '고, 대, 일반'
    },
    {
        id: 4,
        date: '2021-09-12',
        sport: '조정',
        title: '제18회 K-water 사장배 물사랑 전국조정대회',
        target : '중, 고, 대, 일반'
    },
];


export default function MoreContest(){
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.tableHeader}>
            <Text style={{ fontWeight: 600, fontSize: 20, textAlign: 'center'}}>2021년 체육대회 정보</Text>
          </View>
          <View style={styles.tableList}>
            <View style={styles.tableRowMain}>
              <View
                style={{
                  width: "15%",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <Text style={styles.titleText}>날짜</Text>
              </View>
              <View
                style={{ width: "65%", display: "flex", alignItems: "center" }}
              >
                <Text style={styles.titleText}>제목</Text>
              </View>
              <View
                style={{ width: "20%", display: "flex", alignItems: "center" }}
              >
                <Text style={styles.titleText}>대상</Text>
              </View>
            </View>
            {Array.apply(0, Array(8)).map(function (x, i) {
              return (
                <View style={styles.tableRow} key={i}>
                  <View
                    style={{
                      width: "15%",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <Text>Icons</Text>
                  </View>
                  <View
                    style={{
                      width: "65%",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <Text>Portal user</Text>
                  </View>
                  <View
                    style={{
                      width: "20%",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <Text>Testing</Text>
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
    marginHorizontal: 20,
    paddingHorizontal: 15,
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
