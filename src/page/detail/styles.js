/**
 *
 */

import { StyleSheet } from 'react-native';
import Dimensions from "../../constants/Dimensions";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: Dimensions.SCREEN_WIDTH,
        height: 50,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-end',
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
