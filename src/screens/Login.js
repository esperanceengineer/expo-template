import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TextInput,Dimensions, TouchableOpacity,ActivityIndicator } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from '@expo/vector-icons/Ionicons';
import Color from '../api/color'
const {width} = Dimensions.get('window');

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        identifiant:'',
        password:'',
        isLoading:false,
        showPass:false,
        messageErreur:''
    };
  }

  onChangeText = (key,value) => {
      this.setState({
          messageErreur:'',
          [key]:value
      })
  }
  showPassword = () => {
      let {showPass} = this.state;
      this.setState({
          showPass:!showPass,
      })
  }
  login = () => {
    this.setState({
        isLoading:true
    })
  }
  renderButtonLogin = () => {
    if (this.state.isLoading) {
        return (
            <ActivityIndicator
                animating={true}
                size='large'
                color='#fff'
            />
        )
    }
    return (
        <Text style={styles.btnText}>Valider</Text>
    )
  }

  render() {
    const {showPass,identifiant,password,messageErreur} = this.state
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Connexion</Text>
        </View>
        <View style={styles.inputContainer}>
            <Icons 
                name='ios-person'
                size={28}
                color = {Color.primary}
                style = {styles.inputIcon}
            />
            <TextInput
                style={styles.input}
                onChangeText = {text => this.onChangeText('identifiant',text)}
                value={identifiant}
                placeholder="Identifiant"
                placeholderTextColor='black'
                underlineColorAndroid='transparent'
                onSubmitEditing={() => this.secondTextInput.focus()}
                autoCapitalize='none'
                returnKeyType='next'
                blurOnSubmit={false}
            />
        </View>
        <View style={styles.inputContainer} >
            <Icons 
                name='ios-lock'
                size={28}
                color = {Color.primary}
                style = {styles.inputIcon}
            />
            <TextInput
                style={styles.input}
                onChangeText ={text => this.onChangeText('password',text)}
                value={password}
                placeholder="Mot de passe"
                secureTextEntry={showPass}
                placeholderTextColor='black'
                underlineColorAndroid='transparent'
                autoCapitalize='none'
                returnKeyType='send'
                blurOnSubmit={false}
                ref={input => this.secondTextInput = input}
                onSubmitEditing={this.login}
            />
            <TouchableOpacity style={styles.btnEye} onPress={this.showPassword}>
                <Icons 
                    name={showPass?'ios-eye':'ios-eye-off'}
                    size={28}
                    color={Color.primary}
                />
            </TouchableOpacity>
        </View>
        {
            messageErreur != "" && (
                    <View style={{alignItems:'center'}}>
                        <Text style={{color:'red'}}>{messageErreur}</Text>
                    </View>
                    )
                }
        <TouchableOpacity style={styles.btnLogin} onPress={this.login}>
            {this.renderButtonLogin()}
        </TouchableOpacity>
        <View>
            <Text style={{color:'black',fontWeight:'bold'}}>OU</Text>
        </View>
        <TouchableOpacity style={styles.btnGle} onPress={this.login}>
            <Text style={styles.btnText}>Compte google</Text>
        </TouchableOpacity>
        <View style={styles.btnSignup}>
            <Text>Pas de compte?</Text>
            <TouchableOpacity>
                <Text style={{color:Color.primary,fontWeight:'bold',paddingLeft:5}}>Inscription</Text>
            </TouchableOpacity>
        </View>
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
    titleContainer: {
        margin:40,
        justifyContent: 'center',
    },
    title: {
        color:'black',
        fontWeight:'bold',
        fontSize:26,
    },
    inputContainer: {
        marginTop:10,
        justifyContent: 'center',
    },
    input: {
        width:width-40,
        height:45,
        borderRadius:25,
        fontSize:16,
        paddingLeft:45,
        color:'black',
        marginHorizontal:25,
        borderWidth: 1,
        borderColor: Color.primary,
        marginBottom: 10,
    },
    inputIcon: {
        position: 'absolute',
        top:8,
        left:40
    },
    btnEye: {
        position: 'absolute',
        top:8,
        right:37
    },
    btnLogin: {
        width:width - 100,
        height:45,
        borderRadius:25,
        marginVertical:10,
        backgroundColor:Color.primary,
        justifyContent: 'center',
    },
    btnGle: {
        width:width - 100,
        height:45,
        borderRadius:25,
        marginTop:10,
        backgroundColor:Color.secondary,
        justifyContent: 'center',
    },
    btnText: {
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center'
    },
    btnSignup:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        margin: 10,
    }
})
