import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';
import CouponItem from '../components/CouponItem';

export default class Coupons extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <CouponItem/>
        <CouponItem/>
        <CouponItem/>
        <CouponItem/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#eee',
    }
})
