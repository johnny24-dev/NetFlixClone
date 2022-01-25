import { View, Text, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { Input } from 'react-native-elements/dist/input/Input';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { navigate } from '../../navbar/rootNavigation';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../redux/action/authenAction';
import * as BASE from '../../api/base'
import { useSelector } from 'react-redux';

const urlSignUp = "https://www.themoviedb.org/signup?language=vi"

const Login = ({ navigation, route }) => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [disableBtn, setDisableBtn] = useState(true);
    const userNameRef = useRef(null);
    const dispatch = useDispatch()
    const requestToken = useSelector(state => state.authenReducer.token)

    useEffect(() => {
        userNameRef.current.focus()

    }, [])

    useEffect(() => {
        if (username && password) {
            setDisableBtn(false)
        } else {
            setDisableBtn(true)
        }
    }, [username, password])

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: "https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" }}
                resizeMode='cover'
                style={styles.backGround}>
                <View style={styles.inputContainer}>
                    <Input placeholder='User name'
                        onChangeText={(e) => setUsername(e)}
                        style={styles.input}
                        ref={userNameRef}
                        inputContainerStyle={{
                            borderBottomWidth: 0,
                            borderColor: 'transparent'
                        }}
                        placeholderTextColor="#d9d9d9"
                    />

                    <Input placeholder='Password'
                        secureTextEntry
                        style={styles.input}
                        onChangeText={(e) => setPassword(e)}
                        inputContainerStyle={{
                            borderBottomWidth: 0,
                            borderColor: 'transparent'
                        }}
                        placeholderTextColor="#d9d9d9" />
                    <Button title="Đăng nhập"
                        containerStyle={[styles.buttonContainer, disableBtn && { backgroundColor: 'transparent' }]}
                        titleStyle={{ fontWeight: 'bold' }}
                        disabled={disableBtn}
                        disabledTitleStyle={{ color: 'white' }}
                        onPress={() => {
                            dispatch(ACTIONS.loginRequest(
                                {
                                    apiKey: {
                                        api_key: BASE.API_KEY
                                    },
                                    body: {
                                        username: username,
                                        password: password,
                                        request_token: requestToken
                                    }
                                }
                            ))
                        }}
                    />
                    <Text style={styles.signUp}>Chưa có tài khoản, vui lòng đăng ký {<Text style={styles.underline} onPress={() => Linking.openURL(urlSignUp)}>tại đây!</Text>}</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    backGround: {
        flex: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#6b6b6b',
        padding: 12,
        marginHorizontal: 16,
        borderRadius: 8,
        color: 'white',
    },
    buttonContainer: {
        marginHorizontal: 16,
        padding: 10,
        width: '87%',
        backgroundColor: 'red'
    },
    lb: {
        fontSize: 15,
        marginHorizontal: 16,
        paddingHorizontal: 10,
        color: '#d9d9d9'
    },
    signUp: {
        color: 'white',
    },
    underline: {
        textDecorationLine: 'underline',
        color: 'red',
        fontWeight: 'bold'
    }
})
