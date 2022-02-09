import { ActivityIndicator, Modal, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const windowHeight = Dimensions.get('window').height;

const ProgressHUB = ({ visible }) => {
    return (
        <Modal
            visible={visible}
            animationType='fade'
            transparent={true}>
            <ActivityIndicator size='large' color='red' style = {{flex:1}}/>
        </Modal>
    );
};

export default ProgressHUB;

const styles = StyleSheet.create({});
