import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key,value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.log("🚀 ~ file: asynstorage.js ~ line 8 ~ storeData ~ e", e)
        // saving error
    }
}


export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log("🚀 ~ file: asynstorage.js ~ line 19 ~ getData ~ e", e)
        // error reading value
    }
}

