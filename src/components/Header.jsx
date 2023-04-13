import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Colores
import colores from '../utils/colores';

export const Header = ({ title = 'Sin Titulo', subtitle = 'Sin Subtitulo', type = 'up' }) => {
    return (
        <View style={styles.container}>
            <Text style={type === 'up' ? styles.title : styles.subtitle}>{title}</Text>
            <Text style={type === 'up' ? styles.subtitle : styles.title}>{subtitle}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colores.accent,
        borderRadius: 14,
        height: 170,
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    title: {
        fontFamily: 'fredoka',
        fontSize: 42,
        color: colores.primary,
    },
    subtitle: {
        color: colores.black,
        fontFamily: 'nunitoRegular',
        fontSize: 28,
        letterSpacing: 3,
    },
});
