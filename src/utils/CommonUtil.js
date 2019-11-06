/**
 * 通用工具方法
 * Created by qudian on 2019-2-14
 */

/**
 * 判断两个Object是否相同
 * @param obj1
 * @param obj2
 */
function cmp(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

/**
 * true：大于0的费用
 *
 * @author mengweiping@qudian.com
 * @date 2018-07-09
 */
function isPositiveFee(fee) {
    try {
        return Number(fee) > 0;
    } catch (error) {
        return false;
    }
}


/**
 *
 * 字符串转数值
 * @author mengweiping@qudian.com
 * @date 2018-07-31
 * @param {*} str
 * @returns
 */
function parseNumber(str) {
    try {
        return Number(str);
    } catch (error) {
        return 0;
    }
}

/**
 * bool判断
 * @param value
 * @returns {*}
 */
function boolValue(value) {
    if (value === undefined || value === null) {
        return false;
    }
    const type = typeof value;
    if (type === 'boolen') {
        return value;
    }
    if (type === 'number') {
        if (value === 0) {
            return false;
        } else {
            return true;
        }
    }
    if (type === 'string') {
        if (value.length === 0 || value === '0') {
            return false;
        } else {
            return true;
        }
    }
    return !!(value);
}

/**
 * 获取一个月有多少天
 * @param year
 * @param month
 * @returns {number}
 */
function getCountDays(year, month) {
    return new Date(year, month, 0).getDate();
}

/**
 * 时间戳转换年月日
 * @param timestamp
 * @returns {{year: number, month: number, day: number}}
 */
function timestampToTime(timestamp) {
    const date = new Date(timestamp);
    const Y = date.getFullYear();
    const M = date.getMonth() + 1;
    const D = date.getDate();
    return {
        year: Y,
        month: M,
        day: D,
    }
}

function timeToTimestamp(year, month, day) {
    const M = month < 10 ? `0${month}` : month;
    const D = day < 10 ? `0${day}` : day;
    const timestamp = `${year}-${M}-${D}`;
    const date = new Date(timestamp).getTime();
    return date / 1000;
}

function getDateString(year, month, day) {
    const M = month < 10 ? `0${month}` : month;
    const D = day < 10 ? `0${day}` : day;
    return `${year}-${M}-${D}`;
}

function copyMap(map: Map) {
    const result = new Map();
    map.forEach((value, key) => result.set(key, value));
    return result;
}

/* 判断类型和判空 */

// 返回类型字符串，转成小写
function getType(obj) {
    var type = Object.prototype.toString.call(obj).match(/^\[object (.*)\]$/)[1].toLowerCase();//返回各自类型，包括map，set
    // if(type === 'string' && typeof obj === 'object') return 'object'; //如果字符串是new String()，返回object，这里可以讨论是否返回string
    if (obj === null) return 'null';
    if (obj === undefined) return 'undefined';
    return type;
}

function isList(list) {
    return getType(list) === 'array';
}

function isListEmpty(list) {
    if (isList(list)) {
        return list.length == 0;
    }
    return true;
}

function isListNotEmpty(list) {
    return isList(list) && list.length > 0;
}

function isString(string) {
    return getType(string) === 'string';
}

function isStringEmpty(string) {
    if (isString(string)) {
        return string.length == 0;
    }
    return true;
}

function isStringNotEmpty(string) {
    return isString(string) && string.length > 0;
}

function isObject(obj) {
    return getType(obj) === 'object';
}

function isObjectEmpty(obj) {
    if (!isObject(obj)) {
        return true;
    }
    for (const key in obj) {
        return false;
    }
    return true;
}

function isObjectNotEmpty(obj) {
    if (isObject(obj)) {
        for (const key in obj) {
            return true;
        }
    }
    return false;
}

/* 判断类型和判空 */

export default {
    cmp,
    isPositiveFee,
    boolValue,
    parseNumber,
    getCountDays,
    timestampToTime,
    timeToTimestamp,
    getDateString,
    copyMap,

    /* 类型处理 */
    getType,
    isList,
    isListEmpty,
    isListNotEmpty,
    isString,
    isStringEmpty,
    isStringNotEmpty,
    isObject,
    isObjectEmpty,
    isObjectNotEmpty,
};
