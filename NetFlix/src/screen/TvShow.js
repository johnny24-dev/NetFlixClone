import {
    StyleSheet, Text, View,
    SafeAreaView, TouchableOpacity,
    ActivityIndicator,
    Platform
} from 'react-native'
import React, { useCallback, useState, useEffect, useRef } from 'react'
import * as BASE from '../api/base'
import { navigate } from '../navbar/rootNavigation'
import { getListTVPopular } from '../api/Request'
import { Image } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { goback } from '../navbar/rootNavigation'
import { FlatList } from 'react-native-gesture-handler';


const queryParams = {
    api_key: BASE.API_KEY,
    language: 'vi',
    page: 1
}

const renderLoader = () => {
    return (
        <View style={{
            marginVertical: 16,
            alignItems: 'center'
        }}>
            <ActivityIndicator size='large' color='red' />
        </View>
    )
}

const TvShow = () => {

    const [dataSource, setDataSource] = useState([])
    const [currentPage, setCurentPage] = useState(1)

    const fetchData = async () => {
        const { error, data } = await getListTVPopular({ ...queryParams, page: currentPage })

        setDataSource([...dataSource, ...data.results])
    }

    useEffect(() => {
        fetchData()
    }, [currentPage])

    const loadMoreItem = () => {
        console.log('load more')
        setCurentPage(currentPage + 1)
    }

    return (
        <SafeAreaView style={styles.container}>

            <FlatList
                data={dataSource}
                style={{
                    marginHorizontal: 6,
                    marginTop: 40
                }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                margin: 3
                            }}
                            onPress={() => {
                                navigate('TVDetail', item)
                            }}>
                            <Image
                                source={{ uri: BASE.BASE_URL_IMAGE + item.poster_path }}
                                containerStyle={styles.imageThumbnail}
                                resizeMode='cover'
                            />
                        </TouchableOpacity>
                    )
                }
                }
                //Setting the number of column
                numColumns={3}
                keyExtractor={(item, index) => index}
                ListFooterComponent={renderLoader}
                onEndReached={() => {
                    console.log('come here')
                    loadMoreItem()
                }}
                onEndReachedThreshold={0.1}
                extraData={dataSource}
            />
            <View style={
                {
                    position: 'absolute',
                    width: '100%',
                    top: Platform.OS == 'ios' ? 30 : 0,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'black'
                }
            }>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    marginLeft: 10,
                    fontSize: 22
                }}>Phim T.hình</Text>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#999999',
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 6,
                        marginRight: 10,
                    }}
                    onPress={() => goback()}>
                    <Ionicons name='close' color='white' size={20} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default TvShow

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        borderRadius: 10
    },
})