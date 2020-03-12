import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../api/color';
const { width } = Dimensions.get('window');

export default class Details extends Component {
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{height:200}}>
          <Swiper style={styles.wrapper}
            dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 10, height: 10, borderRadius: 5, marginLeft: 5, marginRight: 5}} />}
            activeDot={<View style={{backgroundColor: colors.primary, width: 10, height: 10, borderRadius: 5, marginLeft: 5, marginRight: 5}} />}
            paginationStyle={{
              bottom: 10
            }}
            loop autoplay>
            <View style={styles.slide}>
              <Image
                style={styles.image}
                source={require('../assets/images/produits/3.png')}
                resizeMode='contain'
              />
            </View>
            <View style={styles.slide}>
              <Image
                style={styles.image}
                source={require('../assets/images/produits/2.png')}
                resizeMode='contain'
              />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} 
              source={require('../assets/images/produits/1.png')} 
              resizeMode='contain'/>
            </View>
          </Swiper>
        </View>

        <View>
          <Text>Espérance</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  wrapper: {
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  image: {
    width,
    flex:1
  }
});