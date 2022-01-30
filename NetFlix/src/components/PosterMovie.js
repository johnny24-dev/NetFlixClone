import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator,Dimensions } from 'react-native';
import React from 'react';
import { Image, } from 'react-native-elements/dist/image/Image';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Button } from 'react-native-elements/dist/buttons/Button';
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as BASE from '../api/base'
import LinearGradient from 'react-native-linear-gradient';
const { width } = Dimensions.get('window');

const PosterMovie = ({ item, dandleInfo }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `${BASE.BASE_URL_POSTER}${item?.poster_path ?? '/xF1uc2pEf34X2G41wvZaF5H0V7C.jpg'}` }}
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
            <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                {item?.genres && item.genres.map((x, i) => {
                    if (i !== item.genres.length - 1) {
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
                    <TouchableOpacity style={styles.btn}>
                        <AntDesign name='plus' size={26} color='white' />
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Danh sách</Text>
                    </TouchableOpacity>
                    <Button icon={<Ionicons name='play' size={24} color='black' />}
                        containerStyle={{ backgroundColor: 'white', paddingHorizontal: 10 }}
                        title='Phát'
                        titleStyle={{ color: 'black' }} />
                    <TouchableOpacity style={styles.btn}
                    onPress={dandleInfo}>
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
    container: {
        flex: 1
    },
    image: {
        height: 500,
    },
    genrers: {
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '800',
        width:'100%'
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
        position:'absolute',
        top:300
      },
    linearGradientTop:{
        width,
        height: 250,
        position:'absolute',
        top:0
    }
})
