import { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

// Expo
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';

// Componentes
import { Header } from './src/components/Header';
import { Button } from './src/components/Button';
import { NoCitas } from './src/components/NoCitas';
import { Card } from './src/components/Card';
import { Form } from './src/components/Form';
import { Details } from './src/components/Details';

// Estilos globales
import { globalStyles } from './src/styles/globalStyles';

// Colores
import colores from './src/utils/colores';

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
    const eliminarCita = id => {
        const nuevosPacientes = pacientes.filter(citas => citas.id !== id);
        setPacientes(nuevosPacientes);
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
