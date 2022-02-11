import React, { useEffect, useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as BASE from '../api/base'
import { ActionsSearch, TypeSearch } from '../redux/action/searchAction';
import { SearchBar, Image } from 'react-native-elements'
import { navigate } from '../navbar/rootNavigation';
import { FlatList } from 'react-native-gesture-handler';

const queryParams = {
  api_key: BASE.API_KEY,
  language: 'vi',
  query: 'iron'
}

const SearchScreen = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const listMoviesAndTvs = useSelector(state => state.searchReducer.listMovieAndTv)
  
  useEffect(() => {
    dispatch(ActionsSearch.requestSearch(queryParams))
  }, []);

  useEffect(()=>{
    if(search){
      let newQuery = {
        ...queryParams,
        query:search
      }
      dispatch(ActionsSearch.requestSearch(newQuery))
    }else{
      dispatch(ActionsSearch.requestSearch(queryParams))
    }
  },[search])

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        placeholder="Search..."
        onChangeText={(e) => {
          setSearch(e)
        }}
        value={search}
        containerStyle={{backgroundColor: 'black' }}
      />
      <FlatList
        data={listMoviesAndTvs}
        style={{ marginHorizontal: 5 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'column',
                margin: 3
              }}
              onPress={()=>{
                if(item?.first_air_date){
                  navigate('TVDetail',item)
                }else{
                  navigate('MovieDetail',item)
                }
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
        extraData={listMoviesAndTvs}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

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
});
