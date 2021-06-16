import React from 'react';
import {View, Text} from 'react-native';
import {style} from './style.js';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
export default function Sidebar() {
  return (
    <ScrollView>
      <View>
        <View style={style.container}>
          <Icon style={style.icon} name="person-circle-sharp" size={47} />
          <Text style={style.title}>Juan Pérez</Text>
          <Text style={style.headings}>Verificación completada</Text>
        </View>
        <View style={style.hairline} />
        <View style={style.iconsTop}>
          <View style={style.iconsContainer}>
            <Icon style={style.icons} name="ios-briefcase-sharp" size={24} />
            <Text style={[style.headings, style.iconText]}>
              Historial de inversiones
            </Text>
          </View>
          <View style={style.iconsContainer}>
            <Icon
              style={style.icons}
              name="ios-cloud-download-outline"
              size={24}
            />
            <Text style={[style.headings, style.iconText]}>Pagos recibios</Text>
          </View>
          <View style={style.iconsContainer}>
            <Icon style={style.icons} name="ios-folder-outline" size={24} />
            <Text style={[style.headings, style.iconText]}>Documentos</Text>
          </View>
          <View style={style.iconsContainer}>
            <Icon style={style.icons} name="md-chatbubble-outline" size={24} />
            <Text style={[style.headings, style.iconText]}>FAQ</Text>
          </View>
          <View style={style.iconsContainer}>
            <Icon style={style.icons} name="md-business-outline" size={24} />
            <Text style={[style.headings, style.iconText]}>Fibra Cero</Text>
          </View>
          <View style={style.iconsContainer}>
            <Icon style={style.icons} name="cloud-done-outline" size={24} />
            <Text style={[style.headings, style.iconText]}>
              Términos y condiciones
            </Text>
          </View>
          <View style={style.iconsContainer}>
            <Icon style={style.icons} name="document-text-outline" size={24} />
            <Text style={[style.headings, style.iconText]}>
              Aviso de privacidad
            </Text>
          </View>
          <View style={style.iconsContainer}>
            <Icon style={style.icons} name="enter-outline" size={24} />
            <Text style={[style.headings, style.iconText]}>Cerrar sesión</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
