import { View, Text, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import React from 'react';
import { navigate } from '../navbar/rootNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../redux/action/authenAction';
import * as BASE from '../api/base'
import PosterMovie from '../components/PosterMovie';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const HomeScreen = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const sessionId = useSelector(state => state.authenReducer.sessionId)

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
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <FlatList
      data={DATA}
      renderItem={({item,index}) => {
        return(
          <Text style = {{color:'white'}}>{item.title}</Text>
        )
      }}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<PosterMovie item={DATA}/>}
      />
      
    </View>
  );
};

export default HomeScreen;
