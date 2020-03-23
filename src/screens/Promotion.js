import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Dimensions, ActivityIndicator,Picker } from 'react-native';
import {Input,Avatar} from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import colors from '../api/color';
import Useful from '../api/useful';
const {width} = Dimensions.get('window');

export default class 
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading:false,
        categorie:'immobilier',
        prix:'',
        description:'',
        pourcentage:'',
        produit:'',
        images:[],
        messageErreur: {
            type:'',
            message:''
        }
    };
  }
  onChangeText = (type,val) => {
      this.setState({
          [type]:val,
      })
  }
  renderButton = () => {
    if (this.state.loading) {
        return (
            <ActivityIndicator
                animating={true}
                size='large'
                color='#fff'
            />
        );
    }
    return (
        <Text style={{color:'#fff',fontWeight:'bold'}} > Publier </Text>
    );
  }
    uploadImage = async () => {
        const photos = this.state.images;
        let images = [...photos];
        let continued = true;
        let pickerResult;
        
        this.setState({loading:true});
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
        try {
            if(permissionResult.granted  === false) {
                Useful.displayAlert("Erreur","Permission d'accès à la camera refusée");
                return;
            }
            pickerResult = await ImagePicker.launchImageLibraryAsync();
            if (pickerResult.cancelled === true) return;
            let uri = pickerResult.uri;
            let test = uri.split('/');
            let name = test[test.length-1];
            images.push({uri,name});
            this.setState({images,loading:false});
        } catch (error) {
            Useful.displayAlert('Erreur','Rechoisissez une photo');
            continued = false;
        } finally {
            if(continued) {
                Useful.showToast('Votre photo a été bien choisie');
            }
        }
    }

  render() {
    const {categorie,prix,pourcentage,produit,description,messageErreur,images} = this.state;
    return (
      <View style={styles.container} >
      <Input
        placeholder="Produit"
        errorStyle={{color:'red'}}
        label='Produit'
        labelStyle={{color:'gray'}}
        errorMessage={messageErreur.type == 'produit'?messageErreur.message:''}
        inputContainerStyle={{borderBottomColor:'#fff'}}
        inputStyle={{borderColor:'gray',borderWidth:0.5,paddingHorizontal:10}}
        value={produit}
        onChangeText={val => this.onChangeText('produit',val)}
      />
        <Input
        placeholder="Prix"
        keyboardType='numeric'
        errorStyle={{color:'red'}}
        label='Prix'
        labelStyle={{color:'gray'}}
        errorMessage={messageErreur.type == 'prix'?messageErreur.message:''}
        inputContainerStyle={{borderBottomColor:'#fff'}}
        inputStyle={{borderColor:'gray',borderWidth:0.5,paddingHorizontal:10}}
        value={prix}
        onChangeText={val => this.onChangeText('prix',val)}
      />
        <Input
        placeholder="Pourcentage"
        keyboardType='numeric'
        label='Poucentage'
        labelStyle={{color:'gray'}}
        errorStyle={{color:'red'}}
        errorMessage={messageErreur.type == 'pourcentage'?messageErreur.message:''}
        inputContainerStyle={{borderBottomColor:'#fff'}}
        inputStyle={{borderColor:'gray',borderWidth:0.5,paddingHorizontal:10}}
        value={pourcentage}
        onChangeText={val => this.onChangeText('pourcentage',val)}
      />
        <Input
        placeholder="Description"
        multiline={true}
        numberOfLines={4}
        errorStyle={{color:'red'}}
        errorMessage={messageErreur.type == 'description'?messageErreur.message:''}
        inputContainerStyle={{borderBottomColor:'gray',borderBottomWidth:0.8}}
        value={description}
        onChangeText={val => this.onChangeText('description',val)}
        inputStyle={{textAlignVertical:'top'}}
      />
      <View style={{marginTop:5}} >
        <Text style={styles.text} >Catégorie</Text>
        <Picker selectedValue={categorie} onValueChange={type => this.onChangeText('categorie',type)} >
            <Picker.Item label="Restaurant" value="restaurant" />
            <Picker.Item label="Immobilier" value="immobilier" />
            <Picker.Item label="Electronique" value="electronique" />
            <Picker.Item label="Informatique" value="informatique" />
        </Picker>
      </View>
      <View style={{marginVertical:5}}>
        <Text style={styles.text}>Images</Text>
        <View style={{flexDirection:'row',paddingLeft:5,paddingTop:5,alignItems:'center'}}>
            <Avatar
                size={60}
                rounded
                icon={{name:'camera',type:'font-awesome'}}
                activeOpacity={0.7}
                onPress={()=> this.uploadImage()}
            />
            <View style={{marginLeft:20}}>
                {images.map((type,index) => <Text key={index} >{type.name}</Text>)}
            </View>
        </View>
      </View>
        <TouchableOpacity style={styles.btnValider} >
            {this.renderButton()}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
    },
    text: {
        color:'gray',
        fontWeight:'bold',
        paddingLeft:10,
        textAlign:'left'
    },
    btnValider:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        height:45,
        borderRadius:15,
        width:width-100,
        marginHorizontal:40
    }
})
