import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BCalculo = () => {

  const handlePress = () => {
    alert('Testing');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',  
    
  },
  button: {
    backgroundColor: '#FF7F27',  
    padding: 15,                 
    borderRadius: 10,             
    width: 150,                  
    alignItems: 'center',        
  },
  buttonText: {
    color: 'white',             
    fontSize: 18,               
    fontWeight: 'bold',          
  },
});

export default BCalculo;
