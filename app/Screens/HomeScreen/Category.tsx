import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '@/app/utils/GlobalApi';
import Heading from '@/app/Components/Heading';
import Colors from '@/constants/Colors';

interface CategoriesResponse {
    categories: any[];
}

export default function Category() {
    const [categories, setCategories] = useState<any[]>([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        GlobalApi.getCategories().then((res: unknown) => {
            const categoriesResponse = res as CategoriesResponse;
            setCategories(categoriesResponse?.categories);
        });
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const displayedCategories = showAll ? categories : categories.slice(0, 4);

    return (
        <View style={styles.container}>
            <Heading
                text={"Categories"}
                isViewAll={true}
                isViewLess={showAll}
                handleOnPress={toggleShowAll}
            />
            <FlatList
                data={displayedCategories}
                numColumns={4}
                renderItem={({ item }) => (
                    <View style={styles.categoriesContainer}>
                        <View style={styles.categoryContainer}>
                            <Image
                                source={{ uri: item?.icon?.url }}
                                style={styles.categoryIcon}
                            />
                        </View>
                        <Text style={styles.categoryTitle}>{item?.name}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        // paddingRight: 10
    },
    categoriesContainer: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 10
    },
    categoryContainer: {
        backgroundColor: Colors.LIGHT_GRAY,
        padding: 17,
        borderRadius: 99
    },
    categoryIcon: {
        width: 30,
        height: 30,
    },
    categoryTitle: {
        fontFamily: 'outfit-medium',
        marginTop: 5
    }
});