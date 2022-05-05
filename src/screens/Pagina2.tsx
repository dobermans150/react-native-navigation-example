import React from 'react';

import { useNavigation } from '@react-navigation/core';
import { Button, Text, View } from 'react-native';

import { styles } from '../theme/appTheme';


export const Pagina2Screen = () => {


    const navigator = useNavigation();

    return (
        <View style={styles.globaMargin}>
            <Text> Pagina2 </Text>
            <Button
                title="Ir a pagina 3"
                onPress={() => navigator.navigate('pagina3')}
            />
        </View>
    )
}
