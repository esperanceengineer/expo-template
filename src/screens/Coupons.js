import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';
import {connect} from 'react-redux';
import CouponItem from '../components/CouponItem';
import AnimatedItem from '../components/AnimatedItem';


class Coupons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coupons: new Array(5).fill(7)
    };
  }

  render() {
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
const mapStateToProps = state => ({
  coupons: state.coupons,
  user:state.user
})
export default connect(mapStateToProps)(Coupons);
