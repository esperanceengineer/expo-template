import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Promotion from './src/screens/Promotion';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <Promotion/>
      </SafeAreaProvider>
    );
  }
}