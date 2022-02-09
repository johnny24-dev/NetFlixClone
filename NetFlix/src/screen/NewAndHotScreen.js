import {
  StyleSheet, Button, View, Alert,
  SafeAreaView, Image, TouchableOpacity, Text, ScrollView, ActivityIndicator,
} from 'react-native';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as BASE from '../api/base'
import { getListMovieNowPlaying, getListMovieTopRate, getListMovieUpComing } from '../api/Request';
import { useSelector } from 'react-redux';
import UpComming from '../components/UpComming';
import NowAndTopMovie from '../components/NowAndTopMovie';


const queryParams = {
  api_key: BASE.API_KEY,
  language: 'vi',
  page: 1
}




const NewAndHotScreen = () => {

  const scrollRef = useRef(null)
  const scrollHorizontal = useRef(null)
  const [currentOffset, setCurrentOffset] = useState(0)
  const [indexScrool, setIndexScrool] = useState(0)

  const [offsetNowPlaying, setOffsetNowPlaying] = useState(0)
  const [offsetTop, setOffsetTop] = useState(0)
  const [data, setData] = useState([])
  const movieCategory = useSelector(state => state.moviesReducer.category)

  useEffect(() => {
    const fetchData = async () => {
      const response = await Promise.all([
        getListMovieUpComing(queryParams),
        getListMovieNowPlaying(queryParams),
        getListMovieTopRate(queryParams)])


      // map movie category

      response.forEach((value) => {
        value.data.results.forEach((itemValue) => {
          itemValue.category = itemValue.genre_ids?.map((item) => {
            movieCategory.map((x) => {
              if (item == x.id) {
                item = x
              }
            })
            return item
          })
        })
      })

      let dataOut = {}
      dataOut.upComming = response[0].data.results
      dataOut.upComming
      dataOut.nowPlaying = response[1].data.results
      dataOut.topRate = response[2].data.results

      setData(dataOut)
    }

    fetchData()

  }, [])

  useEffect(() => {
   if(offsetNowPlaying > 0 && offsetTop > 0 ){
    if (currentOffset < offsetNowPlaying) {
      setIndexScrool(0)
      scrollHorizontal.current?.scrollTo({ x: 0, y: 0, animated: true })

    } else if (currentOffset >= offsetNowPlaying && currentOffset < offsetTop ) {
      setIndexScrool(1)
      scrollHorizontal.current?.scrollTo({ x: 200, y: 0, animated: true })
    } else if (currentOffset >= offsetTop) {
      setIndexScrool(2)
      scrollHorizontal.current?.scrollToEnd({ animated: true })
    }
   }else {
     console.log('exception:>')
   }
  }, [currentOffset])


  const handleScroll = (event) => {
    const offset = event.nativeEvent.contentOffset.y;
    if (offset < offsetNowPlaying && offsetNowPlaying > 0) {
      setCurrentOffset(0)
    } else if (offset >= offsetNowPlaying && offset < offsetTop && offsetNowPlaying > 0 && offsetTop > 0) {
      setCurrentOffset(offsetNowPlaying)
    } else if (offset >= offsetTop && offsetTop > 0) {
      setCurrentOffset(offsetTop)
      
    }
  };

  const find_dimesion2 = useCallback((event) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setOffsetNowPlaying(y)
  }, [])
  const find_dimesion3 = useCallback((event) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setOffsetTop(y)
  }, [])





  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
      }}>
        <Text style={styles.headerTitle}>Mới & Hot</Text>
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
      <ScrollView horizontal 
      ref={scrollHorizontal} 
      showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={[styles.chip, indexScrool == 0 && styles.hightLightBtn]}
        onPress={()=>{
          scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true })
          setIndexScrool(0)
        }}>
          <Image source={require('../assets/popcorn.png')}
            style={{ width: 35, height: 35 }} />
          <Text style={[styles.txtChip, indexScrool == 0 && styles.hightLightTxt]}>Sắp ra mắt</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.chip, indexScrool == 1 && styles.hightLightBtn]}
        onPress = { () => {
          scrollHorizontal.current?.scrollTo({ x: 200, y: 0, animated: true })
          scrollRef.current?.scrollTo({ x: 0, y: offsetNowPlaying, animated: true })
          setIndexScrool(1)
        }
        }>
          <Image source={require('../assets/flames.png')}
            style={{ width: 35, height: 35 }} />
          <Text style={[styles.txtChip, indexScrool == 1 && styles.hightLightTxt]}>Mọi người đang xem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.chip, indexScrool == 2 && styles.hightLightBtn]} 
        onPress = {() => {
          scrollHorizontal.current.scrollToEnd({ animated: true })
          scrollRef.current?.scrollTo({ x: 0, y: offsetTop, animated: true })
          setIndexScrool(2)
          }}>
          <Image source={require('../assets/top-rated.png')}
            style={{ width: 35, height: 35 }} />
          <Text style={[styles.txtChip, indexScrool == 2 && styles.hightLightTxt]}>Top 10</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView
        onScroll={handleScroll}
        ref={scrollRef}
        style={{marginTop:10}}
      >
        <UpComming list={data.upComming} />
        <NowAndTopMovie list={data.nowPlaying} find_dimesions={find_dimesion2} />
        <NowAndTopMovie list={data.topRate} find_dimesions={find_dimesion3} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewAndHotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },

  chip: {
    marginVertical: 15,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 50,
    borderRadius: 60,
    padding: 15,
    marginLeft: 10
  },
  txtChip: {
    color: 'white',
    fontWeight: 'bold'
  },
  hightLightBtn:{
    marginVertical: 15,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    borderRadius: 60,
    padding: 15,
    marginLeft: 10
  },
  hightLightTxt:{
    color: 'black',
    fontWeight: 'bold'
  }

});
