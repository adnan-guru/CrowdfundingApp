import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {style} from './style.js';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function Cuenta({navigation}) {
  return (
    <View style={style.card}>
      <View style={style.textTop}>
        <Image
          style={style.cardImg}
          source={require('../../assets/card.png')}
        />
      </View>
      <View style={style.textTop}>
        <Text style={[style.cardText, style.cardTextTop]}>Desarollo 1</Text>
        <Text style={style.cardSmallText}>Tasa Anual</Text>
        <Text style={[style.cardText, style.cardText2]}>15%</Text>
        <Text style={style.cardSmallText}>Plazo</Text>
        <Text style={[style.cardText, style.cardText2]}>24 meses</Text>
      </View>
      <View style={[style.textTop, style.textTop2]}>
        <Text style={style.cardSmallText}>Pagos recibidos</Text>
        <Text style={[style.cardText, style.cardText2]}>$54,000</Text>
        <Text style={style.cardSmallText}>pendientes</Text>
        <Text style={[style.cardText, style.cardText2]}>$54,000</Text>
      </View>
      <View style={[style.textTop, style.textTop2]}>
        <Text style={style.cardSmallText}>Fecha inicio</Text>
        <Text style={[style.cardText, style.cardText2]}>01/11/20</Text>
        <Text style={style.cardSmallText}>Fecha termino</Text>
        <Text style={[style.cardText, style.cardText2]}>01/11/21</Text>
      </View>
      <View style={[style.textTop, style.textTop2]}>
        <Text style={style.cardSmallText}>Estado</Text>
        <Text style={[style.cardText, style.activeText]}>Activo</Text>
      </View>
    </View>
  );
}
