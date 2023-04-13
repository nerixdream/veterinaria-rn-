import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colores from '../utils/colores';
import SvgUnicorn from './SvgUnicorn';

export const NoCitas = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No hay citas</Text>
            <SvgUnicorn />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 50,
    },
    text: {
        color: colores.black,
        fontFamily: 'nunitoRegular',
        fontSize: 22,
    },
});
