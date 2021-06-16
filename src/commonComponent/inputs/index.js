import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {style} from './style.js';

function Inputs(props) {
  const inputStyle = {
    backgroundColor: props.color || 'transparent',
  };
  return (
    <View style={style.inputTop}>
      <Text style={style.inputTitle}>{props.label ? props.label : ''}</Text>
      <TextInput
        style={[style.input, inputStyle]}
        placeholder={props.placeholder ? props.placeholder : ''}
        placeholderTextColor="#A4A9B2"
        keyboardType="numeric"
      />
    </View>
  );
}
export default Inputs;
