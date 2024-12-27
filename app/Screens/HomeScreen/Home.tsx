import { View } from 'react-native';
import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Category from './Category';
import BusinessList from './BusinessList';

const Home = () => {

    return (
        <View>
            <Header />
            <View style={{ padding: 20 }}>
                <Slider />
                <Category />
                <BusinessList />
            </View>
        </View>
    );
};

export default Home;