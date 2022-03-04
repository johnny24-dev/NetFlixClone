import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Image, } from 'react-native-elements/dist/image/Image';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Button } from 'react-native-elements/dist/buttons/Button';
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as BASE from '../api/base'
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');

const PosterMovie = ({ item = {}, handleInfo, favorited, handleFavorite }) => {

    const movieCategory = useSelector(state => state.moviesReducer.category)
    item.category = item?.genre_ids?.map((item) => {
        movieCategory.map((x) => {
          if (item == x.id) {
            item = x
          }
        })
        return item
      })

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `${BASE.BASE_URL_POSTER}${item?.poster_path ?? '/kk0BT6UsdWELULlJ2qu2UjNqOHq.jpg'}` }}
                containerStyle={styles.image}
                PlaceholderContent={<ActivityIndicator color='red' size='large' />}
                placeholderStyle={{ flex: 1, backgroundColor: 'white' }}
                resizeMode='stretch'
            >
                <LinearGradient
                    colors={[
                        'transparent',
                        'black',
                    ]}
                    style={styles.linearGradient}
                />
                <LinearGradient
                    colors={[
                        'black',
                        'transparent',

                    ]}
                    style={styles.linearGradientTop}
                />
            </Image>
            <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', }}>
                {item?.category && item?.category.map((x, i) => {
                    if (i !== item?.category.length - 1) {
                        return (
                            <Text style={styles.genrers} key={i.toString()}>{x.name} * </Text>
                        )
                    } else {
                        return (
                            <Text style={styles.genrers} key={i.toString()}>{x.name}</Text>
                        )
                    }
                })}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: '100%'
                }}>
                    <TouchableOpacity style={styles.btn}
                        onPress={handleFavorite}>
                        <AntDesign name={favorited ? 'check' : 'plus'} size={26} color='white' />
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Danh sách</Text>
                    </TouchableOpacity>
                    <Button icon={<Ionicons name='play' size={24} color='black' />}
                        containerStyle={{ backgroundColor: 'white', paddingHorizontal: 10 }}
                        title='Phát'
                        titleStyle={{ color: 'black' }}
                        onPress={handleInfo} />
                    <TouchableOpacity style={styles.btn}
                        onPress={handleInfo}>
                        <Ionicons name='ios-information-circle-outline' size={26} color='white' />
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Thông tin</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default PosterMovie;

const styles = StyleSheet.create({
    image: {
        height: 500,
    },
    genrers: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '800',
        width: '100%'
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 60
    },
    linearGradient: {
        width,
        height: 200,
        position: 'absolute',
        top: 300
    },
    linearGradientTop: {
        width,
        height: 250,
        position: 'absolute',
        top: 0
    }
})
