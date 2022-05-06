/* eslint-disable react-native/no-inline-styles */
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {

}


export const Pagina1Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globaMargin}>
            <Text style={styles.title}> Pagina1 </Text>
            <Button
                title="Ir a pagina 2"
                onPress={() => navigation.navigate('pagina2')}
            />
            <Button
                title="ir Persona"
                onPress={() => navigation.navigate('personaScreen')}
            />

            <Text>Navegar con argumentos</Text>

            <View style={{ flexDirection: 'row', }}>
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
