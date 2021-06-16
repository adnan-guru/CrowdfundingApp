import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {style} from './style.js';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../commonComponent/button';
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
              Contacto
            </Text>
            <Text />
          </View>
          <Text style={[style.text, style.subTitle]}>¿Necesitas ayuda?</Text>
          <Text style={style.subTitleText}>Estamos aquí para ayudarte</Text>
        </View>
        <View style={style.imageView}>
          <Image
            style={style.Image}
            source={require('../../../assets/success1.png')}
          />
          <View style={style.button}>
            <Button title="Contactar en WhatsApp" />
          </View>
          <Text style={style.heading}>
            Para respuestas inmediatas visita nuestra sección de
          </Text>
          <Text style={[style.heading, style.subHeading]}>
            Preguntas Frecuentes
          </Text>
          <Text
            onPress={() => navigation.navigate('Project')}
            style={style.connectText}>
            Conecta con nosotros:
          </Text>
          <View style={style.icons}>
            <Image source={require('../../../assets/VectorF.png')} />
            <Image
              style={style.iconSpace}
              source={require('../../../assets/VectorT.png')}
            />
            <Image
              style={style.iconSpace}
              source={require('../../../assets/VectorIn.png')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
