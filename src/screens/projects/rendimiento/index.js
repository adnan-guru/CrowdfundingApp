import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import * as Progress from 'react-native-progress';

import {style} from './style.js';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function Detalles({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <Text style={style.title}>Calculadora</Text>
          <Text style={style.heading}>1. Monto a </Text>
          <Text style={[style.heading, style.subHeading]}>invertir</Text>
          <Text style={[style.heading, style.amountText]}>$80,000</Text>
          <View style={{marginTop: 16}}>
            <Progress.Bar
              width={350}
              progress={0.5}
              height={10}
              borderRadius={15}
              color="#0C1327"
            />
          </View>
          <View style={style.amountView}>
            <Text style={style.amount1}>$50,000</Text>
            <Text style={[style.amount1, style.amount2]}>$200,000</Text>
          </View>
          <Text style={style.subtitle}>
            2. Plazo estimado para fines del cálculo
          </Text>
          <Text style={[style.subtitle, {textAlign: 'center'}]}>6 Meses</Text>
          <View style={{marginTop: 16}}>
            <Progress.Bar
              width={350}
              progress={0.5}
              height={10}
              borderRadius={15}
              color="#0C1327"
            />
          </View>
          <View style={style.amountView}>
            <Text style={style.amount1}>3 meses</Text>
            <Text style={[style.amount1, style.amount2]}>24 meses</Text>
          </View>
          <View style={style.hairline} />
          <View style={style.subamountView}>
            <Text style={[style.subtitle, style.subamount]}>
              Inversión total
            </Text>
            <Text style={[style.subtitle, style.subamount]}>$100,000</Text>
          </View>
          <View style={style.hairline} />
          <View style={style.subamountView}>
            <Text style={[style.subtitle, style.subamount]}>Plazo</Text>
            <Text style={[style.subtitle, style.subamount]}>6 meses</Text>
          </View>
          <View style={style.hairline} />
          <View style={style.subamountView}>
            <Text style={[style.subtitle, style.subamount]}>
              Rendimiento estimado
            </Text>
            <Text style={[style.subtitle, style.subamount]}>$5,600</Text>
          </View>
          <View style={style.hairline} />
          <View style={style.subamountView}>
            <Text style={[style.subtitle, {fontWeight: '700'}]}>
              Al final del plazo recibes
            </Text>
            <Text style={[style.subtitle, {fontWeight: '700'}]}>$105,600</Text>
          </View>
          <View style={style.hairline} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
