import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import Home from '../Screens/HomeScreen/Home';
import Booking from '../Screens/BookingScreen/Booking';
import Profile from '../Screens/ProfileScreen/Profile';
const Tab = createBottomTabNavigator();
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabsNav = () => {
    return (
        <Tab.Navigator>
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
                name="Home" component={Home} />
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
                name="Booking" component={Booking} />
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

export default TabsNav;