import GlobalApi from '@/app/utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import BusinessListItem from '../BusinessListByCategoryScreen/BusinessListItem';
import BookingListItem from './BookingListItem';

export default function Booking() {
    const [bookings, setBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const { user } = useUser();

    useEffect(() => {
        user && getUserBookings();
    }, []);

    const getUserBookings = () => {
        setLoading(true);
        const email = user?.primaryEmailAddress?.emailAddress;
        if (email) {
            GlobalApi.getUserBookings(email).then((res: any) => {
                setBookings(res?.bookings);
                setLoading(false);
            });
        }
    };
    return (
        <View style={{ padding: 20 }}>
            <Text
                style={{
                    fontSize: 26,
                    fontFamily: 'outfit-medium',
                }}
            >My Booking</Text>
            <View style={{ marginTop: 20 }}>
                <FlatList
                    data={bookings}
                    onRefresh={() => getUserBookings()}
                    refreshing={loading}
                    renderItem={({ item, index }) => (
                        <BookingListItem
                            business={item?.business}
                            booking={item}

                        />

                    )}
                />
            </View>
        </View>
    );
}

