import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colores from '../utils/colores';

export const Button = ({ text = 'Sin contenido' }) => {
    return (
        <View style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colores.primary,
        alignSelf: 'center',
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 14,
    },
    buttonText: {
        color: colores.white,
        fontSize: 22,
        fontFamily: 'nunitoRegular',
    },
});
