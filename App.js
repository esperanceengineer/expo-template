import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Login from './src/screens/Login';
import Point from './src/screens/Index';
import Signup from './src/screens/Signup';
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <Signup/>
      </SafeAreaProvider>
    );
  }
}