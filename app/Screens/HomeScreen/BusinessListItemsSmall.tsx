import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    BusinessDetails: { business: Business; };
};

interface Business {
    name?: string;
    images?: Array<{
        url?: string;
    }>;
    contactPerson?: string;
    category?: {
        name?: string;
    };
}

export default function BusinessListItemsSmall({ business }: { business: Business; }) {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate(
                'BusinessDetails',
                { business: business }
            )}
        >
            <Image
                source={{ uri: business?.images?.[0]?.url }}
                style={styles.businessImage}
            />
            <View style={styles.subContainer}>
                <Text
                    style={{
                        fontSize: 17,
                        fontFamily: 'outfit-medium',
                    }}
                >{business?.name}</Text>
                <Text
                    style={{
                        fontSize: 13,
                        fontFamily: 'outfit',
                        color: Colors.GRAY,
                    }}
                >{business?.contactPerson}</Text>
                <Text
                    style={{
                        fontSize: 10,
                        fontFamily: 'outfit',
                        padding: 3,
                        color: Colors.PRIMARY,
                        backgroundColor: Colors.LIGHT_PRIMARY,
                        borderRadius: 3,
                        alignSelf: 'flex-start',
                        paddingHorizontal: 7,

                    }}
                >{business?.category?.name}</Text>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
    },
    subContainer: {
        padding: 7,
        display: 'flex',
        gap: 3
    },
    businessImage: {
        width: 160,
        height: 100,
        borderRadius: 10,
    }
});