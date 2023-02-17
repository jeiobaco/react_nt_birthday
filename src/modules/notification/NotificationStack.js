

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NotificationScreen from './NotificationScreen'
import screenOptionsStack from 'src/shared/screenOptionsStack'

/**
 *  definimos las rutas que va tener acceso nuestro stack del Home
 */
const Stack = createNativeStackNavigator()

export default function NotificationStack({navigation}) {
    return (
        <Stack.Navigator 
            initialRouteName="notifications" 
            screenOptions={screenOptionsStack}>
            <Stack.Screen 
                name='notifications' 
                component={NotificationScreen} 
                options={{ 
                    title: 'Notifications'
                }} />
        </Stack.Navigator>
    )
}