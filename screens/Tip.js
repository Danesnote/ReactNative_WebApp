import React from "react";
import { View, Text, Button } from "react-native";

function Tip({navigation}) {
  return (
    <View>
      <Text>Tip.js</Text>
      <Button
        title="go to start!"
        onPress={() => navigation.navigate('Start')}
      />
    </View>
  );
}

export default Tip;