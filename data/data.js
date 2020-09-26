import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as theme from '../theme';

export default DATA = [
    {
        'light': {
            id: '1',
            name: 'Light',
            icon: ({ size, color, ...props }) => (
                <MaterialCommunityIcons
                    size={size || theme.sizes.font}
                    color={color || theme.colors.accent}
                    name="lightbulb-on"
                    {...props}
                />
            ),
        },
        'ac': {
            id: '2',
            name: 'Ac',
            icon: ({ size, color, ...props }) => (
                <MaterialCommunityIcons
                    size={size || theme.sizes.font}
                    color={color || theme.colors.accent}
                    name="air-conditioner"
                    {...props}
                />
            ),
        },
        'temperature': {
            id: '3',
            name: 'Temperature',
            icon: ({ size, color, ...props }) => (
                <MaterialCommunityIcons
                    size={size || theme.sizes.font}
                    color={color || theme.colors.accent}
                    name="temperature-celsius"
                    {...props}
                />
            ),
        },
        'fan': {
            id: '4',
            name: 'Fan',
            icon: ({ size, color, ...props }) => (
                <MaterialCommunityIcons
                    size={size || theme.sizes.font}
                    color={color || theme.colors.accent}
                    name="fan"
                    {...props}
                />
            ),
        },
        'wi-fi': {
            id: '5',
            name: 'Wi-Fi',
            icon: ({ size, color, ...props }) => (
                <FontAwesome
                    size={size || theme.sizes.font}
                    color={color || theme.colors.accent}
                    name="wifi"
                    {...props}
                />
            ),
        },
        'electricity': {
            id: '6',
            name: 'Electricity',
            icon: ({ size, color, ...props }) => (
                <MaterialIcons
                    size={size || theme.sizes.font}
                    color={color || theme.colors.accent}
                    name="power"
                    {...props}
                />
            ),
        },
    }
]