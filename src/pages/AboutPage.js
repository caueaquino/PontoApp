import React from 'react';
import { View } from 'react-native';

import About from '../components/About';

const AboutPage = (props) => {
    return (
        <View>
            <About
                openDrawer={() => {props.navigation.openDrawer();}}
                goBack={() => {props.navigation.goBack();}}
            />
        </View>
    );
}

export default AboutPage;