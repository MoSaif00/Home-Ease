import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import Colors from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Header() {
    const { user } = useUser();

    return user && (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.profileContainer}>
                    <Image source={{ uri: user?.imageUrl }}
                        style={styles.userImage} />
                    <View>
                        <Text
                            style={{
                                color: Colors.WHITE,
                                fontSize: 20,
                                fontFamily: 'outfit'
                            }}
                        >
                            Welcome,
                        </Text>
                        <Text
                            style={{
                                color: Colors.WHITE,
                                fontSize: 20,
                                fontFamily: 'outfit-medium'
                            }}
                        >
                            {user?.fullName}
                        </Text>
                    </View>
                </View>
                <FontAwesome name="book" size={27} color={Colors.WHITE} />
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder='Search'
                    style={styles.textInput}
                />
                <FontAwesome
                    style={styles.searchButton}
                    name="search" size={24} color={Colors.PRIMARY} />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    subContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    profileContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99
    },
    searchContainer: {
        marginTop: 15,
        display: 'flex',
        flexDirection: "row",
        gap: 10,
        marginBottom: 10
    },
    textInput: {
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        width: '85%',
        fontSize: 16,
        fontFamily: 'outfit'
    },
    searchButton: {
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 8
    }
});