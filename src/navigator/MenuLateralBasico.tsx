import React, { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

type DrawerType = 'front' | 'permanent' | 'back' | 'slide' | undefined;



export const MenuLateralBasico = () => {

    const { width } = useWindowDimensions();
    const [drawType, setdrawType] = useState<DrawerType>('front');

    useEffect(() => {
        width >= 768 ? setdrawType('permanent') : setdrawType('front');
    }, [width]);


    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerType: drawType,
            }}

        >
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}
