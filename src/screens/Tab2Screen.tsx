import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

export const Tab2Screen = () => {


    useEffect(() => {
        console.log('Tab2Screen');

    }, [])

    return (
        <View>
            <Text>Tab 2</Text>
        </View>
    )
}
