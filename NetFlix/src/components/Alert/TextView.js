import React, { Component } from 'react';
import { Text } from 'react-native'
export default class TextView extends Component {
  static defaultProps = {
    numberOfLines: 1,
    style: {
      fontSize: 16,
      textAlign: 'left',
      fontWeight: 'normal',
      color: 'white',
      backgroundColor: 'transparent',
    },
  };
  render() {
    const { text } = this.props;
    if (!text || text.length == 0) {
      return null;
    }
    return <Text {...this.props}>{text}</Text>;
  }
}
