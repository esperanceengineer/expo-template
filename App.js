import React from 'react';
import Navigation from './src/navigation';
import {enableScreens} from 'react-native-screens';
enableScreens();

export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    );
  }
}