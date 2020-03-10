import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,Dimensions, TouchableOpacity,ActivityIndicator,Picker,ScrollView } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from '@expo/vector-icons/Ionicons';
import {Avatar,Image} from 'react-native-elements';
import NetInfo from '@react-native-community/netinfo';
import * as ImagePicker from 'expo-image-picker';
import Useful from '../api/useful';
import Color from '../api/color';
const {width} = Dimensions.get('window');

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        identifiant:'',
        password:'',
        all:'',
        sexe:'masculin',
        tel:'',
        email:'',
        photo:'',
        isLoading:false,
        showPass:false,
        loading:false,
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
  uploadImage = async () => {
    let isConnected = await NetInfo.isConnected.fetch();
    let continued = true;
    let pickerResult;
    if(isConnected) {
        if(this.state.photo != '') return;
        this.setState({loading:true});
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
        try {
            if(permissionResult.granted  === false) {
                Useful.displayAlert("Erreur","Permission d'accès à la camera refusée");
                return;
            }
            pickerResult = await ImagePicker.launchImageLibraryAsync();
            if (pickerResult.cancelled === true) return;
            this.setState({photo:pickerResult.uri,loading:false,messageErreur:''});
        } catch (error) {
            Useful.displayAlert('Erreur','Rechoisissez une photo');
            continued = false;
        } finally {
            if(continued) {
                Useful.showToast('Votre photo a été bien téléchargée');
            }
        }
    }else {
        Useful.displayAlert("Information","Vous n'êtes pas connecté sur internet")
        }
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
    const {showPass,identifiant,password,messageErreur,all,tel,email,photo,sexe} = this.state
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Inscription</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText = {text => this.onChangeText('all',text)}
                    value={all}
                    placeholder="Nom complet"
                    placeholderTextColor='black'
                    underlineColorAndroid='transparent'
                    onSubmitEditing={() => this.identifiant.focus()}
                    autoCapitalize='none'
                    returnKeyType='next'
                    blurOnSubmit={false}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText = {text => this.onChangeText('identifiant',text)}
                    value={identifiant}
                    placeholder="Identifiant"
                    placeholderTextColor='black'
                    underlineColorAndroid='transparent'
                    onSubmitEditing={() => this.password.focus()}
                    ref={input => this.identifiant = input}
                    autoCapitalize='none'
                    returnKeyType='next'
                    blurOnSubmit={false}
                />
            </View>
            <View style={styles.inputContainer} >
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
                    ref={input => this.password = input}
                    onSubmitEditing={() => this.tel.focus()}
                />
                <TouchableOpacity style={styles.btnEye} onPress={this.showPassword}>
                    <Icons 
                        name={showPass?'ios-eye':'ios-eye-off'}
                        size={28}
                        color={Color.primary}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText = {text => this.onChangeText('tel',text)}
                    value={tel}
                    placeholder="Téléphone"
                    placeholderTextColor='black'
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                    returnKeyType='next'
                    blurOnSubmit={false}
                    keyboardType='number-pad'
                    ref={input => this.tel = input}
                    onSubmitEditing={() => this.email.focus()}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText = {text => this.onChangeText('email',text)}
                    value={email}
                    placeholder="Adresse Email"
                    placeholderTextColor='black'
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                    returnKeyType='next'
                    blurOnSubmit={false}
                    keyboardType='email-address'
                    ref={input => this.email = input}
                />
            </View>
            <View style={styles.typeContainer}>
                <Text style={styles.defaultText}>Sexe:</Text>
                <Picker selectedValue={sexe} onValueChange={sexe => this.setState({sexe})}>
                    <Picker.Item label="Masculin" value="masculin" />
                    <Picker.Item label="Feminin" value="feminin" />
                </Picker>
            </View>
            <View style={styles.typeContainer}>
                <View style={{flexDirection:'row',paddingLeft:5,paddingTop:5,alignItems:'center'}}>
                    <Avatar
                        size={60}
                        rounded
                        icon={{name: 'camera', type: 'font-awesome'}}
                        onPress={() => this.uploadImage()}
                        activeOpacity={0.7}
                        />
                    {
                        photo != null && (
                            <View style={styles.containerImage}>
                                <Image
                                    style={styles.thumbnail}
                                    source={{uri:photo}}
                                    PlaceholderContent={<ActivityIndicator/>}
                                />
                            </View>
                        )
                    }  
                </View>
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
            <View style={styles.btnSignup}>
                <Text>Déjà un compte?</Text>
                <TouchableOpacity>
                    <Text style={{color:Color.primary,fontWeight:'bold',paddingLeft:5}}>Connexion</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
    },
    titleContainer: {
        margin:20,
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
        paddingLeft:10,
        color:'black',
        marginHorizontal:25,
        borderWidth: 1,
        borderColor: Color.primary,
        marginBottom: 10,
    },
    btnEye: {
        position: 'absolute',
        top:8,
        right:37
    },
    typeContainer: {
        marginLeft:20
    },
    defaultText :{
        color:'black',
        fontWeight:'bold',
        paddingLeft:5,
        textAlign:'left'
    },
    containerImage: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumbnail:{
        width:120,
        height:120,
        resizeMode:'contain'
    },
    btnLogin: {
        width:width - 100,
        height:45,
        borderRadius:25,
        marginVertical:10,
        backgroundColor:Color.primary,
        justifyContent: 'center',
        marginLeft: 60,
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
        marginTop:3,
    }
})
