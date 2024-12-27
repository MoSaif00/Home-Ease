import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import GlobalApi from '@/app/utils/GlobalApi';
import BusinessListItem from './BusinessListItem';
import Colors from '@/constants/Colors';

type BusinessListRes = {
    businesses: any[];
};

type RouteParams = {
    category: string;
};

export default function BusinessListByCategory() {
    const param = useRoute().params as RouteParams;
    const navigation = useNavigation();
    const [businessList, setBusinessList] = useState<any[]>([]);

    useEffect(() => {
        getBusinessListByCategory();

    }, []);

    const getBusinessListByCategory = () => {
        GlobalApi.getBusinessListByCategory(param?.category).then((res: unknown) => {
            const businessListRes = res as BusinessListRes;
            setBusinessList(businessListRes?.businesses);
        });
    };

    return (
        <View style={{ padding: 20, paddingTop: 30 }}>
            <TouchableOpacity
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center'
                }}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back" size={30} color="black" />
                <Text
                    style={{
                        fontSize: 25,
                        fontFamily: 'outfit-medium',
                    }}
                >{param?.category}</Text>
            </TouchableOpacity>
            {businessList?.length > 0
                ? <FlatList
                    data={businessList}
                    style={{ marginTop: 20 }}
                    renderItem={({ item, index }) => (
                        <View >
                            <BusinessListItem business={item} />
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
                : <Text
                    style={{
                        fontSize: 20,
                        textAlign: 'center',
                        marginTop: '20%',
                        color: Colors.GRAY
                    }}
                >No business found</Text>}
        </View>
    );
}

