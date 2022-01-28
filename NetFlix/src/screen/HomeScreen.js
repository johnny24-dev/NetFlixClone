import {
  View, Text, TouchableOpacity,
  StyleSheet,
  FlatList
} from 'react-native';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import * as BASE from '../api/base'
import PosterMovie from '../components/PosterMovie';
import { getListPopilarMovie, getListMovieTrending, getListTVPopular, getListTVTrending, getListDiscoverMovie, getLatestMovie } from '../api/Request'
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../redux/action/moviesAction';
import { Image } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const params = {
  api_key: BASE.API_KEY,
  language: 'vi',
  page: 1
}

const paramsDiscover = {
  ...params,
  sort_by: 'popularity.desc'
}



const HomeScreen = ({ navigation, route }) => {

  const [dataHome, setDataHome] = useState([])
  const [dataPoster, setDataPoster] = useState({})
  const [showMenu, setShowMenu] = useState(true)
  const offsetScroll = useRef(0)
  const dispatch = useDispatch()
  console.log('render:>>')

  useEffect(() => {
    dispatch(ACTIONS.getListMoviesCategory())

    const fetchData = async (params) => {
      const response = await Promise.all([
        getLatestMovie(params),
        getListPopilarMovie(params),
        getListMovieTrending(params),
        getListTVPopular(params),
        getListTVTrending(params),
        getListDiscoverMovie({ ...paramsDiscover, with_genres: 16 }),
        getListDiscoverMovie({ ...paramsDiscover, with_genres: 35 }),
        getListDiscoverMovie({ ...paramsDiscover, with_genres: 27 }),
        getListDiscoverMovie({ ...paramsDiscover, with_genres: 10749 })
      ])
      const dataOut = []
      response.forEach((value, index) => {
        if (index != 0) {
          let titleData = "";
          switch (index) {
            case 1:
              titleData = "Phim thịnh hành";
              break;
            case 2:
              titleData = "Movies Trending";
              break;
            case 3:
              titleData = "TV thịnh hành"
              break
            case 4:
              titleData = "TV Trending"
              break
            case 5:
              titleData = "Phim hoạt hình"
              break
            case 6:
              titleData = "Phim hài"
              break
            case 7:
              titleData = "Phim kinh dị"
              break
            case 8:
              titleData = "Phim lãng mạn"
              break
          }
          const data = {
            title: titleData,
            data: value.data.results
          };
          dataOut.push(data);
        } else {
          setDataPoster(value)
        }
      })
      setDataHome(dataOut)

    }
    fetchData(params)
  }, [])

  const handleScroll = useCallback((event) => {
    const offset = event.nativeEvent.contentOffset.y;
    if (offset > offsetScroll.current) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
    offset >= 0 ? offsetScroll.current = offset : offsetScroll.current = 0
  }, []);


  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <FlatList
        data={dataHome.length > 0 && dataHome}
        keyExtractor={(item, index) => {
          return index.toString()
        }}
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View style={{ paddingLeft: 5, paddingVertical: 5 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
              <FlatList
                data={item.data}
                keyExtractor={(item, index) => {
                  return index.toString() + "w"
                }}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity style={{ paddingRight: 5, paddingVertical: 10 }}>
                      <Image
                        source={{ uri: BASE.BASE_URL_IMAGE + item.poster_path }}
                        containerStyle={{ height: 200, width: 130, borderRadius: 8, }}
                        resizeMode='stretch'
                      />
                    </TouchableOpacity>
                  )
                }}
                horizontal />

            </View>
          )
        }}
        ListHeaderComponent={<PosterMovie item={dataPoster.data}/>}
      />
      {showMenu &&
        <View style={styles.menu}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10
          }}>
            <Image
              source={require('../assets/pngegg.png')}
              style={{ width: 35, height: 35 }} />
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10
            }}>
              <TouchableOpacity style={{ marginRight: 10 }}>
                <MaterialIcons name='cast' size={34} color='white' />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/profile.jpg')}
                  style={{ width: 29, height: 29, borderRadius: 8 }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 15
          }}>
            <TouchableOpacity>
              <Text style={styles.txtMenu}>Phim T.hình</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.txtMenu}>Phim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text style={styles.txtMenu}>Phân loại</Text>
              <MaterialIcons name='arrow-drop-down' color='white' size={22} />
            </TouchableOpacity>
          </View>
        </View>}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    width: '100%',
    height: 90
  },
  txtMenu: {
    color: 'white',
    fontWeight: '500',
  }
})
