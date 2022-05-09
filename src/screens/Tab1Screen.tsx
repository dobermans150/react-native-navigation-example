import React, { useEffect } from 'react';

import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

    const { top: marginTop } = useSafeAreaInsets();


    useEffect(() => {
        console.log('Tab1Screen');

    }, [])


    return (
        <View style={{ ...styles.globaMargin, paddingTop: marginTop + 10 }}>
            <Text style={styles.title}>Iconos</Text>
            <TouchableIcon iconName="american-football-outline" />
        </View>
    )
}
