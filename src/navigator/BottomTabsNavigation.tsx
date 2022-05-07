import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native-paper';
import { Platform } from 'react-native';


export const BottomTabsNavigation = () => {
    return Platform.OS === 'ios'
        ? <BottomTabsIos />
        : <BottomTabsAndroid />;
};




const BottomTabAndroid = createMaterialBottomTabNavigator();

const BottomTabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colors.primary,
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1';
                            break;
                        case 'Tab2Screen':
                            iconName = 'T2';
                            break;
                        case 'StackNavigator':
                            iconName = 'ST';
                            break;
                    }
                    return (
                        <Text style={{ color }}>{iconName}</Text>
                    );
                },

            })}
        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab 2' }} component={Tab2Screen} />
            <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
};



const BottomTabIos = createBottomTabNavigator();

const BottomTabsIos = () => {
    return (
        <BottomTabIos.Navigator
            sceneContainerStyle={{ backgroundColor: 'white' }}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIcon: ({ color }) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1';
                            break;
                        case 'Tab2Screen':
                            iconName = 'T2';
                            break;
                        case 'StackNavigator':
                            iconName = 'ST';
                            break;
                    }
                    return (
                        <Text style={{ color }}>{iconName}</Text>
                    );
                },

            })}
        >
            {/*  tabBarIcon: ({ color, focused, size }) => <Text style={{ color }} > T1 </Text> */}
            <BottomTabIos.Screen name="Tab1Screen" options={{ title: 'Tab 1', }} component={Tab1Screen} />
            <BottomTabIos.Screen name="Tab2Screen" options={{ title: 'Tab 2' }} component={Tab2Screen} />
            <BottomTabIos.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomTabIos.Navigator>
    );
}
