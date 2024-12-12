import * as Location from 'expo-location';
import { Alert } from 'react-native';

export const getCurrentLocation = async() => {
    const response = {status: false, location:null}
    const resultPermissions = await Permissions.askAsync(Permissions.LOCATION)
    if(resultPermissions.status === "denied"){
        Alert.alert('Debes dar los permisos de localización.');
        return response;
    }

    const position = await Location.getCurrentPositionAsync({})
    const location= {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
    }
    response.status = true
    response.location = location
    return response
}