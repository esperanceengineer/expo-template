import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:2}}>
            <Image
                source={this.props.image}
                style={{flex:1,width:null,height:null,resizeMode:'contain'}}
            />
        </View>
        <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
            <Text style={{fontWeight:'bold'}}>{this.props.text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height:100,
        width:100,
        marginLeft:10,
        borderWidth:0.5,
        borderColor: '#dddd',
    }
})
