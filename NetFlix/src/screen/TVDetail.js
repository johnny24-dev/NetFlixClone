import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Image } from 'react-native-elements'
import { goback, navigate, navigateReplace } from '../navbar/rootNavigation';
import * as BASE from '../api/base'
import { getListColections, getMovieDetail, getMovieRecomendation, getMovieVideo, getTVDetail, getTvRecomendation, getTvVideo } from '../api/Request';
import YoutubePlayer from "react-native-youtube-iframe";
import { Button } from 'react-native-elements/dist/buttons/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const queryParams = {
  api_key: BASE.API_KEY,
  language: 'vi'
}

const displayRuntime = (runTime) => {
  let hours = Math.trunc(runTime / 60);
  let minutes = runTime % 60;
  return hours + "g" + minutes + "p";
}


const TVDetail = ({ route }) => {
  const tvId = route?.params.id
  const [dataTv, setDataTv] = useState({});
  console.log("🚀 ~ file: TVDetail.js ~ line 22 ~ TVDetail ~ dataTv", dataTv)

  useEffect(() => {
    const fetchTvDetail = async () => {
      const response = await Promise.all([
        getTVDetail(tvId, queryParams),
        getTvVideo(tvId, { ...queryParams, language: 'en' }),
        getTvRecomendation(tvId, queryParams),
      ])
      const data = {
        ...response[0].data,
        keyYoutube: response[1].data.results[0].key,
        recomended: response[2].data.results
      }
      setDataTv(data)
    }
    fetchTvDetail()
  }, [tvId])

  useEffect(() => {
    if (dataTv?.belongs_to_collection?.id) {
      const fetchColection = async () => {
        const { error, data } = await getListColections(dataTv.belongs_to_collection.id, queryParams)
        setDataTv({ ...dataTv, listColection: data.parts })
      }
      fetchColection()
    }
  }, [dataTv?.belongs_to_collection?.id])




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'center',
        marginRight: 10,
        right: 10,
        top: 10
      }}>
        <TouchableOpacity style={{
          marginRight: 10,
          backgroundColor: 'gray',
          padding: 4,
          borderRadius: 50
        }}>
          <MaterialIcons name='cast' size={24} color='white' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goback()}
          style={{
            backgroundColor: 'gray',
            padding: 4,
            borderRadius: 50
          }}>
          <MaterialIcons name='close' size={24} color='white' />
        </TouchableOpacity>
      </View>
      <YoutubePlayer
        height={230}
        play={true}
        videoId={dataTv.keyYoutube}
      />
      <ScrollView style={{
        paddingHorizontal: 10,
        flex: 1,
      }}>
        <Text style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 16
        }}>{dataTv.title}</Text>
        <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>{new Date(dataTv.release_date).getFullYear()}</Text>
            {dataTv.adult &&
              <Text style={{
                backgroundColor: 'gray',
                color: 'white',
                padding: 3,
                fontSize: 10,
                marginLeft: 5
              }}>18+</Text>}
            {dataTv.episode_run_time ? <Text style={{
              color: 'white',
              padding: 3,
              fontSize: 12,
              marginLeft: 5,
              fontWeight: '900'
            }}>{displayRuntime(dataTv.episode_run_time[0])}</Text> : null}
            <Text style={{
              borderColor: 'gray',
              borderWidth: 1,
              color: 'white',
              padding: 3,
              fontSize: 10,
              marginLeft: 5
            }}>FHD</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Text style={{
              color: 'white',
              marginTop: 5,
              fontWeight: '600'
            }}>Đánh giá: </Text>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <MaterialIcons name='star' size={40} color='yellow' />
              <Text style={{
                position: 'absolute',
                alignSelf: 'center', fontSize: 10, fontWeight: 'bold'
              }}>{dataTv.vote_average}</Text>
            </View>
          </View>
        </View>

        <Button style={{
          width: '100%',
          height: 35,
          backgroundColor: 'white',
          marginTop: 5,
          borderRadius: 8,
          padding: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
          title='Phát'
          icon={() => <MaterialIcons name='play-arrow' size={16} />}
          titleStyle={{ color: 'black', fontSize: 12, fontWeight: '600', marginLeft: 5 }} />
        <Button style={{
          width: '100%',
          height: 35,
          backgroundColor: 'gray',
          marginTop: 5,
          borderRadius: 8,
          padding: 0,
          alignItems: 'center',
          justifyContent: 'center'
        }}
          title='Tải xuống'
          icon={() => <MaterialCommunityIcons name='arrow-collapse-down' size={16} color='white' />}
          titleStyle={{ color: 'white', fontSize: 12, fontWeight: '600', marginLeft: 5 }} />
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%'
        }}>
          <TouchableOpacity style={styles.btn}>
            <AntDesign name='plus' size={18} color='white' />
            <Text style={{ color: 'gray', fontSize: 13 }}>Danh sách</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <MaterialCommunityIcons name='vote' size={18} color='white' />
            <Text style={{ color: 'gray', fontSize: 13 }}>Đánh giá</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <MaterialCommunityIcons name='share' size={18} color='white' />
            <Text style={{ color: 'gray', fontSize: 13 }}>Chia sẻ</Text>
          </TouchableOpacity>
        </View>
        <Text style={{
          color: 'white',
          fontSize: 12,
          fontWeight: '800',
          marginTop: 10
        }}>{dataTv.overview}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          <Text style={{ color: 'gray', fontWeight: '800', fontSize: 10 }}>Thể loại: </Text>
          {dataTv?.genres?.map((x, index) => {
            if (index != dataTv.genres.length - 1) {
              return (
                <Text style={{
                  color: 'gray',
                  fontWeight: '800',
                  fontSize: 10
                }}
                  numberOfLines={1}>{`${x.name}, `}</Text>
              )
            } else if (dataTv.genres.length > 3) {
              return (
                <Text style={{
                  color: 'gray',
                  fontWeight: '800',
                  fontSize: 10,
                }}
                >...</Text>
              )
            }

          })}
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          <Text style={{ color: 'gray', fontWeight: '800', fontSize: 10 }}>Hãng phim: </Text>
          {dataTv?.production_companies?.map((x, index) => {
            if (index != dataTv.production_companies.length - 1) {
              return (
                <Text style={{
                  color: 'gray',
                  fontWeight: '800',
                  fontSize: 10
                }}
                  numberOfLines={1}>{`${x.name}, `}</Text>
              )
            } else if (dataTv.production_companies.length >= 2) {
              return (
                <Text style={{
                  color: 'gray',
                  fontWeight: '800',
                  fontSize: 10,
                }}
                >...</Text>
              )
            }

          })}
        </View>
        <Text style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 16,
          marginTop: 10
        }}
        >Nội dung tương tự</Text>
        <FlatList
          data={dataTv.listColection}
          keyExtractor={(item, index) => (index + "w")}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{ paddingRight: 5, paddingVertical: 10 }}
                onPress={() => {
                  navigateReplace('MovieDetail', item)
                }}>
                <Image
                  source={{ uri: BASE.BASE_URL_IMAGE + item.poster_path }}
                  containerStyle={{ height: 150, width: 100, borderRadius: 8, }}
                  resizeMode='stretch'
                />
              </TouchableOpacity>
            )
          }}
          horizontal />
        <Text style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 16,
          marginTop: 10
        }}
        >Recommented</Text>
        <FlatList
          data={dataTv.recomended}
          keyExtractor={(item, index) => (index + "r")}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{ paddingRight: 5, paddingVertical: 10 }}
                onPress={() => {
                  navigateReplace('TVDetail', item)
                }}>
                <Image
                  source={{ uri: BASE.BASE_URL_IMAGE + item.poster_path }}
                  containerStyle={{ height: 150, width: 100, borderRadius: 8, }}
                  resizeMode='stretch'
                />
              </TouchableOpacity>
            )
          }}
          horizontal />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TVDetail;

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 60
  },
});
