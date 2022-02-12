import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from "../screen/HomeScreen";
import NewAndHotScreen from "../screen/NewAndHotScreen";
import SearchScreen from "../screen/SearchScreen";
import Login from '../screen/auth/Login'
import { goback, navigationRef } from "./rootNavigation";
import SplashScreen from "../screen/SplashScreen";
import MovieDetail from "../screen/MovieDetail";
import TVDetail from "../screen/TVDetail";
import TvShow from "../screen/TvShow";
import Movies from "../screen/Movies";
import ListMoviesByCategoryScreen from "../screen/ListMoviesByCategoryScreen";
import ProfileScreen from "../screen/ProfileScreen";
import ListFavoriteScreen from "../screen/ListFavoriteScreen";


const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => (
      {
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Homes') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'New And Hots') {
            iconName = focused ? 'film' : 'film-outline';
          } else {
            iconName = 'search'
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'black'
        },
      }
    )}
    >
      <Tab.Screen name="Homes" component={HomeScreen}
        options={({ route }) => ({
          headerTitle: "Trang chủ",
          tabBarLabel: 'Trang chủ',
          headerShown: false
        })} />
      <Tab.Screen name="New And Hots" component={NewAndHotScreen}
        options={({ route }) => ({
          headerTitle: "Mới & Hot",
          tabBarLabel: 'Mới & Hot',
          headerShown: false
        })} />
      <Tab.Screen name="Searchs" component={SearchScreen}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: 'Tìm kiếm'
        })} />
    </Tab.Navigator>
  )
}

const MainStack = () => {
  return (
    <NavigationContainer
      ref={navigationRef}>
      <AppStack.Navigator
        screenOptions={{
          // gestureEnabled: true,
          // gestureDirection: 'horizontal',
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
        <AppStack.Screen name="Splash" component={SplashScreen}
          options={({ route }) => ({
            headerShown: false,
          })} />
        <AppStack.Screen name="Login" component={Login}
          options={({ route }) => ({
            headerShown: false,
          })} />
        <AppStack.Screen name="Tabs" component={TabNavigator}
          options={({ route }) => ({
            headerShown: false,
          })} />
        <AppStack.Screen name="MovieDetail" component={MovieDetail}
          options={({ route }) => ({
            headerShown: false,
          })} />
        <AppStack.Screen name="TVDetail" component={TVDetail}
          options={({ route }) => ({
            headerShown: false,
          })} />
        <AppStack.Screen name="TvShow" component={TvShow}
          options={({ route }) => ({
            headerShown: false,
          })} />
        <AppStack.Screen name="Movies" component={Movies}
          options={({ route }) => ({
            headerShown: false,
          })} />
        <AppStack.Screen name="ListMoviesByCategory" component={ListMoviesByCategoryScreen}
          options={({ route }) => ({
            headerShown: false,
          })} />
        <AppStack.Screen name="Profile" component={ProfileScreen}
          options={({ route }) => ({
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTitleStyle: {
              color: 'white'
            },
            headerTintColor: 'white',
            headerBackTitle: null,
            headerTitleAlign: 'center',
          })} />
          <AppStack.Screen name="ListFavorite" component={ListFavoriteScreen}
          options={({ route }) => ({
            headerShown: false,
          })} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack