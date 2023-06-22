import React from "react";
import { View, Text, Button } from "react-native";

function Main({navigation}) {
  return (
    <View>
      <Text>Main.js</Text>
      <Button
        title="go to start!"
        onPress={() => navigation.navigate('Start')}
      />
    </View>
  );
}

export default Main;