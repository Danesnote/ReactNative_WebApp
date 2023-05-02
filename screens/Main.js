import React from "react";
import { View, Text } from "react-native";

function Main() {
  return (
    <View>
      <Text>start!</Text>
      <Button 
        title="go to main" 
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
}

export default Main;