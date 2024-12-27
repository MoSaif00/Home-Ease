import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Business {
    name: string;
    images: { url: string; }[];
    contactPerson: string;
    address: string;
}

export default function BusinessListItem({ business }: { business: Business; }) {
    return (
        <View style={styles.container}>
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

        </View>
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