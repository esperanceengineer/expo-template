import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../api/color'

const Separator = () => (
    <View style={styles.container}>
        <View style={styles.separatorOffset}></View>
        <View style={styles.separator}></View>
    </View>
);

export default Separator;

const styles = StyleSheet.create({
    container: {
        flexDirection:'row'
    },
    separatorOffset: {
        flex:2,
        flexDirection: 'row',
    },
    separator: {
        flex:8,
        flexDirection: 'row',
        borderColor: colors.primary,
        borderWidth: 1,
        opacity: 0.4,
    }
})
