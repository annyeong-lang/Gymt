import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Linking } from "react-native";

const Container = styled.View`
    height: 100%;
    width: 100%;
`;

const BG = styled.Image`
  border-radius: 25px;
  height: 100%;
  width: 100%;
  opacity: 1;
  position: absolute;
`;

const styles = {
  button: {
    flex: 1 //flex:1을 빼면 이미지가 안보임
  }
}

const Slide = ({ backgroundImage, url }) => (
    <Container>
      {/* 전체 경로를 map으로 넣으면 에러남. ${url}해야 안남*/}
      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={ ()=> Linking.openURL(url) }>
      <BG onClick={() => {onClick(url)}} source={backgroundImage} />
      </TouchableOpacity>
    </Container>
);

export default Slide;