/**
 *
 */

import { StyleSheet } from 'react-native';
import Dimensions from "../../constants/Dimensions";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
    },
    input: {
        height: Dimensions.W(100),
        width:Dimensions.W(500),
    },
});
