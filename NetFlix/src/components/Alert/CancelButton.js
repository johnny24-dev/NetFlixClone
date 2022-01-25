import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import ImageView from './imageview';
import { DEFAULT_IMAGE_DIMENSIONS } from './constants';

export default class CancelButton extends Component {
  static defaultProps = {
    onPress: () => {},
    style: {
      padding: 8,
      width: DEFAULT_IMAGE_DIMENSIONS,
      height: DEFAULT_IMAGE_DIMENSIONS,
      alignSelf: 'center',
    },
  };
  
  render() {
    const { style, onPress, imageStyle, imageSrc } = this.props;
    return (
      <TouchableOpacity style={style} onPress={onPress}>
        <ImageView style={imageStyle} source={imageSrc} />
      </TouchableOpacity>
    );
  }
}
