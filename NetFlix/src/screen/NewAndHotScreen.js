import { StyleSheet, Button, View, Alert } from 'react-native';
import React, { useState, useCallback, useRef } from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
const NewAndHotScreen = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"iee2TATGMyI"}
        onChangeState={onStateChange}
      />
    </View>
  );
};

export default NewAndHotScreen;

const styles = StyleSheet.create({});
