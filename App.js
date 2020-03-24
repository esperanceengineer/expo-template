import React from 'react';
import Navigation from './src/navigation';
import {enableScreens} from 'react-native-screens';
import {store} from './src/store';
import {Provider} from 'react-redux';
enableScreens();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Navigation/>
      </Provider>
    );
  }
}