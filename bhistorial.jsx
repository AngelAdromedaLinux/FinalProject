import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BHistorial = () => {

  const handlePress = () => {
    alert('Testing');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Historial de viajes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',  // Centrar en la pantalla
    
  },
  button: {
    backgroundColor: '#00A2E8',  // Color verde del botón
    padding: 15,                 // Espaciado interno del botón
    borderRadius: 10,             // Cuadrado (sin bordes redondeados)
    width: 200,                  // Ancho del botón
    alignItems: 'center',        // Centrar el texto dentro del botón
  },
  buttonText: {
    color: 'white',              // Color del texto
    fontSize: 18,                // Tamaño del texto
    fontWeight: 'bold',          // Negrita
  },
});

export default BHistorial;
