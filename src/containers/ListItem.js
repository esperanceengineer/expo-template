import React, { Component } from 'react'
import {FlatList,View,ActivityIndicator,Text } from 'react-native';
import Item from '../components/Item';
import AnimatedItem from '../components/AnimatedItem';
import colors from '../api/color';

/**
 * @param
 * @function onReload
 * @property loading
 * @property refreshing
 * @property array produits
 * @property navigation
 */
export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state= {

        }
    }
    renderEmptyComponent = () => (
        <View style={{ height: 40, alignItems: "center", justifyContent: "center" }}>
            <Text style={{fontSize:20,color:"black"}}>Aucune promotion</Text>
        </View>
      )
      renderFooter = () => {
          if(this.props.loading) {
              return(
              <View style={{ height: 50, alignItems: "center", justifyContent: "center" }}>
                  <ActivityIndicator
                      animating={true}
                      size='large'
                      color={colors.primary}
                  />
              </View>
    
              )
          }
          return null
      }
      navigateTo = (title) => {
        this.props.navigation.navigate('Details',{title})
      }
      _keyExtractor = (item,index) => index.toString();
      renderItem = ({item,index}) => {
        return(
            <AnimatedItem delay={index * 70}>
                <Item 
                image={item.image} 
                title={item.title} vote={item.vote} author = {item.author} 
                prix={item.prix} saving={item.saving} date={item.date}
                action={() => this.navigateTo(item.title)} />
            </AnimatedItem>
        )
      }
    render() {
        return (
            <FlatList
                style={{backgroundColor:'#eeeeee'}}
                data={this.props.promotions}
                renderItem={this.renderItem}
                keyExtractor={this._keyExtractor}
                ListEmptyComponent={this.renderEmptyComponent}
                ListFooterComponent={this.renderFooter}
                onRefresh={this.props.onReload}
                refreshing={this.props.refreshing}
        />
        )
    }
}
