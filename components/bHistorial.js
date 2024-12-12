import React from 'react';
import { View, TouchableOpacity,Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa el hook


const BHistorial = () => {
const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Botón para navegar a la pantalla de descuento */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Three')}>
        <Text style={styles.buttonText}>Historial</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#00A2E8",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default BHistorial;
