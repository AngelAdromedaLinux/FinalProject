import React from 'react';
import { Text, View } from 'react-native';

const Inputs = () => {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Escribe algo aquí..."
        />
        <Text style={styles.definicion}>
          Distancia a viajar
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe algo aquí..."
        />
        <Text style={styles.definicion}>
          Gasto de gasolina por Klm
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe algo aquí..."
        />
        <Text style={styles.definicion}>
          Precio de la gasolina
        </Text>

        <Text style={styles.text}>Aplicar descuento</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#8A2BE2' }}  
        thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}      
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Historial de viajes</Text>
      </TouchableOpacity>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    definicion: {
      fontSize: 14,
      color: 'gray',
    },button: {
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
    

export default Inputs;
