import React from 'react';
import { Modal, StyleSheet, Text, View, ScrollView } from 'react-native';

// Componentes
import { Header } from './Header';

// Helpers
import { formatearFecha } from './../helpers/index';

// Colores
import colores from '../utils/colores';

// Svg
import SvgReport from './SvgReport';

export const Details = ({ modalDetails, setModalDetails, pacienteDetails, setPacienteDetails }) => {
    const { nombrePaciente, raza, propietario, telefono, sintomas, fecha } = pacienteDetails;

    return (
        <Modal
            visible={modalDetails}
            animationType="slide"
            onRequestClose={() => {
                setModalDetails(false);
                setPacienteDetails({});
            }}
        >
            <Header title={nombrePaciente} subtitle="Paciente" />

            <ScrollView style={styles.campos}>
                <View style={styles.campo}>
                    <Text style={styles.label}>Raza</Text>
                    <Text style={styles.text}>{raza}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Propietario</Text>
                    <Text style={styles.text}>{propietario}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Télefono</Text>
                    <Text style={styles.text}>{telefono}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Síntomas</Text>
                    <Text style={styles.text}>{sintomas}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Cita</Text>
                    <Text style={styles.text}>{formatearFecha(fecha)}</Text>
                </View>

                <View style={styles.image}>
                    <SvgReport />
                </View>
            </ScrollView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    campos: {
        marginHorizontal: 20,
        marginTop: 50,
        flex: 1,
    },
    campo: {
        marginBottom: 25,
        paddingLeft: 20,
    },
    label: {
        fontFamily: 'nunitoRegular',
        fontSize: 14,
        color: colores.gray,
    },
    text: {
        fontFamily: 'nunitoRegular',
        fontSize: 20,
        color: colores.black,
    },
    image: {
        alignItems: 'center',
        marginTop: 50,
    },
});
