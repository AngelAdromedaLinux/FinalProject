import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; // Para usar la navegación
import limpiar from './limpiarCost';


 
 const Encabezado = ({name,iconName,limpiar}) => {
   const navigation = useNavigation();
   return (
     <View style={styles.header}>
       {/* Botón para abrir el menú y navegar */}
       <TouchableOpacity onPress={() => navigation.navigate('Second')} style={styles.iconContainer}>
         <MaterialIcons name={iconName} size={30} color="white" />
         <Text style={styles.menuText}>{name}</Text>
       </TouchableOpacity>

       {/* Botón para limpiar */}
       <TouchableOpacity onPress={limpiar} style={styles.iconContainer}>
         <MaterialIcons name="delete-outline" size={30} color="white" />
       </TouchableOpacity>
     </View>
   );
 };

 const styles = StyleSheet.create({
   header: {
     backgroundColor: '#ADD8E6', // Azul claro
     padding: 20,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
   },
   headerText: {
     fontSize: 20,
     fontWeight: 'bold',
     color: 'white',
   },
   iconContainer: {
     flexDirection: 'row',
     alignItems: 'center',
   },
   menuText: {
     fontSize: 20,
     color: 'white',
     marginLeft: 5,
   },
 });

export default Encabezado;
