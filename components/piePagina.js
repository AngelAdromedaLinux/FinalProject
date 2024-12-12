import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const Footer = ({ screenName }) => {
    const navigation = useNavigation(); // Hook para usar la navegación

    return (
        <View style={styles.footer}>
            {/* Botón para navegar a la pantalla de descuento */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(screenName)}>
                <Text>
                    <MaterialIcons name="chevron-right" size={50} color="black" />
                </Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    footer: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        marginBottom: 70,
        width: 50,
        height: 50,

    },
    iconContainer: {
        padding: 6,
        marginLeft: 5,
    },

});

export default Footer;
