import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements';
import colors from '../api/color';
const Email = ({name, email}) => (
    <TouchableOpacity>
        <View style={[styles.container]}>
            <View style={styles.iconRow}>
                <Icon name="email" underlayColor="transparent" iconStyle={styles.emailIcon}/>
            </View>

            <View style={styles.emailRow}>
                <View style={styles.emailColumn}>
                    <Text style={styles.emailText}>{email}</Text>
                </View>

                <View style={styles.emailNameColumn}>
                    <Text style={styles.emailNameText}>{name}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
);

export default Email;

const styles = StyleSheet.create({
    container :{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
        padding: 5,
    },
    iconRow: {
        flex: 2,
        justifyContent: 'center',
    },
    emailIcon: {
        color: colors.primary,
        fontSize: 30,
    },
    emailRow: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    emailColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    emailText: {
        fontSize: 16,
        fontWeight:'bold',
        color:'black'
    },
    emailNameColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    emailNameText: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '200',
    }
})
