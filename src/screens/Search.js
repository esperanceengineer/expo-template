import React, { Component } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchBar} from 'react-native-elements';
import {connect} from 'react-redux';
import ListItem from '../containers/ListItem';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:"",
      All: [
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
      produits: []
    };
  }
  updateSearch = search => {
    let produits = this.state.All.filter(item => {
      let value = search.toUpperCase();
      let produit = item.title.toUpperCase();
      if (produit.indexOf(value)>-1) return item;
    })
    this.setState({produits});
  }
  onReload = () => {
    console.log('Search pull refresh');
  }

  render() {
    const {search,produits} = this.state
    return (
      <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
        <SearchBar
            value={search}
            placeholder='Recherche'
            onChangeText = {val => this.updateSearch(val)}
            placeholderTextColor='black'
            lightTheme
            autoCorrect={false}
            containerStyle={{backgroundColor:'#fff'}}
            inputContainerStyle={{backgroundColor:'#fff'}}
            inputStyle={{color:'black'}}
        />
        <ListItem
          onReload={this.onReload}
          navigation={this.props.navigation}
          promotions={produits}
          loading={false}
          refreshing={false}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  promotions: state.promotions
})

export default connect(mapStateToProps)(Search);