import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { navigate } from '../navbar/rootNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../redux/action/authenAction';
import * as BASE from '../api/base'

const HomeScreen = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const sessionId = useSelector(state => state.authenReducer.sessionId)
  console.log("🚀 ~ file: HomeScreen.js ~ line 12 ~ HomeScreen ~ sessionId", sessionId)
  console.log('type of sessionId', typeof sessionId)

  const logout = (sessionId) => {
    dispatch(ACTIONS.logoutRequest(
      {
        apiKey: {
          api_key: BASE.API_KEY
        },
        body: {
          session_id: sessionId
        }
      }
    ))
  }

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => navigate('Details', null)}>
        <Text>CLick here to details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => logout(sessionId)}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
