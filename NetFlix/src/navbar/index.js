import React from "react";
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from "./HomeStackScreen";
import NewAndHotStackScreen from "./NewAndHotStackScreen";
import SearchStackScreen from "./SearchStackScreen";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
   return(
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Mới & Hot" component={NewAndHotStackScreen} />
      <Tab.Screen name="Tìm kiếm" component={SearchStackScreen} />
    </Tab.Navigator>
  </NavigationContainer>
   )
}

export default TabNavigator