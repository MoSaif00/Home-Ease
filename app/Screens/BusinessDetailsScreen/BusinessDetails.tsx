import { FlatList, Image, Linking, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
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

    const onMessageBtnClick = () => {
        Linking.openURL('mailto:' + business?.email + "?subject= I am interested in your service &body=Hello there, I am interested in your service. Please provide me more details.");
    };

    const renderHeader = () => (
        <View>
            <ScreenHeading
                iconColor={Colors.WHITE}
                style={styles.backButton}
                handleOnPress={() => navigation.goBack()}
            />

            <Image
                source={{ uri: business?.images?.[0]?.url }}
                style={styles.businessImage}
            />

            <View style={styles.infoContainer}>
                <Text style={styles.nameText}>{business?.name}</Text>
                <View style={styles.subContainer}>
                    <Text style={styles.contactText}>{business?.contactPerson} ✨</Text>
                    <Text style={styles.categoryText}>{business?.category?.name}</Text>
                </View>
                <Text style={styles.addressText}>
                    <Ionicons name="location-sharp" size={20} color={Colors.PRIMARY} />
                    {business?.address}
                </Text>

                <View style={styles.divider} />

                <View>
                    <Heading text="About Me" />
                    <Text
                        style={styles.aboutText}
                        numberOfLines={!isReadMore ? 5 : undefined}
                    >
                        {business?.about}
                    </Text>
                    <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
                        <Text style={styles.readMoreText}>
                            {isReadMore ? 'Read less' : 'Read more'}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.divider} />
                <Heading text="Photos" />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={business?.images}
                numColumns={2}
                ListHeaderComponent={renderHeader}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item?.url }}
                        style={styles.gridImage}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.listContainer}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.messageBtn}
                    onPress={onMessageBtnClick}
                >
                    <Text style={styles.messageBtnText}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.bookingBtn}
                    onPress={() => setIsShowModal(true)}
                >
                    <Text style={styles.bookingBtnText}>Book Now</Text>
                </TouchableOpacity>
            </View>

            <Modal animationType='slide' visible={isShowModal}>
                <BookingModal
                    businessId={business?.id}
                    closeModal={() => setIsShowModal(false)}
                />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '98%'
    },
    listContainer: {
        flexGrow: 1,
        paddingBottom: 80
    },
    backButton: {
        position: 'absolute',
        zIndex: 12,
        padding: 20
    },
    infoContainer: {
        padding: 20,
        gap: 7
    },
    subContainer: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
    businessImage: {
        width: '100%',
        height: 300,
    },
    nameText: {
        fontSize: 25,
        fontFamily: 'outfit-bold',
    },
    contactText: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
        color: Colors.PRIMARY
    },
    categoryText: {
        fontSize: 14,
        color: Colors.PRIMARY,
        backgroundColor: Colors.LIGHT_PRIMARY,
        padding: 5,
        borderRadius: 5,
    },
    addressText: {
        fontSize: 17,
        fontFamily: 'outfit',
        color: Colors.GRAY
    },
    divider: {
        borderWidth: 0.4,
        borderColor: Colors.GRAY,
        marginVertical: 20
    },
    aboutText: {
        fontSize: 16,
        fontFamily: 'outfit',
        color: Colors.GRAY,
        lineHeight: 28
    },
    readMoreText: {
        fontSize: 16,
        fontFamily: 'outfit',
        color: Colors.PRIMARY,
    },
    gridImage: {
        width: '50%',
        flex: 1,
        height: 120,
        borderRadius: 15,
        margin: 7
    },
    buttonContainer: {
        flexDirection: 'row',
        margin: 8,
        gap: 8,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    messageBtn: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        flex: 1
    },
    messageBtnText: {
        textAlign: 'center',
        fontFamily: 'outfit-medium',
        color: Colors.PRIMARY,
        fontSize: 18
    },
    bookingBtn: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        flex: 1
    },
    bookingBtnText: {
        textAlign: 'center',
        fontFamily: 'outfit-medium',
        color: Colors.WHITE,
        fontSize: 18
    }
});