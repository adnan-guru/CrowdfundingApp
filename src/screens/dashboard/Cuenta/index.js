import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {style} from './style.js';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CuentaCard from '../../../commonComponent/CuentaCard';
export default function Cuenta({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <View style={style.header}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="reorder-three-outline" size={50} />
            </TouchableOpacity>
            <Text onPress={() => navigation.goBack()} style={style.text}>
              Cuenta
            </Text>
            <Text />
          </View>
          <View style={style.tabTextView}>
            <Text style={style.tabText}>Resumen </Text>
            <Text style={[style.tabText, style.tabtext2]}>Transacciones</Text>
          </View>
          <View style={style.amountView}>
            <Text style={style.tabText2}>VALOR PORTAFOLIO</Text>
            <Text style={style.amountText}>$100,000</Text>
          </View>
          <View style={style.amountView2}>
            <View style={style.amountAlign}>
              <View style={style.iconStyle}>
                <Icon style={style.icon} name="ios-caret-up" />
                <Text style={[style.amountText, style.amountText2]}>$500</Text>
              </View>
              <Text style={style.smallText}>Ganancias Diarias Estimadas</Text>
            </View>
            <View style={style.amountAlign}>
              <Text style={[style.amountText, style.amountText2]}>$500</Text>
              <Text style={style.smallText}>Ganancias Diarias Estimadas</Text>
            </View>
          </View>
          <View style={style.hairline} />
          <Text style={[style.tabText, style.tabCardTitle]}>Portafolio</Text>
        </View>
        <CuentaCard />
        <CuentaCard />
        <CuentaCard />
      </ScrollView>
    </SafeAreaView>
  );
}
