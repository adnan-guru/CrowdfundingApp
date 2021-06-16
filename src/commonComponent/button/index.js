import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {style} from './style.js';
function Buttons(props) {
  const buttonStyle = {
    backgroundColor: props.color || '#227BFF',
  };

  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress && props.onPress}
        style={[style.appButtonContainer, buttonStyle]}>
        <Text style={style.appButtonText}>
          {props.title ? props.title : 'Contact Us'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default Buttons;
