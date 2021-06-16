import React from 'react';
import image from '../../../../assets/screen2bg.png';
import Button from '../.../../../../../commonComponent/button';
import {View, Image, ImageBackground, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../../../../commonComponent/inputs';

import {style} from './style.js';
import {ScrollView} from 'react-native-gesture-handler';
export default function Screen4({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
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
              <Text
                onPress={() => navigation.navigate('ContinuarSignup')}
                style={style.title}>
                Abrir Cuenta
              </Text>
              <View style={style.input}>
                <Input label="Email*" placeholder="Nombre(s)" />
              </View>
              <View style={style.input2}>
                <Input label="Contraseña*" placeholder="Apellido Paterno" />
              </View>
              <View style={style.input3}>
                <Input
                  label="Repetir contraseña*"
                  placeholder="Apellido Paterno"
                />
              </View>
            </View>
          </View>
          <View style={style.signupButton}>
            <Button
              onPress={() => navigation.navigate('ContinuarSignup')}
              title="Abrir Cuenta"
            />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
