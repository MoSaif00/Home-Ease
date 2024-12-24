import { View, Text } from 'react-native';
import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Category from './Category';

const Home = () => {

    return (
        <View>
            <Header />
            <View style={{ padding: 20 }}>
                <Slider />
                <Category />
            </View>
        </View>
    );
};

export default Home;