import React, { useState } from "react";
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";
import { Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Asset } from "expo-asset";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Stack from "./navigation/Stack";


const cacheImages = images =>
  images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
const cacheFonts = fonts =>
  fonts.map(font => [Font.loadAsync(font), Font.loadAsync(font)]);
export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGd5bXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      require("./assets/splash.png")
    ]);
    const fonts = cacheFonts([Ionicons.font, FontAwesome.font]);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}