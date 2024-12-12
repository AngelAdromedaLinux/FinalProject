import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "D:/Reac/ProyectoCODE-main/components/firebase";

const HistorialScreen = () => {
  const [calculos, setCalculos] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchCalculos = async () => {
      try {
        if (user) {
          const q = query(collection(db, "calculos"), where("uid", "==", user.uid));
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setCalculos(data);
        }
      } catch (error) {
        console.error("Error al obtener los cálculos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCalculos();
  }, [user]);

  const eliminarCalculo = async (id) => {
    try {
      await deleteDoc(doc(db, "calculos", id));
      Alert.alert("Eliminado", "El cálculo ha sido eliminado con éxito.");
      setCalculos(calculos.filter((calculo) => calculo.id !== id));
    } catch (error) {
      console.error("Error al eliminar el cálculo:", error);
      Alert.alert("Error", "No se pudo eliminar el cálculo.");
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Cargando historial...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {calculos.length === 0 ? (
        <Text style={styles.noDataText}>No hay cálculos registrados.</Text>
      ) : (
        <FlatList
          data={calculos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>Distancia: {item.distancia} km</Text>
              <Text style={styles.itemText}>Costo: {item.costoEstimado}</Text>
              <Text style={styles.itemText}>Gasolina: {item.cantidadGasolina}</Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => eliminarCalculo(item.id)}
              >
                <Text style={styles.deleteButtonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  loadingText: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginTop: 20,
  },
  noDataText: {
    fontSize: 18,
    color: "#777",
    textAlign: "center",
    marginTop: 20,
  },
  itemContainer: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: "#ff4d4d",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HistorialScreen;
