import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from "react-native-gesture-handler";
import SearchPage from "../../components/community/searchPage";

const Stack=createNativeStackNavigator();

export default function communityHomeScreen()
{

return(
    <SearchPage />
)
}