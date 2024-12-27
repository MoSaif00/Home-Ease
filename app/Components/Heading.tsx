import Colors from '@/constants/Colors';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HeadingProps {
    text: string;
    isViewAll?: boolean;
    isViewLess?: boolean;
    handleOnPress?: () => void;
}

export default function Heading(
    { text, isViewAll = false, isViewLess = false, handleOnPress }: HeadingProps
) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{text}</Text>
            {
                isViewAll &&
                <TouchableOpacity onPress={handleOnPress}>
                    <Text style={{ color: Colors.PRIMARY }}>{isViewLess ? "View Less" : "View All"}</Text>
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 10
    },
    heading: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
        marginBottom: 10
    },
});