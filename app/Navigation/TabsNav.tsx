import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import Profile from '../Screens/ProfileScreen/Profile';
const Tab = createBottomTabNavigator();
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '@/constants/Colors';
import HomeNavigation from './HomeNavigation';
import BookingNavigation from './BookingNavigation';

export default function TabsNav() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.PRIMARY
            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: ({ color }) => (

                        <Text
                            style={{
                                color: color,
                                fontSize: 12,
                                marginTop: -5
                            }}
                        >
                            Home
                        </Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={size} color={color} />
                    )
                }}
                name="Home" component={HomeNavigation} />
            <Tab.Screen
                options={{
                    tabBarLabel: ({ color }) => (

                        <Text
                            style={{
                                color: color,
                                fontSize: 12,
                                marginTop: -5
                            }}
                        >
                            Booking
                        </Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="book" size={size} color={color} />
                    )
                }}
                name="Booking" component={BookingNavigation} />
            <Tab.Screen
                options={{
                    tabBarLabel: ({ color }) => (

                        <Text
                            style={{
                                color: color,
                                fontSize: 12,
                                marginTop: -5
                            }}
                        >
                            Profile
                        </Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" size={size} color={color} />
                    )
                }}
                name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

