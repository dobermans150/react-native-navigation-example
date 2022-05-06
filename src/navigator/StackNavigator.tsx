import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2';
import { Pagina3Screen } from '../screens/Pagina3';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RootStackParams = {
    pagina1: undefined,
    pagina2: undefined,
    pagina3: undefined,
    personaScreen: { id: number, nombre: string },
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            /* initialRouteName='pagina2' */
            screenOptions={{

                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                },
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}
        >
            <Stack.Screen name="pagina1" options={{
                title: "pagina1"
            }} component={Pagina1Screen} />
            <Stack.Screen name="pagina2" options={{
                title: "pagina2"
            }} component={Pagina2Screen} />
            <Stack.Screen name="pagina3" options={{
                title: "pagina3"
            }} component={Pagina3Screen} />
            <Stack.Screen name="personaScreen" options={{
                title: "persona"
            }} component={PersonaScreen} />
        </Stack.Navigator>
    );
}
