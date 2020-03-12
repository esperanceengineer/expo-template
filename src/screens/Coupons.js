import React, { Component } from 'react';
import {StyleSheet } from 'react-native';
import CouponItem from '../components/CouponItem';
import {SafeAreaView} from 'react-native-safe-area-context'

export default class Coupons extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CouponItem/>
        <CouponItem/>
        <CouponItem/>
        <CouponItem/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#eee',
    }
})
