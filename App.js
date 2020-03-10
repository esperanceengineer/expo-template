import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Login from './src/screens/login'
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <Login/>
      </SafeAreaProvider>
    );
  }
}