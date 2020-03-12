import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';

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
      <TouchableOpacity style={styles.container}>
        <Image
            style={styles.image}
            source={this.props.image}
        />
        <View style={styles.content_container}>
            <View style={styles.header_container}>
                {this._displayFavoriteImage()}
                <Text style={styles.title_text}>{this.props.title}</Text>
                <Text style={styles.vote_text}>{this.props.vote}</Text>
            </View>    
            <View style={styles.description_container}>
                <Text style={styles.description_text} numberOfLines={6} >{this.props.details}</Text>
            </View>
            <View style={styles.date_container}>
                <Text style={styles.date_text}>Sorti le 13/12/2019</Text>
            </View>     
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height:190,
        flexDirection: 'row',
    },
    image: {
        width:120,
        height:180,
        margin:5
    },
    content_container: {
        flex:1,
        margin:5
    },
    header_container:{
        flex:3,
        flexDirection:'row'
    },
    title_text: {
        fontWeight:'bold',
        fontSize:20,
        flex:1,
        flexWrap: 'wrap',
        paddingRight: 5,
    },
    vote_text: {
        fontWeight:'bold',
        fontSize:26,
        color:'#666666',
    },
    description_container: {
        flex:7
    },
    description_text: {
        fontStyle:'italic',
        color:'#666666'
    },
    date_container: {
        flex:1
    },
    date_text: {
        textAlign:'right',
        fontSize:14
    },
    favoriteImage: {
        width:25,
        height:25,
        marginRight:5
    }
})
