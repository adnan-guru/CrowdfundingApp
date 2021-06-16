import React from 'react';
import Button from '../../../commonComponent/button';
import {View, Image, Text, ScrollView} from 'react-native';

import {style} from './style.js';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function Campana({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <Text style={style.tabTitle}>Resumen</Text>
          <View>
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
          <View style={style.hairline} />
          <Text style={style.tabTitle}>Indicadores</Text>
          <View style={style.IndicadoresView}>
            <View style={style.iconView}>
              <Image
                style={style.icon}
                source={require('../../../assets/tabimg1.png')}
              />
              <Text style={style.tabSubTitle}>Financiamiento sobre costo</Text>
            </View>
            <Text style={[style.tabSubTitle, style.tabSubTitle2]}>48%</Text>
          </View>
          <View style={style.IndicadoresView}>
            <View style={style.iconView}>
              <Image
                style={style.icon}
                source={require('../../../assets/tabimg2.png')}
              />
              <Text style={style.tabSubTitle}>
                Valor de la garantía sobre el crédito
              </Text>
            </View>
            <Text style={[style.tabSubTitle, style.tabSubTitle2]}>150%</Text>
          </View>
          <View style={style.IndicadoresView}>
            <View style={style.iconView}>
              <Image
                style={style.icon}
                source={require('../../../assets/tabimg3.png')}
              />
              <Text style={style.tabSubTitle}>Control de flujos</Text>
            </View>
            <Text style={[style.tabSubTitle, style.tabSubTitle2]}>
              Entrega gasto por gasto
            </Text>
          </View>
          <View style={style.hairline} />

          <View>
            <Text style={[style.tabTitle, style.PuntosTitle]}>
              Puntos destacados
            </Text>
            <View>
              <View style={style.puntosView}>
                <Image
                  style={style.icon}
                  source={require('../../../assets/tabDone.png')}
                />
                <Text style={style.doneImageText}>Punto destacado No. 1</Text>
              </View>
              <Text style={style.tabPara}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{' '}
              </Text>
            </View>
            <View>
              <View style={style.puntosView}>
                <Image
                  style={style.icon}
                  source={require('../../../assets/tabDone.png')}
                />
                <Text style={style.doneImageText}>Punto destacado No. 2</Text>
              </View>
              <Text style={style.tabPara}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{' '}
              </Text>
            </View>
            <View>
              <View style={style.puntosView}>
                <Image
                  style={style.icon}
                  source={require('../../../assets/tabDone.png')}
                />
                <Text style={style.doneImageText}>Punto destacado No. 3</Text>
              </View>
              <Text style={style.tabPara}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{' '}
              </Text>
            </View>
          </View>
          <Text style={style.tabTitle}>Ubicación</Text>
        </View>
        <Image
          style={style.mapImg}
          source={require('../../../assets/map.png')}
        />
        <View style={style.button}>
          <Button title="Invertir" color="#0C1327" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
