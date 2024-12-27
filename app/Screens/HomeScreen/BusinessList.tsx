import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Heading from '@/app/Components/Heading';
import GlobalApi from '@/app/utils/GlobalApi';
import BusinessListItemsSmall from './BusinessListItemsSmall';



export default function BusinessList() {
    const [businessLists, setBusinessLists] = useState<any[]>([]);

    useEffect(() => {
        getBusinessList();
    }, []);

    const getBusinessList = () => {
        GlobalApi.getBusinessList().then((res: unknown) => {
            const businessListResponse = res as { businesses: any[]; };
            setBusinessLists(businessListResponse.businesses);
        });
    };

    return (
        <View style={{ marginTop: 20 }}>
            <Heading
                text={"Popular Businesses"}
                isViewAll={true}
            />
            <FlatList
                data={businessLists}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 10 }}>
                        <BusinessListItemsSmall business={item} />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({});