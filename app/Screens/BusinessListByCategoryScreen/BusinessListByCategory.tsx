import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import GlobalApi from '@/app/utils/GlobalApi';
import BusinessListItem from './BusinessListItem';
import Colors from '@/constants/Colors';
import ScreenHeading from '@/app/Components/ScreenHeading';

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
            <ScreenHeading
                title={param?.category}
                iconColor={Colors.BLACK}
                iconSize={30}
                handleOnPress={() => navigation.goBack()}
            />
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

