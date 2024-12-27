import { FlatList, Image, Modal, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';
import Heading from '@/app/Components/Heading';
import BookingModal from './BookingModal';
import ScreenHeading from '@/app/Components/ScreenHeading';

type BusinessDetailsRouteParams = {
    business: {
        images: { url: string; }[];
    };
};

export default function BusinessDetails() {
    const route = useRoute<RouteProp<{ params: BusinessDetailsRouteParams; }, 'params'>>();
    const param = route.params;
    const navigation = useNavigation();

    const [business, setBusiness] = useState<any>(param?.business);
    const [isReadMore, setIsReadMore] = useState<boolean>(false);
    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    useEffect(() => {
    }, []);

    return (
        <View style={{ height: '98%' }}>

            <ScrollView>
                <ScreenHeading
                    iconColor={Colors.WHITE}
                    style={styles.backButton}
                    handleOnPress={() => navigation.goBack()}
                />

                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={30} color="white" />

                </TouchableOpacity>
                <Image
                    source={{ uri: business?.images?.[0]?.url }}
                    style={styles.businessImage}
                />

                <View style={styles.infoContainer}>
                    <Text
                        style={{
                            fontSize: 25,
                            fontFamily: 'outfit-bold',
                        }}
                    >{business?.name}</Text>
                    <View style={styles.subContainer}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontFamily: 'outfit-medium',
                                color: Colors.PRIMARY
                            }}
                        >{business?.contactPerson} ✨</Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: Colors.PRIMARY,
                                backgroundColor: Colors.LIGHT_PRIMARY,
                                padding: 5,
                                borderRadius: 5,
                            }}
                        >{business?.category?.name}</Text>
                    </View>
                    <Text style={{ fontSize: 17, fontFamily: 'outfit', color: Colors.GRAY }}>
                        <Ionicons name="location-sharp" size={20} color={Colors.PRIMARY} />
                        {business?.address}
                    </Text>

                    <View
                        style={{
                            borderWidth: 0.4,
                            borderColor: Colors.GRAY,
                            marginTop: 20,
                            marginBottom: 20
                        }}>
                    </View>
                    <View>
                        <Heading
                            text={"About Me"}
                        />
                        <Text
                            style={{
                                fontSize: 16,
                                fontFamily: 'outfit',
                                color: Colors.GRAY,
                                lineHeight: 28
                            }}
                            numberOfLines={!isReadMore ? 5 : undefined}
                        >
                            {business?.about}
                        </Text>
                        <TouchableOpacity
                            onPress={() => setIsReadMore(!isReadMore)}
                        >

                            <Text
                                style={{
                                    fontSize: 16,
                                    fontFamily: 'outfit',
                                    color: Colors.PRIMARY,
                                }}
                            >{isReadMore ? 'Read less' : 'Read more'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            borderWidth: 0.4,
                            borderColor: Colors.GRAY,
                            marginTop: 20,
                            marginBottom: 20
                        }}>
                    </View>

                    <View>
                        <Heading
                            text={"Photos"}
                        />
                        <FlatList
                            data={business?.images}
                            numColumns={2}
                            renderItem={({ item }) => (
                                <Image
                                    source={{ uri: item?.url }}
                                    style={{
                                        width: '50%',
                                        flex: 1,
                                        height: 120,
                                        borderRadius: 15,
                                        margin: 7
                                    }}
                                />
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>

            </ScrollView>

            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    margin: 8,
                    gap: 8

                }}
            >
                <TouchableOpacity
                    style={styles.messageBtn}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            fontFamily: 'outfit-medium',
                            color: Colors.PRIMARY,
                            fontSize: 18
                        }}
                    >Message</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.bookingBtn}
                    onPress={() => setIsShowModal(true)}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            fontFamily: 'outfit-medium',
                            color: Colors.WHITE,
                            fontSize: 18
                        }}
                    >Book Now</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType='slide'
                visible={isShowModal}
            >
                <BookingModal
                    closeModal={() => setIsShowModal(false)}
                />

            </Modal>
        </View>

    );
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        zIndex: 12,
        padding: 20
    },
    infoContainer: {
        padding: 20,
        display: 'flex',
        gap: 7
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
    businessImage: {
        width: '100%',
        height: 300,
    },
    messageBtn: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        flex: 1
    },
    bookingBtn: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        flex: 1
    },
});;