import { FlatList, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ScreenHeading from '@/app/Components/ScreenHeading';
import CalendarPicker from 'react-native-calendar-picker';
import Colors from '@/constants/Colors';
import Heading from '@/app/Components/Heading';
import { useEffect, useState } from 'react';


type BookingModalProps = {

    closeModal: () => void;

};

export default function BookingModal({ closeModal }: BookingModalProps) {
    const [timeList, setTimeList] = useState<any[]>([]);
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [notes, setNotes] = useState<string>('');

    useEffect(() => {
        getTime();
    }, []);

    const getTime = () => {
        const timeList = [];
        for (let i = 8; i < 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            });
            timeList.push({
                time: i + ':30 AM'
            });
        }

        timeList.push({
            time: '12:00 PM'
        });
        timeList.push({
            time: '12:30 PM'
        });

        for (let i = 1; i <= 7; i++) {
            timeList.push({
                time: i + ':00 PM'
            });
            timeList.push({
                time: i + ':30 PM'
            });
        }

        setTimeList(timeList);
    };


    return (
        <ScrollView>

            <KeyboardAvoidingView style={{ padding: 20 }}>
                <ScreenHeading
                    title="Booking"
                    handleOnPress={closeModal}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 10,
                        alignItems: 'center',
                        marginBottom: 20
                    }}
                />
                <Heading text="Select Date" />
                <View style={styles.calendarContainer}>
                    <CalendarPicker
                        width={340}
                        minDate={Date.now()}
                        todayBackgroundColor={Colors.BLACK}
                        selectedDayColor={Colors.PRIMARY}
                        todayTextStyle={{ color: Colors.WHITE }}
                        selectedDayTextColor={Colors.WHITE}
                        onDateChange={(date) => setSelectedDate(date.toString())}
                    />
                </View>

                <View style={{ marginTop: 20 }}>
                    <Heading text="Select Time" />
                    <FlatList
                        data={timeList}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                style={{ marginRight: 10 }}
                                onPress={() => setSelectedTime(item.time)}
                            >
                                <Text
                                    style={[selectedTime == item.time ? styles.selectedTime : styles.unselectedTime]}
                                >{item.time}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

                <View style={{ paddingTop: 20 }}>
                    <Heading text="Add Notes" />
                    <TextInput
                        placeholder='Add notes for selected business'
                        numberOfLines={4}
                        multiline={true}
                        style={styles.notesArea}
                        onChangeText={(text) => setNotes(text)}
                    />
                </View>

                <TouchableOpacity style={{ marginTop: 20 }}>
                    <Text style={styles.confirmBtn}>Confirm Booking</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    calendarContainer: {
        backgroundColor: Colors.LIGHT_PRIMARY,
        padding: 20,
        borderRadius: 15
    },
    selectedTime: {
        padding: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        backgroundColor: Colors.PRIMARY,
        color: Colors.WHITE,
    },
    unselectedTime: {
        padding: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        color: Colors.PRIMARY,
    },
    notesArea: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.PRIMARY,
        textAlignVertical: 'top',
        padding: 20,
        fontSize: 16,
        fontFamily: 'outfit',
    },
    confirmBtn: {
        backgroundColor: Colors.PRIMARY,
        color: Colors.WHITE,
        padding: 10,
        borderRadius: 99,
        fontSize: 17,
        fontFamily: 'outfit-medium',
        textAlign: 'center',
        elevation: 2,
    }
});