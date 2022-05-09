/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top: paddingTop } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{ paddingTop }}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => {
                let iconName: string = '';
                switch (route.name) {
                    case 'ChatScreen':
                        iconName = 'CH';
                        break;
                    case 'ContactsScreen':
                        iconName = 'CO';
                        break;
                    case 'AlbumsScreen':
                        iconName = 'AL';
                        break;
                }
                return {
                    tabBarPressColor: colors.primary,
                    tabBarShowIcon: true,
                    tabBarIndicatorStyle: {
                        backgroundColor: colors.primary,
                    },
                    tabBarStyle: {
                        shadowColor: 'transparent',
                        elevation: 0,
                    },
                    tabBarIcon: ({ color }) => (
                        <Text style={{ color }}>{iconName}</Text>
                    )
                };
            }}
        >
            <Tab.Screen name="ChatScreen" component={ChatScreen} />
            <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
            <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
        </Tab.Navigator>
    );
};
