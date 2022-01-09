import React from 'react'
import { View,ImageBackground,Text } from 'react-native'
import styles  from './styles'
 const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/images/ModelX.jpeg')}
                style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitles}>starting at $46,$39</Text>
            </View>
        </View>
    )
}
export default CarItem;


