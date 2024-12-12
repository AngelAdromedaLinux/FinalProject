// export default DescuentoScreen;
import React, {  useState, useEffect, useLayoutEffect } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Footer from '../../components/piePagina';
import Encabezado from '../../components/encabezado';

const DescuentoScreen = ({navigation}) => {
  const [desData, setDesData] = useState({
    impuesto: "",
    precioOriginal: "",
    porcDescuento: "",
    cantAhorrada: "",
    precioFinal: ""
  });

  const limpiarCampos = () => {
    setDesData({
      impuesto: "",
      precioOriginal: "",
      porcDescuento: "",
      cantAhorrada: "",
      precioFinal: ""
    });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Encabezado name="Descuento" iconName="discount" limpiar={limpiarCampos} />
    });
  }, [navigation]);

  const calcularDescuento = () => {
    const impuesto = parseFloat(desData.impuesto) || 0;
    const precio = parseFloat(desData.precioOriginal) || 0;
    const porDes = parseFloat(desData.porcDescuento) || 0;

    if (precio && porDes) {
      const cantidadAhorrada = precio * (porDes / 100);
      const precioConDescuento = precio - cantidadAhorrada;
      const precioFinal = precioConDescuento + (precioConDescuento * (impuesto / 100));

      setDesData({
        ...desData,
        cantAhorrada: cantidadAhorrada.toFixed(2),
        precioFinal: precioFinal.toFixed(2)
      });
    }
  };

  useEffect(() => {
    if (desData.precioOriginal && desData.porcDescuento) {
      calcularDescuento();
    }
  }, [desData.impuesto, desData.precioOriginal, desData.porcDescuento]);
  
  

  return (
    <View style={styles.container}>

      <Text style={styles.definicion}>Impuestos +</Text>
      <TextInput
        style={styles.input}
        placeholder="%"
        value={desData.impuesto}
        onChangeText={(text) => setDesData({ ...desData, impuesto: text })}
        keyboardType="numeric"
      />

      <Text style={styles.definicion}>Precio Original</Text>
      <TextInput
        style={styles.input}
        placeholder="$"
        value={desData.precioOriginal}
        onChangeText={(text) => setDesData({ ...desData, precioOriginal: text })}
        keyboardType="numeric"
      />

      

      <Text style={styles.definicion}>% de Descuento</Text>
      <TextInput
        style={styles.input}
        placeholder="% "
        value={desData.porcDescuento}
        onChangeText={(text) => setDesData({ ...desData, porcDescuento: text })}
        keyboardType="numeric"
      />

      <Text style={styles.definicion}>Cantidad ahorrada</Text>
      <TextInput
        style={styles.input}
         placeholder="-$"
         value={desData.cantAhorrada}
        onChangeText={(text) => setDesData({ ...desData, cantAhorrada: text })}
        editable={false}
      />

      <Text style={styles.definicion}>Precio Final</Text>
      <TextInput
       style={styles.input}
        placeholder="$$$"
        value={desData.precioFinal}
        onChangeText={(text) => setDesData({ ...desData, precioFinal: text })}
        editable={false}
      />

      <View>
        <Footer screenName="Three" />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex',
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
    padding: 20,

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  definicion: {
    fontSize: 17,
    color: 'black',
  },

});

export default DescuentoScreen;

// import React from 'react';
// import { Text, View } from 'react-native';



// const DescuentoScreen = ({ route }) => {
//     // const { nombre } = route.params;
//     const [calcular, setCalcular] = useState(route.params.calcular);

//     const calcularGasto = () => {
//        setCalcular('C');
//     return (
//         <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           placeholder="Escribe algo aquí..."
//         />
//         <Text style={styles.definicion}>
//           Distancia a viajar
//         </Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Escribe algo aquí..."
//         />
//         <Text style={styles.definicion}>
//           Gasto de gasolina por Klm
//         </Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Escribe algo aquí..."
//         />
//         <Text style={styles.definicion}>
//           Precio de la gasolina
//         </Text>

//         <Text style={styles.text}>Aplicar descuento</Text>
//       <Switch
//         trackColor={{ false: '#767577', true: '#8A2BE2' }}
//         thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//         style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
//       />
//       <TouchableOpacity style={styles.button} onPress={handlePress}>
//         <Text style={styles.buttonText}>Calcular</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handlePress}>
//         <Text style={styles.buttonText}>Historial de viajes</Text>
//       </TouchableOpacity>
//       </View>
//     );
//  };
//  const styles = StyleSheet.create({
//     container: {
//       padding: 20,
//     },
//     input: {
//       height: 40,
//       borderColor: 'gray',
//       borderWidth: 1,
//       marginBottom: 10,
//       paddingHorizontal: 10,
//     },
//     definicion: {
//       fontSize: 14,
//       color: 'gray',
//     },button: {
//       backgroundColor: '#FF7F27',
//       padding: 15,
//       borderRadius: 10,
//       width: 150,
//       alignItems: 'center',
//     },
//     buttonText: {
//       color: 'white',
//       fontSize: 18,
//       fontWeight: 'bold',
//     },
//   });
