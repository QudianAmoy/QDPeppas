/**
 * Created by fubaolin on 2018/7/11.
 */
import { Dimensions, PixelRatio, Platform } from 'react-native';


const STANDARD_WIDTH = 750;
const STANDARD_HEIGHT = 1334;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// 根据屏幕宽度的标准，转换设计图的尺寸
function W(number) {
    return parseInt((number / STANDARD_WIDTH) * width);
}

function H(number) {
    return parseInt((number / STANDARD_HEIGHT) * height);
}
/**
 * 
 * @param {字体} number 
 */
function F(number) {
    return Math.max(parseInt((number / STANDARD_WIDTH) * width), 12);
}

const PIXEL = 1 / PixelRatio.get();

export default {
    PIXEL,
    SCREEN_WIDTH: Dimensions.get('window').width,
    SCREEN_HEIGHT: Dimensions.get('window').height,
    W,
    H,
    F,
    // STATUSBAR_HEIGHT: STATUSBAR_HEIGHT,
}

export {
    W, PIXEL
}
