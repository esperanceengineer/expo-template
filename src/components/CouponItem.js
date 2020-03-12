import React, { Component } from 'react';
import { View, Text,Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from '@expo/vector-icons/AntDesign';
const {width} = Dimensions.get('window');

export default class CouponItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <TouchableOpacity style={{backgroundColor:'#fff',flexDirection:'row',marginBottom:5,justifyContent:'space-evenly',padding:5}} >
        <Icons 
            name="qrcode"
            size={90}
            color='#45DF31'
        />
        <View>
            <Text style={{color:'black',fontWeight:'bold',fontSize:16}} >Libellé</Text>
            <Text style={{color:'black',fontSize:14}} >Montant</Text>
            <Text style={{color:'gray',fontSize:12}} >Date d'achat</Text>
        </View>
        <View style={{backgroundColor:'#45DF31',width:50,height:50,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#fff',fontSize:12}}>Validé</Text>
        </View>
    </TouchableOpacity>
    );
  }
}
