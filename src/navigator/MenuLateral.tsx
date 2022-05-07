import React, { useEffect, useState } from 'react';
import { Image, useWindowDimensions, View, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import { BottomTabsNavigation } from './BottomTabsNavigation';

export type RootDrawerParams = {
    BottomTabsNavigator: undefined;
    SettingsScreen: undefined;
}

const Drawer = createDrawerNavigator<RootDrawerParams>();

type DrawerType = 'front' | 'permanent' | 'back' | 'slide' | undefined;



export const MenuLateral = () => {

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
                sceneContainerStyle: { backgroundColor: 'white' },
            }}
            drawerContent={(props) => <MenuInterno {...props} />}

        >
            <Drawer.Screen name="BottomTabsNavigator" options={{ title: 'Tabs' }} component={BottomTabsNavigation} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
};


const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>

            {/* Parte del Avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones de menu */}
            <View style={styles.menuContainer}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('BottomTabsNavigator')}
                    style={styles.menuBoton}
                >
                    <Text style={styles.menuTexto}>Tabs</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SettingsScreen')}
                    style={styles.menuBoton}
                >
                    <Text style={styles.menuTexto}>Settings</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    );
};

