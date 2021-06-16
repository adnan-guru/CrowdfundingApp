import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import InvertirCard from '../../../commonComponent/InvertirCard';
import {style} from './style.js';
import {SafeAreaView} from 'react-native-safe-area-context';
import img from '../../../assets/building.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Screen4({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <View style={style.header}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="reorder-three-outline" size={50} />
            </TouchableOpacity>

            <Text onPress={() => navigation.goBack()} style={style.text}>
              Invertir
            </Text>
            <Text />
          </View>
          <Text style={style.text2}>Oportunidades de Inversión</Text>
          <View style={style.cardPadding}>
            <InvertirCard card1 />
          </View>
          <InvertirCard image={img} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
