import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import BusinessDetails from '../Screens/BusinessDetailsScreen/BusinessDetails';
import Booking from '../Screens/BookingScreen/Booking';

const Stack = createStackNavigator();

export default function BookingNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Booking" component={Booking} />
            <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
        </Stack.Navigator>
    );
}

