import React, { Component } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchBar} from 'react-native-elements'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:""
    };
  }
  updateSearch = search => {
    this.setState({search})
  }

  render() {
    const {search} = this.state
    return (
      <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
        <SearchBar
            value={search}
            placeholder='Recherche'
            onChangeText = {this.updateSearch}
            placeholderTextColor='black'
            lightTheme
            autoCorrect={false}
            containerStyle={{backgroundColor:'#fff'}}
            inputContainerStyle={{backgroundColor:'#fff'}}
            inputStyle={{color:'black'}}
        />
      </SafeAreaView>
    );
  }
}
