import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const ButtonMap = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Botón para ir a GasolinerasScreen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Four')}
      >
        {/* <MaterialCommunityIcons name="gas-station" size={30} color="white" /> */}
        <Text style={styles.buttonText}>Gasolineras Cercanas</Text>
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
    backgroundColor: "#26B583",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default ButtonMap;
