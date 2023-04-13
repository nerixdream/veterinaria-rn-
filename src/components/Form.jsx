import React, { useEffect, useState } from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    Pressable,
    TouchableOpacity,
    Alert,
} from 'react-native';

// Picker
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

// Components
import { Header } from './Header';
import { Button } from './Button';

// Helpers
import { formatearFecha } from './../helpers/index';

// Estilos Globales
import { globalStyles } from './../styles/globalStyles';

// Colores
import colores from '../utils/colores';

export const Form = ({ modalForm, setModalForm, pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombrePaciente, setNombrePaciente] = useState('');
    const [raza, setRaza] = useState('');
    const [propietario, setPropietario] = useState('');
    const [telefono, setTelefono] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [fecha, setFecha] = useState(new Date());

    // Selecciona y establece una fecha
    const showDate = () => {
        DateTimePickerAndroid.open({
            value: fecha,
            mode: 'date',
            onChange: (e, dateSelected) => {
                setFecha(dateSelected);
            },
        });
    };

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombrePaciente(paciente.nombrePaciente);
            setRaza(paciente.raza);
            setPropietario(paciente.propietario);
            setTelefono(paciente.telefono);
            setSintomas(paciente.sintomas);
            setFecha(new Date(paciente.fecha));
        }
    }, [paciente]);

    const handleAgendar = () => {
        if ([nombrePaciente, raza, propietario, telefono, sintomas].includes('')) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        const nuevoPaciente = {
            nombrePaciente,
            raza,
            propietario,
            telefono,
            sintomas,
            fecha,
        };

        if (Object.keys(paciente).length > 0) {
            // Edición
            nuevoPaciente.id = paciente.id;
            const citas = pacientes.map(item => (item.id === paciente.id ? nuevoPaciente : item));
            setPacientes(citas);
            setPaciente({});
        } else {
            // Registro nuevo
            nuevoPaciente.id = Date.now();
            setPacientes([...pacientes, nuevoPaciente]);
        }

        setModalForm(false);

        setNombrePaciente('');
        setRaza('');
        setPropietario('');
        setTelefono('');
        setSintomas('');
        setFecha(new Date());
    };

    return (
        <Modal
            visible={modalForm}
            animationType="slide"
            onRequestClose={() => {
                setModalForm(false);
                setPaciente({});
                setNombrePaciente('');
                setRaza('');
                setPropietario('');
                setTelefono('');
                setSintomas('');
                setFecha(new Date());
            }}
        >
            <Header
                title={Object.keys(paciente).length > 0 ? 'Editar' : 'Agendar'}
                subtitle="Cita"
                type="down"
            />

            <ScrollView style={[styles.campos, globalStyles.margin]} showsVerticalScrollIndicator={false}>
                <View style={styles.campo}>
                    <Text style={styles.label}>Paciente</Text>
                    <TextInput
                        placeholder="Nombre del paciente"
                        placeholderTextColor={colores.gray}
                        style={styles.input}
                        value={nombrePaciente}
                        onChangeText={setNombrePaciente}
                    />
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Raza</Text>
                    <TextInput
                        placeholder="Raza del paciente"
                        placeholderTextColor={colores.gray}
                        style={styles.input}
                        value={raza}
                        onChangeText={setRaza}
                    />
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Propietario</Text>
                    <TextInput
                        placeholder="Nombre del propietario"
                        placeholderTextColor={colores.gray}
                        style={styles.input}
                        value={propietario}
                        onChangeText={setPropietario}
                    />
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Télefono</Text>
                    <TextInput
                        placeholder="Télefono del propietario"
                        placeholderTextColor={colores.gray}
                        style={styles.input}
                        keyboardType="phone-pad"
                        value={telefono}
                        onChangeText={setTelefono}
                        maxLength={10}
                    />
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Síntomas</Text>
                    <TextInput
                        placeholder="Síntomas del paciente"
                        placeholderTextColor={colores.gray}
                        style={styles.input}
                        multiline
                        numberOfLines={6}
                        textAlignVertical="top"
                        value={sintomas}
                        onChangeText={setSintomas}
                    />
                </View>

                <View style={styles.fechaContenedor}>
                    <Pressable style={styles.botonCita} onPress={showDate}>
                        <Text style={styles.botonCitaTexto}>Cita:</Text>
                    </Pressable>
                    <Text style={styles.textoCita}>{formatearFecha(fecha)}</Text>
                </View>

                <View style={{ marginTop: 70, marginBottom: 50 }}>
                    <TouchableOpacity onPress={handleAgendar}>
                        <Button text={Object.keys(paciente).length > 0 ? 'Editar' : 'Agendar'} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    campos: {
        marginTop: 50,
        marginBottom: 10,
    },
    campo: {
        marginBottom: 20,
    },
    label: {
        color: colores.black,
        fontFamily: 'nunitoRegular',
        fontSize: 20,
        marginBottom: 5,
    },
    input: {
        backgroundColor: colores.accent,
        borderRadius: 8,
        fontFamily: 'nunitoRegular',
        fontSize: 14,
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    fechaContenedor: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    botonCita: {
        backgroundColor: colores.accent,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 25,
    },
    botonCitaTexto: {
        color: colores.black,
        fontFamily: 'nunitoRegular',
        fontSize: 20,
    },
    textoCita: {
        color: colores.black,
        fontFamily: 'nunitoRegular',
        fontSize: 14,
    },
});
