import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Avatar, Button } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS } from '../redux/action/authenAction'
import * as BASE from '../api/base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'

const ProfileScreen = () => {

    const sessionId = useSelector(state => state.authenReducer.sessionId)
    console.log("🚀 ~ file: ProfileScreen.js ~ line 15 ~ ProfileScreen ~ sessionId", sessionId)
    const accoutInfo = useSelector(state => state.accountReducer.info)
    console.log("🚀 ~ file: ProfileScreen.js ~ line 13 ~ ProfileScreen ~ accoutInfo", accoutInfo)
    const dispatch = useDispatch()
    const logoutParams = {
        apiKey: {
            api_key: BASE.API_KEY
        },
        body: {
            session_id: sessionId
        }
    }

    return (
        <View style={{ paddingHorizontal: 16, flex: 1, backgroundColor: 'black' }}>
            <View style={{
                flexDirection: 'row',
                //justifyContent: 'center',
                marginVertical:20,
                alignItems: 'center'
            }}>
                <Avatar
                    size={128}
                    rounded
                    source={require('../assets/profile.jpg')} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.txt}>ID: <Text style={styles.txtDetail}>{accoutInfo?.id}</Text></Text>
                    <Text style={styles.txt}>Name: <Text style={styles.txtDetail}>{accoutInfo?.name ?? 'unknow'}</Text></Text>
                    <Text style={styles.txt}>User name: <Text style={styles.txtDetail}>{accoutInfo?.username}</Text></Text>
                    <Button title={'Đăng xuất'}
                        containerStyle={{ marginTop: 10, }}
                        buttonStyle={{ backgroundColor: 'red' }}
                        onPress={() => dispatch(ACTIONS.logoutRequest(logoutParams))} />
                </View>
            </View>
            <View style={{ marginVertical: 20 }}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#212121',
                    padding: 20,
                    marginBottom: 10
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Fontisto name='film' color='white' size={28}/>
                        <Text style={{ color: 'white', fontSize: 18, marginLeft:10 }}>Danh sách Phim</Text>
                    </View>
                    <Ionicons name='chevron-forward' color='gray' size={28} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#212121',
                    padding: 20,
                    marginBottom: 10
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Ionicons name='ios-tv-outline' color='white' size={28}/>
                        <Text style={{ color: 'white', fontSize: 18, marginLeft:10 }}>Danh sách Tv shows</Text>
                    </View>
                    <Ionicons name='chevron-forward' color='gray' size={28} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#212121',
                    padding: 20,
                    marginBottom: 10
                }}>
                    <Ionicons name='ios-information-circle-outline' color='white' size={28} />
                    <Text style={{ color: 'white', fontSize: 18, marginLeft: 10 }}>Phiên bản 1.0.0</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    txt: {
        color: 'gray'
    },
    txtDetail: {
        fontWeight: 'bold',
        color: 'white'
    }
})