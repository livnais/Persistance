/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Profiler } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from './src/Screens/Home';
import SignInScreen from './src/Screens/SignIn';
import RegisterScreen from './src/Screens/Register';
import ProfilScreen from './src/Screens/Profil';

const App: () => React$Node = () => {


  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: '' }}
      />
           <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: 'SE CONNECTER',headerBackTitle:' ' }}
      />
             <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "S'INSCRIRE",headerBackTitle:' ' }}
      />
      <Stack.Screen
        name="Profil"
        component={ProfilScreen}
        options={{ title: "PROFIL",headerBackTitle:' ' ,  headerLeft: null}}
      />
    </Stack.Navigator>
  </NavigationContainer>

  );
};

const styles = StyleSheet.create({
 view:{
   flex:1
 }
});

export default App;
