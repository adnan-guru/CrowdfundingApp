import React from 'react';
import image from '../../../assets/screen2bg.png';
import Button from '../../../commonComponent/button';
import {View, Image, ImageBackground, Text} from 'react-native';
import {style} from './style.js';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Screen2({navigation}) {
  return (
    <ImageBackground source={image} style={style.image}>
      <View style={style.container}>
        <Icon
          onPress={() => navigation.goBack()}
          style={style.backIcon}
          size={35}
          name="chevron-back"
        />

        <Image
          onPress={() => navigation.goBack()}
          style={style.logo}
          source={require('../../../assets/logo.png')}
        />
        <Text style={style.text}>CROWDFUNDING</Text>
        <Text
          onPress={() => navigation.navigate('Iniciarlogin')}
          style={[style.text, style.text2]}>
          INMOBILIARIO
        </Text>

        <View style={style.introButton}>
          <Button
            onPress={() => navigation.navigate('Iniciarlogin')}
            color="#0C1327"
            title="Iniciar sesión"
          />
        </View>
        <View style={[style.introButton, style.introButton2]}>
          <Button color="#227BFF" title="Crear cuenta" />
        </View>
      </View>
    </ImageBackground>
  );
}
