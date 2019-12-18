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
    loginTipStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    loginTipText: {
        fontSize: Dimensions.W(44),
        color: '#222',
        marginLeft: Dimensions.W(20),
        marginRight: Dimensions.W(20),
    },

});
