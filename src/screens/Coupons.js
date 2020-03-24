import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';
import CouponItem from '../components/CouponItem';
import AnimatedItem from '../components/AnimatedItem';


export default class Coupons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coupons: new Array(5).fill(7)
    };
  }

  render() {
    console.log(this.state.coupons)
    return (
      <View style={styles.container}>
        {
          this.state.coupons.map((item,index) => (
            <AnimatedItem delay={index * 70}>
              <CouponItem index={index} />
            </AnimatedItem>
          ))
        }
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
