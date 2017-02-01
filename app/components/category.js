import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class Category extends Component {
  render() {
    return (
      <MKButton
        backgroundColor='red'
        shadowRadius={2}
        shadowOffset={{width:0, height:2}}
        shadowOpacity={.7}
        shadowColor="black"
        onPress={() => {
          console.log('hi, raised button!');
        }}
      >
        <Text pointerEvents="none"
              style={{color: 'black', fontWeight: 'bold',}}>
          RAISED BUTTON
        </Text>
      </MKButton>
    );
  }
}
