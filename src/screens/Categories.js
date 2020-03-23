import React, { Component } from 'react';
import {StyleSheet } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CategoryItem from '../components/CategoryItem'

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CategoryItem
            title="Restaurant"
            color="#3B5998"
            count={23}
            icon="ios-restaurant"
        />
        <CategoryItem
            title="Immobilier"
            color="#5BC0DE"
            count={25}
            icon="ios-home"
        />
        <CategoryItem
            title="Electronique"
            color="#EA4C89"
            count={23}
            icon="ios-compass"
        />
        <CategoryItem
            title="Informatique"
            color="#45DF31"
            count={27}
            icon="ios-cloud"
        />
        <CategoryItem
            title="Epicérie"
            color="#FF9C09"
            count={23}
            icon="ios-restaurant"
        />
        <CategoryItem
            title="Accessoire"
            color="#B23AFC"
            count={30}
            icon="ios-archive"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:20,
        marginTop: 20,
        flexDirection:'row',
        justifyContent:'space-evenly',
        flexWrap:'wrap',
    }
})
