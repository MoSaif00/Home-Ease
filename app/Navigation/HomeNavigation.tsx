import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/HomeScreen/Home';
import BusinessListByCategory from '../Screens/BusinessListByCategoryScreen/BusinessListByCategory';
import BusinessDetails from '../Screens/BusinessDetailsScreen/BusinessDetails';

const Stack = createStackNavigator();

export default function HomeNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="BusinessList" component={BusinessListByCategory} />
            <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
        </Stack.Navigator>
    );
}

