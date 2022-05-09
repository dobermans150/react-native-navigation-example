/* eslint-disable react-hooks/exhaustive-deps */
import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'personaScreen'> { }
/*
interface RouteParams {
    id: number,
    nombre: string
}
 */
export const PersonaScreen = ({ navigation, route }: Props) => {

    const params = route.params;
    const { changeUser, authState: { isLoggeedIn } } = useContext(AuthContext);

    useEffect(() => {

        navigation.setOptions({
            title: params.nombre,
        });

    }, []);

    useEffect(() => {
        isLoggeedIn && changeUser(params.nombre);
    }, []);


    return (
        <View style={styles.globaMargin}>
            <Text style={styles.title}>
                {JSON.stringify(params, null, 3)}
            </Text>
        </View>
    );
};
