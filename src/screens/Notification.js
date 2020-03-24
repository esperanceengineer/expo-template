import React, { Component } from 'react';
import { Text, View, StyleSheet,Animated,Picker,Dimensions,ActivityIndicator,TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Ionicons} from '@expo/vector-icons';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');
import colors from '../api/color';
const {width} = Dimensions.get('window');

export default class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pan: new Animated.Value(-100),
            promotion:'telephone',
            notification: 'all',
            showDate:false,
            showTime:false,
            date:new Date(),
            heure: new Date(),
            isLoading:false
        }
    }
    componentDidMount() {
        Animated.spring(this.state.pan,{
            toValue:0,
            useNativeDriver:true
        }).start();
    }
    renderButtonLogin = () => {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator
                    animating={true}
                    size='large'
                    color='#fff'
                />
            )
        }
        return (
            <Text style={styles.btnText}>Valider</Text>
        )
    }
    onSave = () => {
        console.log('Save info')
    }
    onChangeDate = (event,date) => {
        if (event.type == 'dismissed') return;
        //console.log(moment(date).format('YYYY-MM-DD'));
        this.setState({showDate:false,date})
    }
    onChangeHeure = (event, heure) => {
        if (event.type == 'dismissed') return;
        //console.log(moment(heure).format('HH:mm:ss'));
        this.setState({showTime:false,heure})
    }
    render() {
        const {promotion,notification,showDate,showTime,date,heure} = this.state;
        return (
            <Animated.ScrollView style={[styles.container,{transform:[{translateY:this.state.pan}]}]} >
                <View style={styles.typeContainer}>
                    <Text style={styles.defaultText}>Choisir la promotion: </Text>
                    <Picker selectedValue={promotion} onValueChange={promotion => this.setState({promotion})}>
                        <Picker.Item label="Téléphone" value="telephone" />
                        <Picker.Item label="Ordinateur" value="pc" />
                        <Picker.Item label="Moniteur" value="moniteur" />
                        <Picker.Item label="Voiture" value="voiture" />
                    </Picker>
                </View>
                <View style={styles.typeContainer}>
                    <Text style={styles.defaultText}>Notification à souscrire: </Text>
                    <Picker selectedValue={notification} onValueChange={notification => this.setState({notification})}>
                        <Picker.Item label="Tous les clients" value="all" />
                        <Picker.Item label="50 clients" value="50" />
                        <Picker.Item label="100 clients" value="100" />
                        <Picker.Item label="200 clients" value="200" />
                    </Picker>
                </View>
                <View>
                    <Text style={styles.defaultText}>Date d'envoie</Text>
                    <View style={{flexDirection:'row',paddingTop:5}}>
                        <Ionicons
                            style={{paddingLeft:10}}
                            name='ios-calendar'
                            size={30}
                            color={colors.primary}
                            onPress={() => this.setState({showDate:true})}
                        />
                        <Text style={styles.date}>{moment(date).format('LL')}</Text>
                        {
                            showDate && (
                                <DateTimePicker
                                    testID='datepicker'
                                    value={date}
                                    display='default'
                                    mode='date'
                                    onChange={this.onChangeDate}
                                />
                            )
                        }
                    </View>
                </View>
                <View>
                    <Text style={styles.defaultText}>Heure d'envoie</Text>
                    <View style={{flexDirection:'row',paddingTop:5}}>
                        <Ionicons
                            style={{paddingLeft:10}}
                            name='ios-time'
                            size={30}
                            color={colors.primary}
                            onPress={() => this.setState({showTime:true})}
                        />
                        <Text style={styles.date}>{moment(heure).format('LTS')}</Text>
                        {
                            showTime && (
                                <DateTimePicker
                                    testID='timepicker'
                                    value={heure}
                                    display='default'
                                    is24Hour={true}
                                    mode='time'
                                    onChange={this.onChangeHeure}
                                />
                            )
                        }
                    </View>
                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={this.onSave}>
                    {this.renderButtonLogin()}
                </TouchableOpacity>
            </Animated.ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        paddingTop:5
    },
    typeContainer: {

    },
    defaultText :{
        color:'black',
        fontWeight:'bold',
        paddingLeft:5,
        textAlign:'left'
    },
    date: {
        color:'gray',
        fontWeight:'bold',
        paddingLeft:10,
        textAlignVertical:'center',
        fontStyle:'italic'
    },
    btnLogin: {
        width:width - 100,
        height:45,
        borderRadius:25,
        marginVertical:10,
        backgroundColor:colors.primary,
        justifyContent: 'center',
        marginLeft: 60,
    },
    btnText: {
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center'
    },
})
