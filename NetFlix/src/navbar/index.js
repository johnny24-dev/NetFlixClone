import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from "../screen/Details";
import HomeScreen from "../screen/HomeScreen";
import NewAndHotScreen from "../screen/NewAndHotScreen";
import SearchScreen from "../screen/SearchScreen";
import Login from '../screen/auth/Login'
import { navigationRef } from "./rootNavigation";
const Tab = createBottomTabNavigator();
const AppStack = createNativeStackNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => (
      {
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Homes') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'New And Hots') {
            iconName = focused ? 'film' : 'film-outline';
          } else {
            iconName = 'search'
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'black'
        },

      }
    )}
    >
      <Tab.Screen name="Homes" component={HomeScreen}
        options={({ route }) => ({
          headerTitle: "Trang chủ",
          tabBarLabel: 'Trang chủ'
        })} />
      <Tab.Screen name="New And Hots" component={NewAndHotScreen}
        options={({ route }) => ({
          headerTitle: "Mới & Hot",
          tabBarLabel: 'Mới & Hot'
        })} />
      <Tab.Screen name="Searchs" component={SearchScreen}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: 'Tìm kiếm'
        })} />
    </Tab.Navigator>
  )
}

const MainStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack.Navigator>
      <AppStack.Screen name = "Login" component = {Login}
        options={({ route }) => ({
          headerShown: false,
        })} />
        <AppStack.Screen name = "Tabs" component = {TabNavigator}
        options={({ route }) => ({
          headerShown: false,
        })} />
        <AppStack.Screen name = "Details" component = {Details}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack