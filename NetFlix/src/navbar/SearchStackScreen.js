import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screen/SearchScreen'

const SearchStack = createNativeStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
        <SearchStack.Screen name = "Tìm kiếm" component ={SearchScreen}/>
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
