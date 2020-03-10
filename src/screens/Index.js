import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TextInput,Dimensions, TouchableOpacity } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from '@expo/vector-icons/Ionicons';
import Color from '../api/color'
const {width} = Dimensions.get('window');

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={require('../assets/images/promotion.jpg')} 
            style={styles.logo}/>
            <Text style ={styles.logoText}>Bienvenue à PromoPlus</Text>
            <Text style={styles.text}>Acheter et être au courant de 
            nouvelles promotions, vendues par le biais de notre application mobile
            </Text>
        </View>
        <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.btnText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSignup}>
            <Text style={[styles.btnText,{color:"black"}]}>S'inscrire</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor: '#fff',
    },
    logoContainer: {
        alignItems:'center',
        marginBottom:30
    },
    logo :{
        width:200,
        height:120,
        margin:50,
    },
    logoText: {
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
      },
      text: {
        color:'black',
        opacity: 0.7,
        fontSize:14,
        margin:10,
        textAlign:'center'
    },
    btnLogin: {
        width:width-100,
        height:45,
        borderRadius:25,
        marginTop:10,
        backgroundColor:Color.primary,
        justifyContent: 'center',
    },
    btnSignup: {
      width:width-100,
      height:45,
      borderRadius:25,
      marginTop:20,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: Color.primary,
  },
    btnText: {
        color:'#fff',
        fontWeight:'bold',
        fontSize:16,
        textAlign:'center'
    }
})
