import {
    Modal, StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    SafeAreaView
} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { navigate, navigateReplace } from '../navbar/rootNavigation'


const CategoryModal = ({ visiableCategory, handleClose, fromScreen }) => {
    const listCategory = useSelector(state => state.moviesReducer.category)
    return (
        <Modal
            visible={visiableCategory}
            animationType='fade'
            transparent
        >
            <View style={{
                backgroundColor: 'rgba(0, 0, 0, 0.86)',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <FlatList
                    data={listCategory}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    extraData={listCategory}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={{ marginBottom: 20 }}
                                onPress={() => {
                                    if(fromScreen != 'ListMoviesByCategory'){
                                        navigate('ListMoviesByCategory', item)
                                    }else{
                                        navigateReplace('ListMoviesByCategory', item)
                                    }
                                }}>
                                <Text style={{ color: 'gray', fontSize: 20 }}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    style={{ marginTop: 100, alignSelf: 'center' }} />
                <View style={{
                    position: 'absolute',
                    bottom: 20
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'white',
                        width: 50,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 30
                    }}
                        onPress={handleClose}>
                        <Ionicons name='close' size={36} color='black' />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default CategoryModal

const styles = StyleSheet.create({

})