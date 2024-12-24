import { View, Text } from 'react-native';
import React from 'react';
import Header from './Header';
import Slider from './Slider';

const Home = () => {

    return (
        <View>
            <Header />
            <View style={{ padding: 20 }}>
                <Slider />
            </View>
        </View>
    );
};

export default Home;