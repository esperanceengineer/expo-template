import React, { Component } from 'react';
import { View,StyleSheet,ScrollView,TouchableOpacity, Animated ,Text} from 'react-native';
import {connect} from 'react-redux';
import Category from '../components/Category';
import ListItem from '../containers/ListItem';
import colors from '../api/color';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partenaires: [
        {
          image: require('../assets/images/produits/1.png'),
          text: 'Téléphone'
        },
        {
          image: require('../assets/images/produits/2.png'),
          text: 'Roue'
        },
        {
          image: require('../assets/images/produits/3.png'),
          text: 'Savon'
        },
        {
          image: require('../assets/images/produits/22.jpg'),
          text: 'Voiture'
        },
        {
          image: require('../assets/images/produits/33.jpg'),
          text: 'PC'
        }
      ],
      produits: [
        {
          title:'Produit',
          author:'loremimsumm',
          vote:4,saving:'2000F',
          image:require('../assets/images/produits/1.png'),
          prix:'1000F',
          date: '2020-03-23'
        },
        {
          title:'Roue',
          author:'Espérance',
          vote:3,saving:'4000F',
          image:require('../assets/images/produits/2.png'),
          prix:'3000F',
          date: '2020-03-23'
        },
        {
          title:'Savon',
          author:'Alladoum',
          vote:3.5,saving:'7000F',
          image:require('../assets/images/produits/3.png'),
          prix:'5000F',
          date: '2020-03-22'
        },
        {
          title:'Iphone',
          author:'Ndouba',
          vote:4,saving:'15000F',
          image:require('../assets/images/produits/11.jpg'),
          prix:'10000F',
          date: '2020-03-22'
        }
      ],
      loading:false,
      refreshing:false,
      pan: new Animated.Value(-100)
    };
    this.onReload = this.onReload.bind(this);
  }
  componentDidMount() {
    Animated.timing(this.state.pan,{
      toValue:0,
      useNativeDriver:true,
      duration:700,
    }).start();
  }
  onPartenaire = (partenaire) => {
    console.log(partenaire);
  }
  onReload () {
    console.log('pull refresh');
    this.setState({refreshing:true},() => {
      console.log('callback')
    });
  }
  render() {
    const {partenaires,produits,loading,refreshing} = this.state;
    return (
      <Animated.View style={[styles.container,{transform:[{translateY:this.state.pan}]}]}>
        <View style={{height:100,marginVertical:10}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {partenaires.map((partenaire,index) => 
            (<TouchableOpacity key={index} onPress={() => this.onPartenaire(partenaire)}>
              <Category image={partenaire.image} text={partenaire.text} />
            </TouchableOpacity>))}
          </ScrollView>
        </View>
        <View style={{marginBottom:5}} >
          <Text style={styles.header}>Nouvelles Promotions</Text>
        </View>
        <ListItem
          onReload={this.onReload}
          navigation={this.props.navigation}
          promotions={produits}
          loading={loading}
          refreshing={refreshing}
        />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
    },
    header: {
      fontWeight:'700',
      fontSize:20,
      paddingLeft:5,
      color:colors.primary
    }
})

const maStateToProps = (state) => ({
  promotions: state.promotions,
  partenaires:state.partenaires,
  user:state.user
})
export default connect(maStateToProps)(Home);