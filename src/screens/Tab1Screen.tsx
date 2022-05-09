import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native'
import { colors, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tab1Screen = () => {

    const { top: marginTop } = useSafeAreaInsets();

    useEffect(() => {
        console.log('Tab1Screen');

    }, [])


    return (
        <View style={{ ...styles.globaMargin, paddingTop: marginTop + 10 }}>
            <Text style={styles.title}>Iconos</Text>

            <Text>

                <Icon name="basketball-outline" size={30} color={colors.primary} />;

            </Text>
        </View>
    )
}
