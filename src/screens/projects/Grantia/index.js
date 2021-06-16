import React from 'react';

import Button from '../../../commonComponent/button';
import {View, Text, ScrollView, Image} from 'react-native';

import {style} from './style.js';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function Grantia({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <Text style={style.tabTitle}>Resumen</Text>
          <View>
            <Text style={style.tabSubTitle}>Tipo de garantía: Hipotecaria</Text>
            <Text style={style.tabPara}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
            <Text style={style.tabPara}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>
        </View>
        <Image
          style={style.agrementImg}
          source={require('../../../assets/grantiaImg.png')}
        />
        <View style={style.button}>
          <Button title="Invertir" color="#0C1327" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
