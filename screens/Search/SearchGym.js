import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import Search from "./Search";
import SearchResult from "../SearchResult/SearchResult";

const Stacks=createStackNavigator();

export default function SearchGym( props ){    
    return(
       <Stacks.Navigator>
        <Stacks.Screen
            name="Search" 
            options={{headerShown : false}}
            component={Search} />
        <Stacks.Screen name="SearchResult"
            options={{
                  title: "검색 결과",
                  headerStyle: {
                  backgroundColor: 'rgba(12, 144, 125, 1)'
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                  fontWeight: 'bold',
                  },
            }}
            component={SearchResult} /> 
       </Stacks.Navigator>
    
    
    )
  }