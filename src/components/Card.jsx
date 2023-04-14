import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Pressable, Alert } from 'react-native';

// Icono
import Icon from '@expo/vector-icons/Ionicons';

// Helpers
import { formatearFecha } from './../helpers/index';

// Colores
import colores from '../utils/colores';

export const Card = ({
    item,
    eliminarCita,
    setModalForm,
    editarCita,
    setModalDetails,
    setPacienteDetails,
}) => {
    const { nombrePaciente, raza, fecha, id } = item;

    const handleEliminar = () => {
        Alert.alert('Eliminar Cita', 'Una vez eliminada no podrá recuperarse, ¿desea eliminar la cita?', [
            { text: 'Cancelar' },
            {
                text: 'Eliminar',
                onPress: () => {
                    eliminarCita(id);
                },
            },
        ]);
    };

    const handleEditar = () => {
        editarCita(id);
        setModalForm(true);
    };

    return (
        <Pressable
            style={styles.container}
            onPress={() => {
                setModalDetails(true);
                setPacienteDetails(item);
            }}
        >
            <View>
                <Text style={styles.name}>{nombrePaciente}</Text>
                <Text style={styles.breed}>{raza}</Text>
                <Text style={styles.date}>{formatearFecha(fecha)}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress={handleEditar}>
                    <Icon name="create" size={28} color={colores.primary} />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleEliminar}>
                    <Icon name="trash" size={28} color={colores.danger} />
                </TouchableOpacity>

                <View style={styles.line}></View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colores.accent,
        borderRadius: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'hidden',
        position: 'relative',
        paddingLeft: 20,
        marginHorizontal: 20,
        marginBottom: 20,
    },
    name: {
        color: colores.primary,
        fontSize: 34,
        fontFamily: 'fredoka',
        marginBottom: 10,
        paddingTop: 14,
    },
    breed: {
        color: colores.black,
        fontSize: 14,
        fontFamily: 'nunitoRegular',
        marginBottom: 5,
    },
    date: {
        color: colores.gray,
        fontSize: 12,
        fontFamily: 'nunitoRegular',
        marginBottom: 14,
    },
    actions: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 14,
    },
    line: {
        backgroundColor: colores.white,
        position: 'absolute',
        height: '150%',
        top: 0,
        right: 70,
        width: 2,
    },
});
