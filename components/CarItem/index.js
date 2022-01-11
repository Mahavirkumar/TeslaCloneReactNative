import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import StyledButton from '../StyledButton'
import styles from './styles'
const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/images/ModelX.jpeg')}
                style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitles}>starting at $46,$39</Text>
            </View>
            <StyledButton type='primary' content='custom order' onpress={() => {
                console.warn("custom order pressed");
            }} />
            <StyledButton type='secondary' content='existing inventory' onpress={() => {
                console.warn("existing inventory  pressed");
            }} />
        </View>
    );
};
export default CarItem;


