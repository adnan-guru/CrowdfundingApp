import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {style} from './style.js';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Screen4({navigation}) {
  return (
    <SafeAreaView style={style.main}>
      <ScrollView>
        <View style={style.container}>
          <View style={style.header}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="reorder-three-outline" size={50} />
            </TouchableOpacity>
            <Text onPress={() => navigation.goBack()} style={style.text}>
              Ajustes
            </Text>
            <Text />
          </View>
        </View>
        <View style={style.textContainer}>
          <Text style={style.text2}>Perfil</Text>
        </View>
        <View style={style.iconsContainer}>
          <View style={style.mainView}>
            <View style={style.iconRow}>
              <Icon style={style.icon} name="person-outline" size={32} />
              <View style={style.IconTextView}>
                <Text style={style.iconTitle}>Datos personales</Text>
                <Text style={[style.iconSubTitle, style.subtitleColor]}>
                  Completado
                </Text>
              </View>
            </View>
            <View>
              <Icon
                style={style.arrowIcon}
                name="ios-chevron-forward-outline"
                size={32}
              />
            </View>
          </View>
          <View style={style.mainView}>
            <View style={style.iconRow}>
              <Icon style={style.icon} name="ios-location-outline" size={32} />
              <View style={style.IconTextView}>
                <Text style={style.iconTitle}>Datos personales</Text>
                <Text style={[style.iconSubTitle, style.subtitleColor]}>
                  Completado
                </Text>
              </View>
            </View>
            <View>
              <Icon
                style={style.arrowIcon}
                name="ios-chevron-forward-outline"
                size={32}
              />
            </View>
          </View>
          <View style={style.mainView}>
            <View style={style.iconRow}>
              <AntIcon style={style.icon} name="institution" size={32} />
              <View style={style.IconTextView}>
                <Text style={style.iconTitle}>Datos personales</Text>
                <Text style={[style.iconSubTitle, style.subtitleColor]}>
                  Completado
                </Text>
              </View>
            </View>
            <View>
              <Icon
                style={style.arrowIcon}
                name="ios-chevron-forward-outline"
                size={32}
              />
            </View>
          </View>
          <View style={style.mainView}>
            <View style={style.iconRow}>
              <MaterialIcon
                style={style.icon}
                name="account-box-outline"
                size={32}
              />
              <View style={style.IconTextView}>
                <Text style={style.iconTitle}>Datos personales</Text>
                <Text style={[style.iconSubTitle, style.subtitleColor]}>
                  Completado
                </Text>
              </View>
            </View>
            <View>
              <Icon
                style={style.arrowIcon}
                name="ios-chevron-forward-outline"
                size={32}
              />
            </View>
          </View>
          <View style={style.mainView}>
            <View style={style.iconRow}>
              <MaterialIcon
                style={style.icon}
                name="human-male-female"
                size={32}
              />
              <View style={style.IconTextView}>
                <Text style={style.iconTitle}>Datos personales</Text>
                <Text style={[style.iconSubTitle, style.subtitleColor]}>
                  Completado
                </Text>
              </View>
            </View>
            <View>
              <Icon
                style={style.arrowIcon}
                name="ios-chevron-forward-outline"
                size={32}
              />
            </View>
          </View>
          <View style={style.mainView}>
            <View style={style.iconRow}>
              <Icon style={style.icon} name="search-outline" size={32} />
              <View style={style.IconTextView}>
                <Text style={style.iconTitle}>Datos personales</Text>
                <Text style={[style.iconSubTitle, style.subtitleColor]}>
                  Completado
                </Text>
              </View>
            </View>
            <View>
              <Icon
                style={style.arrowIcon}
                name="ios-chevron-forward-outline"
                size={32}
              />
            </View>
          </View>
        </View>
        <View style={style.textContainer}>
          <Text style={style.text2}>Seguridad</Text>
        </View>
        <View style={style.iconsContainer}>
          <View style={style.mainView}>
            <View style={style.iconRow}>
              <Icon style={style.icon} name="cloud-done-outline" size={32} />
              <View style={style.IconTextView}>
                <Text style={style.iconTitle}>Datos personales</Text>
                <Text style={[style.iconSubTitle, style.subtitleColor]}>
                  Completado
                </Text>
              </View>
            </View>
            <View>
              <Icon
                style={style.arrowIcon}
                name="ios-chevron-forward-outline"
                size={32}
              />
            </View>
          </View>
          <View style={style.mainView}>
            <View style={style.iconRow}>
              <Icon style={style.icon} name="lock-closed-outline" size={32} />
              <View style={style.IconTextView}>
                <Text style={style.iconTitle}>Datos personales</Text>
                <Text style={[style.iconSubTitle, style.subtitleColor]}>
                  Completado
                </Text>
              </View>
            </View>
            <View>
              <Icon
                style={style.arrowIcon}
                name="ios-chevron-forward-outline"
                size={32}
              />
            </View>
          </View>
          <View style={style.mainView}>
            <View style={style.iconRow}>
              <Icon style={style.icon} name="mail-outline" size={32} />
              <View style={style.IconTextView}>
                <Text style={style.iconTitle}>Datos personales</Text>
                <Text style={[style.iconSubTitle, style.subtitleColor]}>
                  Completado
                </Text>
              </View>
            </View>
            <View>
              <Icon
                style={style.arrowIcon}
                name="ios-chevron-forward-outline"
                size={32}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
