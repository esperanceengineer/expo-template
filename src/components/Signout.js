import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import colors from '../api/color';

const PasswordButton = ({
  name,
  singOut
}) => (
  <TouchableOpacity onPress={() => singOut()} >
    <View style={[styles.container]}>
      <View style={styles.iconRow}>
        <Icon
          name="ios-log-out"
          underlayColor="transparent"
          iconStyle={styles.emailIcon}
          type='ionicon'
        />
      </View>

      <View style={styles.emailRow}>
        <View style={styles.emailColumn}>
          <Text style={styles.emailText}>{name}</Text>
        </View>
      </View>

    </View>
  </TouchableOpacity>
);

export default PasswordButton;

const styles = StyleSheet.create({
    container: {
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
        alignItems: 'center',
    },
    emailText: {
        fontSize: 18,
        fontWeight:'bold',
        color: 'black'
    }
})
