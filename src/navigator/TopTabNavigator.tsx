/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

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
                        iconName = 'chatbox-ellipses-outline';
                        break;
                    case 'ContactsScreen':
                        iconName = 'call-outline';
                        break;
                    case 'AlbumsScreen':
                        iconName = 'albums-outline';
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
                        <Text style={{ color }}>
                            <Icon name={iconName} color={color} size={20} />
                        </Text>
                    )
                };
            }}
        >
            <Tab.Screen options={{ title: 'Chat' }} name="ChatScreen" component={ChatScreen} />
            <Tab.Screen options={{ title: 'Contacts' }} name="ContactsScreen" component={ContactsScreen} />
            <Tab.Screen options={{ title: 'Album' }} name="AlbumsScreen" component={AlbumsScreen} />
        </Tab.Navigator>
    );
};
