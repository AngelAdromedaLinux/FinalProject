import React, { useState } from 'react';
import { View, TouchableOpacity, Button, TextInput, ScrollView, StyleSheet, Text, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import fireBase from 'D:/Reac/ProyectoCODE-main/components/firebase';
import { useNavigation } from '@react-navigation/native';

const auth = getAuth(fireBase.app); // Obtener la instancia de autenticación de Firebase
const Login = () => {
    const navigation = useNavigation(); // Para navegar a la pantalla Home
    const [state, setState] = useState({
        usuario: '',
        contrasena: ''
    });

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value });
    };

    const loginRequest = async () => {
        const { usuario, contrasena } = state;

        // Verificar que los campos no estén vacíos
        if (!usuario || !contrasena) {
            Alert.alert('Error', 'Por favor ingrese un correo y una contraseña');
            return;
        }

        try {
            // Iniciar sesión con Firebase
            await signInWithEmailAndPassword(auth, usuario, contrasena);
            Alert.alert('iniciando secion','accediendo...')
  

            // Si todo va bien, navegar a la pantalla 'Home'
            navigation.navigate('Five');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            Alert.alert('Error', 'Usuario o contraseña incorrectos');
        }
    };

return (
        <ScrollView style={estilos.contenedor}>
            <View style={estilos.cajaTexto}>
                <TextInput 
                    placeholder="Correo" 
                    onChangeText={(value) => handleChangeText('usuario', value)} 
                    value={state.usuario} 
                />
            </View>
            <View style={estilos.cajaTexto}>
                <TextInput 
                    placeholder="Contraseña" 
                    secureTextEntry={false}
                    onChangeText={(value) => handleChangeText('contrasena', value)} 
                    value={state.contrasena} 
                />
            </View>
            <View>
                <Button title="Iniciar sesión" onPress={loginRequest} />
                <TouchableOpacity style={estilos.switcherButton} onPress={() => navigation.navigate('Six')}>
                    <Text style={estilos.switcherText}>¿Aún no tienes cuenta? Registrate aquí</Text>
                </TouchableOpacity> 
            </View>
        </ScrollView>
    );
};

const estilos = StyleSheet.create({
    input: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    cajaTexto:{
        paddingVertical:20,
        backgroundColor:'#cccccc40',
        borderRadius:40,
        marginVertical:10
    },
    contenedor: {
        flex: 1,
        padding: 35
    },
    switcherButton: {
        marginTop: 10, // Separa un poco el botón
        alignItems: 'center',
    },
    switcherText: {
        color: '#007BFF', // Azul clásico para enlaces
        fontSize: 14, // Texto un poco más pequeño que el del botón principal
    }
});

export default Login;