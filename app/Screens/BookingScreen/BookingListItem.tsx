import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';


interface Business {
    name: string;
    images: { url: string; }[];
    contactPerson: string;
    address: string;
}


interface Booking {
    id: string;
    date: string;
    time: string;
    bookingStatus: string;
}
export default function BookingListItem({ booking, business }: { booking: Booking; business: Business; }) {

    return (
        <View style={styles.container} >
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
                        color: Colors.GRAY
                    }}
                >{business?.contactPerson}</Text>
                <Text
                    style={[{
                        padding: 5,
                        borderRadius: 5,
                        fontSize: 14,
                        alignSelf: 'flex-start',
                    },
                    booking?.bookingStatus === 'completed'
                        ? {
                            backgroundColor: Colors.LIGHT_GREEN,
                            color: Colors.GREEN
                        }
                        : booking?.bookingStatus === 'cancelled' ?
                            {
                                backgroundColor: Colors.LIGHT_RED,
                                color: Colors.RED
                            } : {
                                backgroundColor: Colors.LIGHT_PRIMARY,
                                color: Colors.PRIMARY
                            }]}
                >
                    {booking?.bookingStatus.charAt(0).toUpperCase() + booking?.bookingStatus.slice(1)}
                </Text>

                {booking?.id ? <Text
                    style={{
                        fontSize: 16,
                        fontFamily: 'outfit',
                        color: Colors.GRAY,
                    }}
                >
                    <AntDesign name="calendar" size={20} color={Colors.PRIMARY} />
                    {' '}
                    {booking?.date} at {booking?.time}
                </Text> : null}
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