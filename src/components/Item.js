import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import {Rating} from 'react-native-elements';
import colors from '../api/color';

/**
 * @param
 * @function action
 * @property image
 * @property integer prix
 * @property integer vote
 * @property integer saving
 * @property string title
 * @property string author
 */
export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _displayFavoriteImage() {
      if (this.props.isFavorite) {
          return;
      }
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.action()} >
        <Image
            style={styles.image}
            source={this.props.image}
        />
        <View style={styles.content_container}>
            <Text style={{fontWeight:'bold'}}>{this.props.title}</Text>
            <Text style={{fontSize:11,color:'gray'}} >{this.props.author}</Text>
            <Text style={{fontSize:14,fontWeight:'bold',color:colors.primary}} >{this.props.prix}</Text>
            <Text  style={{
                color:'gray',
                fontWeight:'300',
                fontSize:11,
                textDecorationStyle:'solid',
                textDecorationLine:'line-through'}}>
            {this.props.saving}
            </Text>
            <Rating
                type="custom"
                ratingColor={colors.primary}
                imageSize={15}
                startingValue={this.props.vote}
            />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 2,
        backgroundColor: "#fff",
    },
    image: {
        width:100,
        height:100,
        resizeMode:'contain'
    },
    content_container: {
        flex:1,
        height:100,
        paddingHorizontal:20,
        alignItems: 'flex-start',
    },
    favoriteImage: {
        width:25,
        height:25,
        marginRight:5
    }
})
