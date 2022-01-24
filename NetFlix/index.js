/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SplashScreen from './src/screen/SplashScreen';
import Login from './src/screen/auth/Login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
