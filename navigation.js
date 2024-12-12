import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CostoScreen from "./src/screens/CostoScreen";
import DescuentoScreen from "./src/screens/DescuentoScreen";
import Encabezado from "./components/encabezado";
import HistorialScreen from "./src/screens/HistorialScreen";
import GasolinerasScreen from "./src/screens/GasolinerasScreen";
import Login from "./src/screens/login";
import SignUp from "./src/screens/SingUp";


const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Costo Combustible">
      <Stack.Screen
        name="Home"
        component={Login}
        options={{ header: () => <Encabezado name="Iniciar Sesion" iconName="attach-money"  /> }}
      />

      <Stack.Screen
        name="Second"
        component={DescuentoScreen}
        options={{ header: () => <Encabezado name="Descuento" iconName="discount"/> }}
      />
      <Stack.Screen
        name="Three"
        component={HistorialScreen}
        options={{ header: () => <Encabezado name="Historial de Costos" iconName="access-time" /> }}
      />
       <Stack.Screen
        name="Four"
        component={GasolinerasScreen}
        options={{ header: () => <Encabezado name="Gasolineras Cercanas" iconName="local-gas-station" /> }}
      />
      <Stack.Screen
        name="Five"
        component={CostoScreen}
        options={{ header: () => <Encabezado name="Costo del combustible" iconName="attach-money" /> }}
      />
      <Stack.Screen
        name="Six"
        component={SignUp}
        options={{ header: () => <Encabezado name="Registro de usuario" iconName="attach-money" /> }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;