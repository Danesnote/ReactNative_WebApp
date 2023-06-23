import React from "react";
import { View, Text, Button } from "react-native";

function Main({navigation}) {
  return (
    <View>
      <Text>로그인</Text>
      <Button
        title="로그인"
        onPress={() => navigation.navigate('Login')}
      />
      <Text>메인화면 내용</Text>
    </View>
  );
}

export default Main;