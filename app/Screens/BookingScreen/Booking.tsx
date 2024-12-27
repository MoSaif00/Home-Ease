import GlobalApi from '@/app/utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
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

    const renderHeader = () => (
        <Text style={styles.headerText}>My Booking</Text>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={bookings}
                onRefresh={getUserBookings}
                refreshing={loading}
                renderItem={({ item }) => (
                    <BookingListItem
                        business={item?.business}
                        booking={item}
                    />
                )}
                ListHeaderComponent={renderHeader}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    listContainer: {
        paddingTop: 20
    },
    headerText: {
        fontSize: 26,
        fontFamily: 'outfit-medium',
        marginBottom: 20
    }
});