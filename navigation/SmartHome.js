import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';
import Settings from '../screens/Settings';

export default createStackNavigator({
    Dashboard: {
        screen: Dashboard,
    },
    Settings: {
        screen: Settings,
    }
}, {
    initialRouteName: 'Dashboard'
});