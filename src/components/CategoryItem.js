import React, { Component } from 'react';
import { View, Text,Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons'
const {width} = Dimensions.get('window');

export default class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <TouchableOpacity style={{width:width/2-50, height:width/2-50,
    backgroundColor:this.props.color,borderRadius:10,
    justifyContent:'center',alignItems:'center',marginBottom:20
    }} >
        <Ionicons 
            name={this.props.icon}
            size={28}
            color='#fff'
        />
        <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}} >{this.props.title}</Text>
        <Text style={{color:'#fff',fontSize:12}}>({this.props.count})</Text>
    </TouchableOpacity>
    );
  }
}
