import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from '../Screens/HomeScreen/Home';
import BusinessListByCategory from '../Screens/BusinessListByCategoryScreen/BusinessListByCategory';

const Stack = createStackNavigator();

export default function HomeNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="BusinessList" component={BusinessListByCategory} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});