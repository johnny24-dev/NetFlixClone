import { View, Text, Image, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';

const SplashScreen = () => {
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
