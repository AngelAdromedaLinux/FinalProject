import { View } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text, PermissionsAndroid, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline } from "react-native-maps";
import Geolocation from 'react-native-geolocation-service';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permiso de Geolocalizacion',
        message: 'Acceder a tu ubicacion en tiempo real',
        buttonNeutral: 'Preguntame despues',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    return false;
  }
};

const GasolinerasScreen = () => {
  const [location, setLocation] = useState(false);
  const [destination, setDestination] = useState({
    latitude: 20.040706541825397,
    longitude: -102.28358628206071,
  });

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            setLocation(position);
          },
          error => {
            console.error('Geolocation error:', error);
            setLocation(false);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location?.coords?.latitude,
          longitude: location?.coords?.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        {location?.coords && (
          <Marker
            draggable
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        )}
        <Marker draggable coordinate={destination} />
        {location?.coords && (
          <Polyline
            coordinates={[
              { latitude: location.coords.latitude, longitude: location.coords.longitude },
              destination,
            ]}
            strokeColor="blue"
            strokeWidth={4}
          />
        )}
      </MapView>
      <TouchableOpacity style={styles.obtenerUbicacion} onPress={getLocation}>
        <Text>Obtener Ubicación Actual</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GasolinerasScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  obtenerUbicacion: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#cccccc',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '80%',
  },
});
