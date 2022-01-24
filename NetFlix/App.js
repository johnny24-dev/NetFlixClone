/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import TabNavigator from './src/navbar';
import SplashScreen from './src/screen/SplashScreen'

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  setTimeout(()=>{
    setShowSplash(false)
  },2000)

  return (
    showSplash ? <SplashScreen/> : <TabNavigator/>
  );
};


export default App;
