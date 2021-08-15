import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home";
import MoreContest from "./MoreContest";

const Stacks=createStackNavigator();

export default function HomeEntry(){
    return(
       <Stacks.Navigator>
        <Stacks.Screen  
            options={{headerShown : false}}
            name="Home" component={Home} />
        <Stacks.Screen
            name="MoreContest"
            options={{
                title: "대회 정보",
                headerStyle: {
                    backgroundColor: 'rgba(12, 144, 125, 1)'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            component={MoreContest} /> 

       </Stacks.Navigator>
    )
}