import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { navigate } from '../navbar/rootNavigation';

const HomeScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => navigate('Details',null)}>
        <Text>CLick here to details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
