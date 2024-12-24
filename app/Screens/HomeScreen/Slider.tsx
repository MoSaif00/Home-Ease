import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '@/app/utils/GlobalApi';

interface SliderResponse {
    sliders: any[];
}

export default function Slider() {
    const [slider, setSlider] = useState<any[]>([]);
    useEffect(() => {
        getSliders();
    }, []);

    const getSliders = () => {
        GlobalApi.getSlider().then((res: unknown) => {
            const sliderResponse = res as SliderResponse;
            setSlider(sliderResponse.sliders);
        });
    };

    return (
        <View>
            <Text style={styles.heading}>Latest Offers</Text>
            <FlatList
                data={slider}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 20 }}>
                        <Image
                            source={{ uri: item?.image?.url }}
                            style={styles.sliderImage}
                        />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
        marginBottom: 10
    },
    sliderImage: {
        width: 270,
        height: 150,
        borderRadius: 20,
        objectFit: 'contain'
    }
});