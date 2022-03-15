import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { db } from "../../config";
import { collection, getDocs } from "../../node_modules/firebase/firestore";

let contestList = [];

async function dbContest(contestList) {
  const querySnapshot = await getDocs(collection(db, "contest"));
  querySnapshot.forEach((doc) => {
    contestList.push({
      id : doc.data().id,
      date : doc.data().date,
      title: doc.data().title,
      sport : doc.data().kinds,
    });    
  });  
}
dbContest(contestList);


export default function MoreContest(){
  

    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.tableHeader}>
            <Text style={{ display: 'flex', alignItems: 'center', fontFamily:'SCDream', fontWeight: '600', fontSize: 20, textAlign: 'center'}}><MaterialIcons name="run-circle" size={24} color="rgb(236, 159, 87)" /> 2021년 체육대회 정보</Text>
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
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}><Text style={{fontFamily:'SCDream', fontSize: 13}}>{item.date}</Text></ScrollView>
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
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}><Text style={{fontFamily:'SCDream', fontSize: 13}}>{item.title}</Text></ScrollView>
                  </View>
                  <View
                    style={{
                      width: "13%",
                      display: "flex",
                      alignItems: "center",
                      paddingHorizontal:5
                    }}
                  >
                    <ScrollView showsHorizontalScrollIndicator={false}horizontal={true}><Text style={{fontFamily:'SCDream', fontSize: 13}}>{item.sport}</Text></ScrollView>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  titleText:{
    color: "white",
    fontFamily:'SCDream',
    fontWeight: '500'
  },
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 35,
    marginBottom: 35,
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
