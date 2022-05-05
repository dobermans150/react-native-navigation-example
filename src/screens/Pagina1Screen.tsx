import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {

}


export const Pagina1Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globaMargin}>
            <Text> Pagina1 </Text>
            <Button
                title="Ir a pagina 2"
                onPress={() => navigation.navigate('pagina2')}
            />
        </View>
    );
};
