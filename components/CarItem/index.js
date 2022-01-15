import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import StyledButton from '../StyledButton'
import styles from './styles'
import CarsList from '../CarsList'
const CarItem = (props) => {
    const { name, tagline, taglineCTA, image } = props.car;
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image}
                style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <StyledButton type='primary' content='custom order' onpress={() => {
                    console.warn("custom order pressed");
                }} />
                <StyledButton type='secondary' content='existing inventory' onpress={() => {
                    console.warn("existing inventory  pressed");
                }} />
            </View>

        </View>
    );
};
export default CarItem;


