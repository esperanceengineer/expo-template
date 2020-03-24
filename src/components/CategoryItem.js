import React, { Component } from 'react';
import { View, Text,Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
const {width} = Dimensions.get('window');

export default class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {category} = this.props;
    return (
    <View style={{width:width/2-50, height:width/2-50,
    backgroundColor:category.color,borderRadius:10,
    justifyContent:'center',alignItems:'center',marginBottom:20
    }} >
        <Ionicons 
            name={category.icon}
            size={28}
            color='#fff'
        />
        <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}} >{category.title}</Text>
        <Text style={{color:'#fff',fontSize:12}}>({category.count})</Text>
    </View>
    );
  }
}
