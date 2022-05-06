import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { }

export const Pagina3Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.globaMargin}>
            <Text style={styles.title}> Pagina3 </Text>
            <Button
                title="Regresar"
                onPress={() => navigation.pop()}
            />
            <Button
                title="Ir al Home"
                onPress={() => navigation.popToTop()} />
        </View>
    )
}
