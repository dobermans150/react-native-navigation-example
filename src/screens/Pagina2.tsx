import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/core';
import { Button, Text, View } from 'react-native';

import { styles } from '../theme/appTheme';


export const Pagina2Screen = () => {


    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola mundo',
            headerBackTitle: '',
        })
    }, [])


    return (
        <View style={styles.globaMargin}>
            <Text style={styles.title}> Pagina2 </Text>
            <Button
                title="Ir a pagina 3"
                onPress={() => navigator.navigate('pagina3')}
            />
        </View>
    )
}
