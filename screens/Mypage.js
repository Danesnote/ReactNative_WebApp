import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable, FlatList, Button } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

function Mypage({route, navigation}) {
    return(
        <View style={styles.block}>
      <Text style={styles.text}>id: {route.params.id}</Text>
    <View style={styles.buttons}>
        <Button
          title="다음"
          onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
        />
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    block: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 48,
    },
     buttons: {
      flexDirection: 'row',
    },
  });

  export default Mypage;