import React, { Component } from 'react';
import { View, Text,StyleSheet,ActivityIndicator,Image } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Email from '../components/Email';
import Tel from '../components/Tel';
import Separator from '../components/Separator';
import Signout from '../components/Signout';
import colors from '../api/color';

export default class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading:false,
        logoUrl:''
    };
  }
  
  renderLoader = () => {
    const {loading} = this.state
        if (loading) {
          return (
            <View>
              <ActivityIndicator
                color={colors.primary}
                animating={true}
                size="large"
              />
            </View>
          )
    }
  }
  onLogout = () => {
      console.log('Deconnected')
  }

  render() {
      const {logoUrl} = this.state
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentImage}>
            {
                <Image style={styles.imageStyle} 
                source={logoUrl == ''?require('../assets/images/promotion.jpg'):{uri:logoUrl}}/> 
            }
        </View>
        <Text style={styles.userNameText}>Alladoum Espérance</Text>
        <Email
            email='aldo@gmail.com'
            name='Professionel'
        />
        {Separator()}
        <Tel
            tel='+24162348284'
            name='Personnel'
        />
        {Separator()}
        <Signout
            name="Deconnexion"
            singOut={this.onLogout}
        />
        {Separator()}
        {this.renderLoader()}   
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        marginTop: 10,
      },
      contentImage: {
          justifyContent: 'center',
          alignItems: 'center',
          height:150,
          width:150
      },
      imageStyle:{
        width:150,
        height:150,
        borderRadius: 75,
      },
      userNameText: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
      },
})
