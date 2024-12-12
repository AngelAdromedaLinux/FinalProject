

import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "D:/Reac/ProyectoCODE-main/components/firebase"; // Asegúrate de ajustar la ruta según tu proyecto


const Resultado = ({ disAViajar, gastoKlm, precioGas, limpiar }) => {
  const [costoEstimado, setCostoEstimado] = useState(
    `$`
  );
  const [cantidadGasolina, setCantidadGasolina] = useState(
    "0"
  );


  const calcularResultado = () => {
    // Calcular la cantidad estimada de gasolina necesaria
    const gasolina = disAViajar * gastoKlm;

    // Calcular el costo estimado del combustible
    const costo = gasolina * precioGas;

    // Actualizar los valores usando setCostoEstimado y setCantidadGasolina
    setCostoEstimado(`$${costo.toFixed(2)}`);
    setCantidadGasolina(`${gasolina.toFixed(2)} litros`);


  // Guardar los datos en Firestore
  guardarCalculo(costo.toFixed(2), gasolina.toFixed(2));
  };

  const guardarCalculo = async (costo, gasolina) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
  
      if (!user) {
        console.error("No hay usuario autenticado.");
        return;
      }
  
      const uid = user.uid;
  
      await addDoc(collection(db, "calculos"), {
        uid: uid,
        distancia: disAViajar,
        gastoPorKlm: gastoKlm,
        precioGasolina: precioGas,
        costoEstimado: costo,
        cantidadGasolina: gasolina,
        fecha: new Date().toISOString(),
      });
  
      console.log("Cálculo guardado correctamente en Firestore.");
    } catch (error) {
      console.error("Error al guardar el cálculo en Firestore:", error);
    }
  };
  

  const limpiarCampos = () => {
    setCostoEstimado(`$`);
    setCantidadGasolina("0");
  };
  // Llamamos a la función limpiar si está definida como prop
  if (limpiar) limpiar(limpiarCampos);

  return (
    <View style={styles.resultContainer}>
      <TouchableOpacity style={styles.button} onPress={() => calcularResultado()}>
        <Text style={styles.buttonText}>Mostrar Resultado</Text>
      </TouchableOpacity>
      <View style={styles.resultContainer}>
        <Text style={styles.label}>Costo estimado</Text>
        <TextInput
          style={styles.input}
          value={costoEstimado}
          editable={false} // TextInput no editable
        />
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.label}>Cantidad estimada de gasolina</Text>
        <TextInput
          style={styles.input}
          value={cantidadGasolina}
          editable={false} // TextInput no editable
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  resultContainer: {
    marginBottom: 15,
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  label: {
    fontSize: 17,
    fontWeight: "black",
    color: "#000",
    marginBottom: 10,
  },
  input: {
    fontSize: 15,
    color: "#888",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderColor: "#DDD",
    borderWidth: 1,
  },
  button: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Resultado;
