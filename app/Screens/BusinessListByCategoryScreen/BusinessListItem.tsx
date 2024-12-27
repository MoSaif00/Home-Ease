import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    BusinessDetails: { business: Business; };
};

interface Business {
    name: string;
    images: { url: string; }[];
    contactPerson: string;
    address: string;
}

export default function BusinessListItem({ business }: { business: Business; }) {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('BusinessDetails', {
                business: business
            })}

        >
            <Image
                source={{ uri: business?.images?.[0]?.url }}
                style={styles.businessImage}
            />
            <View style={styles.subContainer}>
                <Text
                    style={{
                        color: Colors.GRAY,
                        fontSize: 15,
                        fontFamily: 'outfit',
                    }}
                >{business?.contactPerson}</Text>
                <Text
                    style={{
                        fontSize: 19,
                        fontFamily: 'outfit-bold',
                    }}
                >{business?.name}</Text>
                <Text
                    style={{
                        color: Colors.GRAY,
                        fontSize: 16,
                        fontFamily: 'outfit',
                    }}
                >
                    <Ionicons name="location-sharp" size={15} color={Colors.PRIMARY} />
                    {business?.address}
                </Text>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    subContainer: {
        display: 'flex',
        gap: 8
    },
    businessImage: {
        width: 100,
        height: 100,
        borderRadius: 15
    },
});