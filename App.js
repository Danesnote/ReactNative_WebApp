import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import * as Location from "expo-location";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from "./screens/Main.js";
import Start from "./screens/Start.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
    return(
        <NavigationContainer>
        <Tab.Navigator
                  screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                      let iconName;
                      if (route.name === '메인') {
                        iconName = focused
                          ? require('./assets/favicon.png')
                          : require('./assets/favicon.png');
                      } else if (route.name === '예약') {
                        iconName = focused
                          ? require('./assets/favicon.png')
                          : require('./assets/favicon.png');
                      } else if (route.name === '공란') {
                        iconName = focused
                          ? require('./assets/favicon.png')
                          : require('./assets/favicon.png');
                      } else if (route.name === '팁') {
                        iconName = focused
                          ? require('./assets/favicon.png')
                          : require('./assets/favicon.png');
                      } else if (route.name === '마이페이지') {
                        iconName = focused
                          ? require('./assets/favicon.png')
                          : require('./assets/favicon.png');
                      }

                      return (
                        <Image source={iconName} style={{width: 25, height: 25}} />
                      );
                    },
                  })}>
                  <Tab.Screen name="메인" component={Main} />
                  <Tab.Screen name="예약" component={Start} />
                  <Tab.Screen name="공란" component={Main} />
                  <Tab.Screen name="팁" component={Start} />
                  <Tab.Screen name="마이페이지" component={Start} />
                </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;

