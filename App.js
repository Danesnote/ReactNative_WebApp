import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./screens/Start";

const Stack = createStackNavigator();

<NavigationContainer>
  <Stack.Navigator initialRouteName="Start">
    <Stack.Screen name="Start" component={Start} />
    <Stack.Screen name="Main" component={Main} />
  </Stack.Navigator>
</NavigationContainer>