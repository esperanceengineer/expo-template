import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TextInput,Dimensions, TouchableOpacity } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from '@expo/vector-icons/Ionicons';
const {width} = Dimensions.get('window');

export default class Login extends Component {
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
            <Text style ={styles.logoText}>G-PROMO</Text>
        </View>

        <View style={styles.inputContainer}>
            <Icons 
                name='ios-person'
                size={28}
                color = 'skyblue'
                style = {styles.inputIcon}
            />
            <TextInput
                style={styles.input}
                placeholder="FirstName"
                placeholderTextColor={'rgba(255,255,255,0.7)'}
                underlineColorAndroid='transparent'
            />
        </View>
        <View style={styles.inputContainer} >
            <Icons 
                name='ios-lock'
                size={28}
                color = 'skyblue'
                style = {styles.inputIcon}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor={'rgba(255,255,255,0.7)'}
                underlineColorAndroid='transparent'
            />
            <TouchableOpacity style={styles.btnEye}>
                <Icons 
                    name='ios-eye'
                    size={28}
                    color={'rgba(255,255,255,0.7)'}
                />
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.btnText}>Login</Text>
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
        height:120
    },
    logoText: {
        color:'black',
        fontSize:20,
        fontWeight:'500',
        marginTop:10
    },
    inputContainer: {
        marginTop:10
    },
    input: {
        width:width,
        height:45,
        borderRadius:25,
        fontSize:16,
        paddingLeft:45,
        backgroundColor:'rgba(0,0,0,0.35)',
        color:'rgba(255,255,255,0.7)',
        marginHorizontal:25,
    },
    inputIcon: {
        position: 'absolute',
        top:10,
        left:37
    },
    btnEye: {
        position: 'absolute',
        top:8,
        right:37
    },
    btnLogin: {
        width:width - 55,
        height:45,
        borderRadius:25,
        marginTop:10,
        backgroundColor:"skyblue",
        justifyContent: 'center',
    },
    btnText: {
        color:'rgba(255,255,255,0.7)',
        fontSize:16,
        textAlign:'center'
    }
})
