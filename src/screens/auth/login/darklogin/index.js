import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {style} from './style.js';
import Button from '../../../../commonComponent/button';
import Input from '../../../../commonComponent/inputs';
import {ScrollView} from 'react-native-gesture-handler';
export default function Home({navigation}) {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.main}>
          <Image
            style={style.logo}
            source={require('../../../../assets/logo.png')}
          />
          <View style={style.inputs}>
            <Input placeholder="Correo electrónico" />
          </View>
          <Input placeholder="Contraseña" />
          <Text style={style.text}>¿Olvidaste tu contraseña?</Text>
        </View>
      </ScrollView>
      <View style={style.button}>
        <Button
          color="#FF3366"
          title="Login"
          onPress={() => navigation.navigate('Intro')}
        />
      </View>
    </SafeAreaView>
  );
}
