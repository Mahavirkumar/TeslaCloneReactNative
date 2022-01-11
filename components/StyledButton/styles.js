import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        marginTop: '30%'


    },
    button: {
        fontSize: 20,
        backgroundColor: 'yellow',
        height: 40,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 20,

    },
    text: {
        fontSize: 14,
        fontWeight: '500',
        textTransform: 'uppercase'

    },


});
export default styles;