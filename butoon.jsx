import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const TogleB = () => {
  const [isEnabled, setIsEnabled] = useState(true);  

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aplicar descuento</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#8A2BE2' }}  
        thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}      
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: 25,
  },
  text: {
    fontSize: 22,
  },
});

export default TogleB;
