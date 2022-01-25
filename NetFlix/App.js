/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import { Provider } from 'react-redux';
import TabNavigator from './src/navbar';
import store from './src/redux/store/store';
import {Alert} from './src/components/Alert'

const App = () => {

  return (
    <Provider store={store}>
      <TabNavigator/>
      <Alert/>
    </Provider>
  );
};


export default App;
