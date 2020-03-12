import React, { Component } from 'react';
import { View, Text,StyleSheet,ScrollView,TextInput } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchBar} from 'react-native-elements';
import Category from '../components/Category';
import Item from '../components/Item'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const {search} = this.state
    return (
      <SafeAreaView style={styles.container}>
        <View style={{height:100,marginTop:10}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category image={require('../assets/images/produits/1.png')} text="Téléphone"/>
            <Category image={require('../assets/images/produits/2.png')} text="Roue"/>
            <Category image={require('../assets/images/produits/3.png')} text="Savon"/>
            <Category image={require('../assets/images/produits/33.jpg')} text="Iphone"/>
            <Category image={require('../assets/images/produits/22.jpg')} text="Voiture"/>
            <Category image={require('../assets/images/produits/11.jpg')} text="Moniteur"/>
          </ScrollView>
        </View>
        <ScrollView style={{backgroundColor:'#eeeeee'}}>
          <Item 
          image={require('../assets/images/produits/1.png')} 
          title="Produit" vote={4} author = "lormemmm" prix="1000F" saving="10"/>
          <Item 
          image={require('../assets/images/produits/2.png')} 
          title="Roue" vote={3} author = "Espérance" prix="3000F" saving="20"/>
          <Item 
          image={require('../assets/images/produits/3.png')} 
          title="Savon" vote={3.5} author = "Alladoum" prix="5000F" saving="10"/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
    }
})
