/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> { }


export const Pagina1Screen = ({ navigation }: Props) => {




    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title="Menu"
                    onPress={() => navigation.toggleDrawer()}
                />
            ),
        });
    }, []);


    return (
        <View style={styles.globaMargin}>
            <Text style={styles.title}>Pagina1</Text>
            <Button
                title="Ir a pagina 2"
                onPress={() => navigation.navigate('pagina2')}
            />

            <Text style={{
                marginVertical: 20,
                fontSize: 20,
            }}>
                Navegar con argumentos
            </Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{ ...styles.botonGrande, backgroundColor: '#5856D6' }}
                    onPress={() => navigation.navigate('personaScreen', {
                        id: 1,
                        nombre: 'Pedrusco',
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ ...styles.botonGrande, backgroundColor: '#FF9427' }}
                    onPress={() => navigation.navigate('personaScreen', {
                        id: 2,
                        nombre: 'Mariana',
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>Maria</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
