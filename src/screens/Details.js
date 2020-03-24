import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet, 
  TouchableOpacity, 
  Share, 
  Platform, 
  ActivityIndicator, Animated
} from 'react-native'
import Swiper from 'react-native-swiper';
import {Ionicons} from '@expo/vector-icons';
import {Rating} from 'react-native-elements';
import moment from 'moment';
import 'moment/locale/fr';
import colors from '../api/color';
const { width } = Dimensions.get('window');
moment.locale('fr');

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite:false,
      loading:false,
      pan: new Animated.ValueXY({y:200,x:-150}),
    }
  }
  componentDidMount() {
    Animated.spring(this.state.pan,{
      toValue:{y:0,x:0},
      useNativeDriver:true
    }).start();
  }
  onLike = () => {
    this.setState(prevState => ({
      favorite: !prevState.favorite
    }))
  }
  onShare = () => {
    Share.share({title:'produit',message: 'Vente de produit chez it-corp'});
  }
  displayShareActionButton = () => {
    if (Platform.OS === 'android') {
      return (
        <TouchableOpacity onPress={this.onShare} style={styles.shareButton} >
              <Ionicons
                name='md-share'
                color={colors.primary}
                size={30}
              />
        </TouchableOpacity>

      )
    }
  }
  displayLoading = () => {
    if (this.state.loading) {
      return (
        <ActivityIndicator color={colors.primary} size='large' style={styles.loading} />
      )
    }
  }
  displayLikeIcon = () => {
    const {favorite} = this.state;
    return (
      <Ionicons
              name={favorite==true?'ios-heart':'ios-heart-empty'}
              color={colors.primary}
              size={favorite==true?40:30}
              onPress={this.onLike}
        />
    )
  }
  render () {
    return (
      <Animated.ScrollView style={[styles.container,{transform:this.state.pan.getTranslateTransform()}]}>
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

        <View style={styles.contentContainer}>
          <Text style={styles.contentTitle} >Titre</Text>
          <TouchableOpacity style={styles.favoriteIcon} >
            {this.displayLikeIcon()}
          </TouchableOpacity>
          <Text style={styles.overView}>
          It was popularised in the 1960s with the release of Letraset 
          sheets containing Lorem Ipsum passages, and more recently 
          with desktop publishing software like Aldus PageMaker 
          including versions of Lorem Ipsum
          </Text>
          <Text>Partenaire : IT-CORP</Text>
          <Text>Prix :500 FCFA</Text>
          <Text>Nombre de vues: 500</Text>
          <Text>Publiée: {moment('2020-03-23').fromNow()}</Text>
          <View style={{flex:1,flexDirection:'row'}}>
            <Text>Note:</Text>
            <Rating
                type="custom"
                ratingColor={colors.primary}
                imageSize={15}
                startingValue={3}
                style={{marginLeft:10}}
            />
          </View>
        </View>
        {this.displayShareActionButton()}
        {this.displayLoading()}
      </Animated.ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
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
  },
  contentContainer: {
    flex:1,
    marginLeft:5
  },
  contentTitle: {
    fontWeight:'bold',
    fontSize:30,
    flexWrap:'wrap',
    marginHorizontal:5,
    marginVertical:5,
    color:'#000000',
    textAlign:'center'
  },
  favoriteIcon: {
    alignItems: 'center'
  },
  overView: {
    fontStyle:'italic',
    color:'#666666',
    margin:5,
  },
  shareButton: {
    position:'absolute',
    width:60,
    height:60,
    right:30,
    bottom:0,
    borderRadius:30,
    backgroundColor:'#eee',
    justifyContent:'center',
    alignItems:'center'
  },
  loading: {
    position:'absolute',
    left:0,
    right:0,
    top:100,
    bottom:0,
    justifyContent:'center',
    alignItems: 'center',
  }
});