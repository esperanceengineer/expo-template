import React, { Component } from 'react';
import {StyleSheet,TouchableOpacity, Animated,ScrollView} from 'react-native';
import {connect} from 'react-redux';
import CategoryItem from '../components/CategoryItem';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories:[
        {
          title:"Restaurant",
          color:"#3B5998",
          count:23,
          icon:"ios-restaurant",
        },
        {
          title:"Immobilier",
          color:"#5BC0DE",
          count:25,
          icon:"ios-home",
        },
        {
          title:"Electronique",
          color:"#5BC0DE",
          count:23,
          icon:"ios-compass",
        },
        {
          title:"Informatique",
          color:"#45DF31",
          count:27,
          icon:"ios-cloud",
        },
        {
          title:"Epécerie",
          color:"#FF9C09",
          count:23,
          icon:"ios-restaurant",
        },
        {
          title:"Accessoire",
          color:"#B23AFC",
          count:30,
          icon:"ios-archive",
        },
      ],
      promotions: [
        {
          title:'Produit',
          author:'loremimsumm',
          vote:4,saving:10,
          image:require('../assets/images/produits/1.png'),
          prix:'1000F'
        },
        {
          title:'Roue',
          author:'Espérance',
          vote:3,saving:20,
          image:require('../assets/images/produits/2.png'),
          prix:'3000F'
        },
        {
          title:'Savon',
          author:'Alladoum',
          vote:3.5,saving:10,
          image:require('../assets/images/produits/3.png'),
          prix:'5000F'
        },
        {
          title:'Iphone',
          author:'Ndouba',
          vote:4,saving:10,
          image:require('../assets/images/produits/11.jpg'),
          prix:'10000F'
        }
      ],
      pan: new Animated.Value(300)
    };
  }

  componentDidMount() {
    Animated.spring(this.state.pan,{
      toValue:0,
      delay:70,
      useNativeDriver:true
    }).start();
  }

  navigateTo = (title) => {
    const {promotions} = this.state;
    this.props.navigation.navigate('Promotions',{title,promotions});
  }
  render() {
    const {categories} = this.state;
    return (
      <Animated.View style={{flex:1,transform:[{translateX:this.state.pan}]}}>
        <ScrollView contentContainerStyle={styles.container}>
            {categories.map((category,index) => 
            (<TouchableOpacity key={index} onPress={() => this.navigateTo(category.title)} >
              <CategoryItem category={category}/>
            </TouchableOpacity>))}
        </ScrollView>
      </Animated.View>
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

const mapStateToProps = (state) => ({
  categories:state.categories,
  promotions:state.promotions,
  user:state.user
})

export default connect(mapStateToProps)(Categories);