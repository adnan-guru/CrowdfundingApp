import React from 'react';
import image from '../../../../assets/screen2bg.png';
import Button from '../../../../commonComponent/button';
import Input from '../../../../commonComponent/inputs';
import {View, Image, ImageBackground, Text} from 'react-native';
import {style} from './style.js';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Screen3({navigation}) {
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
          source={require('../../../../assets/logo.png')}
        />
        <View style={style.card}>
          <View style={{paddingHorizontal: 32}}>
            <Text style={style.title}>Iniciar sesión</Text>
            <View style={style.inputs}>
              <Input label="Email*" placeholder="Email" />
            </View>
            <Input label="Contraseña* " placeholder="Contraseña" />

            <Text
              onPress={() => navigation.navigate('AbrirSignup')}
              style={style.inputBottomText}>
              ¿Olvidaste tu contraseña?
            </Text>
          </View>
        </View>
        <View style={style.loginButton}>
          <Button
            onPress={() => navigation.navigate('AbrirSignup')}
            title="Iniciar Sesión"
          />
        </View>
      </View>
    </ImageBackground>
  );
}
