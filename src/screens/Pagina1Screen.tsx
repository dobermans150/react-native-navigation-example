/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors, styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> { }


export const Pagina1Screen = ({ navigation }: Props) => {




    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.toggleDrawer()}
                    style={{
                        width: 40,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 10,
                    }}
                    activeOpacity={0.8}
                >
                    <View>
                        <Text>
                            <Icon name="menu-outline" color={colors.primary} size={35} />
                        </Text>
                    </View>
                </TouchableOpacity>
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
                    <Icon name="body-outline" size={35} color="white" />
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ ...styles.botonGrande, backgroundColor: '#FF9427' }}
                    onPress={() => navigation.navigate('personaScreen', {
                        id: 2,
                        nombre: 'Mariana',
                    })}
                >
                    <Icon name="woman-outline" size={35} color="white" />
                    <Text style={styles.botonGrandeTexto}>Maria</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
