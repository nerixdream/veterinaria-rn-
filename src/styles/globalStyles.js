import { StyleSheet, StatusBar, Platform } from 'react-native';

export const globalStyles = StyleSheet.create({
    safeAreaAndroid: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    margin: {
        marginHorizontal: 20,
    },
});
