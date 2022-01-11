import React from 'react'
import { View, ImageBackground, Text, Pressable } from 'react-native'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import styles from './styles';
const StyledButton = (props) => {
    // const type=props.type;
    // const content=props.content;
    // const onpress=props.onpress ;

    const { type, content, onpress } = props;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#ffffffA6';
    const textColor = type === 'primary' ? '#ffffffA6' : '#171A20CC';
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => onpress()}>
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable>
        </View>
    );
};
export default StyledButton;