import { FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useUser, useAuth } from '@clerk/clerk-expo';
import Colors from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    Booking: undefined;
    SignIn: undefined;
};

export default function Profile() {
    const { user } = useUser();
    const { signOut } = useAuth();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const profileMenu = [
        {
            id: 1,
            name: "Home",
            icon: "home",
            onPress: () => navigation.navigate('Home'),
        },
        {
            id: 2,
            name: "My Bookings",
            icon: "bookmark-sharp",
            onPress: () => navigation.navigate('Booking'),
        },
        {
            id: 3,
            name: "Contact Us",
            icon: "mail",
            onPress: () => onMessageBtnClick(),
        },
        {
            id: 4,
            name: "Logout",
            icon: "log-out",
            onPress: () => signOut(),
        },
    ];

    const onMessageBtnClick = () => {
        Linking.openURL('mailto:' + 'test@test.test' + "?subject=I need support with &body=Hello support, I need help with ");
    };

    return (
        <View>
            <View style={{
                padding: 20,
                paddingTop: 30,
                backgroundColor: Colors.PRIMARY
            }} >
                <Text
                    style={{
                        fontSize: 30,
                        fontFamily: 'outfit-bold',
                        color: Colors.WHITE,
                    }}
                >My Profile</Text>

                <View
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 20,
                    }}
                >
                    <Image
                        source={{ uri: user?.imageUrl }}
                        style={{
                            width: 90,
                            height: 90,
                            borderRadius: 99,
                        }} />
                    <Text
                        style={{
                            fontSize: 26,
                            fontFamily: 'outfit-medium',
                            marginTop: 8,
                            color: Colors.WHITE,
                        }}
                    >{user?.fullName}</Text>
                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'outfit-medium',
                            marginTop: 8,
                            color: Colors.WHITE,
                        }}
                    >{user?.primaryEmailAddress?.emailAddress ?? ''}</Text>
                </View>
            </ View>

            <View style={{ marginTop: 80 }}>
                <FlatList
                    data={profileMenu}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10,
                                marginBottom: 40,
                                paddingHorizontal: 80,
                            }}
                            onPress={item.onPress}
                        >
                            <Ionicons
                                name={item.icon as keyof typeof Ionicons.glyphMap}
                                size={35}
                                color={Colors.PRIMARY}
                            />
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontFamily: 'outfit',
                                }}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}
