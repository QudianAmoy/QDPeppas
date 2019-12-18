
import { StyleSheet } from 'react-native';
import Dimensions from "../../../constants/Dimensions";



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
    },
    item: {
        margin: 4,
    },
    itemText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 30,
        backgroundColor: '#0002',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },

});
