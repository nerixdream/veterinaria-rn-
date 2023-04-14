import { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

// Expo
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';

// Componentes
import { Header, Button, NoCitas, Card, Form, Details } from './src/components';

// Estilos globales
import { globalStyles } from './src/styles/globalStyles';

// Colores
import colores from './src/utils/colores';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
    const [modalForm, setModalForm] = useState(false);
    const [modalDetails, setModalDetails] = useState(false);
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});
    const [pacienteDetails, setPacienteDetails] = useState({});

    const [fontsLoaded] = useFonts({
        fredoka: require('./assets/fonts/FredokaOne-Regular.ttf'),
        nunitoLight: require('./assets/fonts/Nunito-Light.ttf'),
        nunitoRegular: require('./assets/fonts/Nunito-Regular.ttf'),
        nunitoBold: require('./assets/fonts/Nunito-Bold.ttf'),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    useEffect(() => {
        const obtenerCitasAsyncStorage = async () => {
            const citas = (await AsyncStorage.getItem('citasVeterinaria')) || [];
            setPacientes(JSON.parse(citas));
        };
        obtenerCitasAsyncStorage();
    }, []);

    useEffect(() => {
        const pacientesOrdenados = pacientes.sort((a, b) => {
            return new Date(a.fecha).getTime() > new Date(b.fecha).getTime();
        });
        setPacientes(pacientesOrdenados);
    }, [pacientes]);

    const onLayout = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    // Elimina una cita
    const eliminarCita = async id => {
        const nuevosPacientes = pacientes.filter(citas => citas.id !== id);
        setPacientes(nuevosPacientes);
        try {
            await AsyncStorage.setItem('citasVeterinaria', JSON.stringify(nuevosPacientes));
        } catch (error) {
            console.log({ error });
        }
    };

    const editarCita = id => {
        const pacienteEditar = pacientes.filter(cita => cita.id === id);
        setPaciente(pacienteEditar[0]);
    };

    return (
        <View style={[styles.container, globalStyles.safeAreaAndroid]} onLayout={onLayout}>
            <Header title="Life" subtitle="Veterinaria" />

            <View style={[globalStyles.margin, { marginTop: 50 }]}>
                <TouchableOpacity onPress={() => setModalForm(true)}>
                    <Button text="Nueva Cita" />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }}>
                {pacientes.length > 0 ? (
                    <FlatList
                        data={pacientes}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <Card
                                    item={item}
                                    eliminarCita={eliminarCita}
                                    setModalForm={setModalForm}
                                    editarCita={editarCita}
                                    setModalDetails={setModalDetails}
                                    setPacienteDetails={setPacienteDetails}
                                />
                            );
                        }}
                        style={{ marginTop: 50 }}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <NoCitas />
                )}
            </View>

            <Form
                modalForm={modalForm}
                setModalForm={setModalForm}
                pacientes={pacientes}
                setPacientes={setPacientes}
                paciente={paciente}
                setPaciente={setPaciente}
            />

            <Details
                modalDetails={modalDetails}
                setModalDetails={setModalDetails}
                pacienteDetails={pacienteDetails}
                setPacienteDetails={setPacienteDetails}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colores.background,
    },
});
