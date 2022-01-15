import React from 'react'
import { View, ImageBackground, Text,FlatList,Dimensions } from 'react-native'
import styles from './styles'
import cars from './cars';
import CarItem from '../CarItem';
//import { FlatList } from 'react-native-web';
const CarsList = (props) => {
   // const { name, tagline,image } = props;
    return (
        <View style={styles.container}>  
            <FlatList
            data={cars}
            renderItem={({item})=><CarItem car={item}/>}
            snapToAlignment='start'
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};
export default CarsList;


