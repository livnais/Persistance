/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


import HomeScreen from './src/Screens/Home';

const App: () => React$Node = () => {
  return (
      <View style={styles.view}>
        <HomeScreen/>
      </View>

  );
};

const styles = StyleSheet.create({
 view:{
   flex:1
 }
});

export default App;
