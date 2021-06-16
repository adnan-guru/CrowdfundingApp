import React from 'react';
import image from '../../../../assets/screen2bg.png';
import Button from '../../../../commonComponent/button';
import Input from '../../../../commonComponent/inputs';
import {View, Image, ImageBackground, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {style} from './style.js';
export default function ContinuarSignup({navigation}) {
  return (
    <ScrollView>
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
            <View style={style.inputsPadding}>
              <Text
                onPress={() => navigation.navigate('TabNavigator')}
                style={style.title}>
                Ingresa tu Nombre
              </Text>
              <Image
                onPress={() => navigation.goBack()}
                style={style.InputImage}
                source={require('../../../../assets/screen5.png')}
              />
              <View style={style.input}>
                <Input label="Nombre(s)*" placeholder="Nombre(s)" />
              </View>
              <View style={style.input2}>
                <Input
                  label="Apellido Paterno*"
                  placeholder="Apellido Paterno"
                />
              </View>

              <Input label="Apellido Paterno*" placeholder="Apellido Paterno" />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={style.signup2Button}>
        <Button
          onPress={() => navigation.navigate('TabNavigator')}
          title="Continuar"
        />
      </View>
    </ScrollView>
  );
}
