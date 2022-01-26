import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { Image, } from 'react-native-elements/dist/image/Image';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Button } from 'react-native-elements/dist/buttons/Button';
import Ionicons from 'react-native-vector-icons/Ionicons'

const PosterMovie = ({item}) => {
console.log("🚀 ~ file: PosterMovie.js ~ line 9 ~ PosterMovie ~ item", item)
    
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://image.tmdb.org/t/p/w500/2MJz10b6ItzpKm3vb95S3X5Vcna.jpg' }}
                containerStyle={styles.image}
                PlaceholderContent={<ActivityIndicator />}
                resizeMode='stretch'
            />
            <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Text style={styles.genrers}>Hello * BAlO * LoCA * ASAMSM</Text>
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
                    <TouchableOpacity style={styles.btn}>
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
        fontSize: 16,
        fontWeight: '800'
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 60
    }
})
