import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Details from './src/screens/Details';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <Details/>
      </SafeAreaProvider>
    );
  }
}