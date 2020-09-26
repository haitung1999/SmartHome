import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DashboardScreen from '../screens/DashboardScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

export default function SmartHome() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Dashboard" component={DashboardScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
