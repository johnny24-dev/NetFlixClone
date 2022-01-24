import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewAndHotScreen from '../screen/NewAndHotScreen';
import Details from '../screen/Details';

const NewAndHotStack = createNativeStackNavigator()

const NewAndHotStackScreen = () => {
  return (
    <NewAndHotStack.Navigator>
        <NewAndHotStack.Screen name = "Mới & Hot" component = {NewAndHotScreen}/>
        <NewAndHotStack.Screen name = "Details" component = {Details}/>
    </NewAndHotStack.Navigator>
  );
};

export default NewAndHotStackScreen;
