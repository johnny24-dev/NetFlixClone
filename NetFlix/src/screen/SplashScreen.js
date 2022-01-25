import { View, Text, Image, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import React, {useEffect} from 'react';
import * as BASE from '../api/base'
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../redux/action/authenAction';

const SplashScreen = () => {

  const dispatch = useDispatch();
  console.log('api key: >> ', BASE.API_KEY)

  setTimeout(()=>{
    dispatch(ACTIONS.tokenRequest({ api_key: BASE.API_KEY }))
  },2000)


  return (
    <SafeAreaView style = {styles.container}>
        <Text style = {styles.txtLogo}>NETFLIX</Text>
        <ActivityIndicator color="red" size = "large" style = {{marginTop:10}}/>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'black',
        justifyContent:'center'
    },

    txtLogo:{
        fontSize:50,
        color:'red',
        textAlign:'center',
        alignItems:'center',
        fontWeight:'bold'
    }

})
