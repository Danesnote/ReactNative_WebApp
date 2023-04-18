import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from "expo-location";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

 const [isLoading, setIsLoading] = useState(true);

  const getLocation = async () => {

    try {

      await Location.requestPermissionsAsync();

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      setIsLoading(false);

    } catch (e) {
      Alert.alert("위치정보를 가져올 수 없습니다.");
    }

  };