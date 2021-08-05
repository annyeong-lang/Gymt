import React from "react"

import { createStackNavigator } from '@react-navigation/stack';
import Search from "./Search";
import SearchResult from "../SearchResult/SearchResult";

const Stacks=createStackNavigator();

export default function SearchGym(){
 
    return(
       <Stacks.Navigator
             screenOptions={
              {headerShown : false}} >
        <Stacks.Screen name="Search" component={Search} />
        <Stacks.Screen name="SearchResult" component={SearchResult} /> 
       </Stacks.Navigator>
    
    
    )
  }