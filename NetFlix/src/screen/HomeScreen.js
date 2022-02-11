import {
  View, Text, TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform
} from 'react-native';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import * as BASE from '../api/base'
import PosterMovie from '../components/PosterMovie';
import { getListPopilarMovie, 
  getListMovieTrending, 
  getListTVPopular, 
  getListTVTrending, 
  getListDiscoverMovie, 
  getLatestMovie, } from '../api/Request'
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../redux/action/moviesAction';
import { ActionsAccount } from '../redux/action/accountAction'
import { Image } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { navigate } from '../navbar/rootNavigation';
import CategoryModal from '../components/CategoryModal';
import {FlatList} from 'react-native-gesture-handler'

const params = {
  api_key: BASE.API_KEY,
  language: 'vi',
  page: 1
}

const paramsDiscover = {
  ...params,
  sort_by: 'popularity.desc'
}

const gotoDetail = (item) => {
  navigate('MovieDetail', item)
}



const HomeScreen = () => {

  const [dataHome, setDataHome] = useState([])
  const [dataPoster, setDataPoster] = useState({})
  const [showMenu, setShowMenu] = useState(true)
  const [showCategory, setShowCategory] = useState(false)
  const offsetScroll = useRef(0)
  const dispatch = useDispatch()
  const sessionId = useSelector(state => state.authenReducer.sessionId)

  useEffect(() => {
    dispatch(ACTIONS.getListMoviesCategory())
    dispatch(ActionsAccount.getDetail({ api_key: BASE.API_KEY, session_id: sessionId }))

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
          let subject = ""
          switch (index) {
            case 1:
              titleData = "Phim thịnh hành";
              subject = "movie"
              break;
            case 2:
              titleData = "Movies Trending";
              subject = "movie"
              break;
            case 3:
              titleData = "TV thịnh hành"
              subject = "tv"
              break
            case 4:
              titleData = "TV Trending"
              subject = "tv"
              break
            case 5:
              titleData = "Phim hoạt hình"
              subject = "movie"
              break
            case 6:
              titleData = "Phim hài"
              subject = "movie"
              break
            case 7:
              titleData = "Phim kinh dị"
              subject = "movie"
              break
            case 8:
              titleData = "Phim lãng mạn"
              subject = "movie"
              break
          }
          value.data.results = value.data.results.map((item) => ({ ...item, subject }))
          const data = {
            title: titleData,
            data: value.data.results
          };
          dataOut.push(data);
        } else {
          setDataPoster({ ...value, subject: 'movie' })
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

  const handelClose = () => {
    setShowCategory(!showCategory)
  }


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
                    <TouchableOpacity
                      style={{ paddingRight: 5, paddingVertical: 10 }}
                      onPress={() => {
                        if (item.subject == 'tv') {
                          navigate('TVDetail', item)
                        } else {
                          navigate('MovieDetail', item)
                        }
                      }}>
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
        ListHeaderComponent={<PosterMovie item={dataPoster.data} dandleInfo={() => gotoDetail(dataPoster.data)} />}
      />
      {showMenu &&
        <SafeAreaView style={styles.menu}>
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
              <TouchableOpacity
              onPress={()=>navigate('Profile')}>
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
            <TouchableOpacity
              onPress={() => navigate('TvShow')}>
              <Text style={styles.txtMenu}>Phim T.hình</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Movies')}>
              <Text style={styles.txtMenu}>Phim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
              onPress={() => setShowCategory(true)}>
              <Text style={styles.txtMenu}>Phân loại</Text>
              <MaterialIcons name='arrow-drop-down' color='white' size={22} />
            </TouchableOpacity>
          </View>
          <CategoryModal visiableCategory={showCategory}
            handleClose={handelClose} />
        </SafeAreaView>}
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
    height: Platform.OS == 'android' ? 90 : 140
  },
  txtMenu: {
    color: 'white',
    fontWeight: '500',
  }
})
