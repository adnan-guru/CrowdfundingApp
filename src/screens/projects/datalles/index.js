import React from 'react';
import Button from '../../../commonComponent/button';
import {View, Image, ImageBackground, Text, ScrollView} from 'react-native';

import {style} from './style.js';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function Detalles({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <Text style={style.tabTitle}>Estructura de capital</Text>
          <View>
            <Text style={style.tabPara}>
              Estas son las fuentes de donde proviene el dinero para cubrir el
              costo total requerido por el proyecto.
            </Text>
          </View>
          <View style={style.dotView}>
            <View style={style.titlelView}>
              <Image
                style={style.dotImg}
                source={require('../../../assets/Ellipse1.png')}
              />
              <Text style={style.imgText}>Deuda Senior</Text>
            </View>
            <View style={style.amountView}>
              <Text style={style.imgText}>$2,000,000</Text>
              <Text style={[style.imgText, style.amountText]}>20%</Text>
            </View>
          </View>
          <View style={{marginTop: 23}}>
            <View style={style.dotView}>
              <View style={style.titlelView}>
                <Image
                  style={style.dotImg}
                  source={require('../../../assets/Ellipse2.png')}
                />
                <Text style={style.imgText}>Deuda Preferente</Text>
              </View>
              <View style={style.amountView}>
                <Text style={style.imgText}>$2,000,000</Text>
                <Text style={[style.imgText, style.amountText]}>20%</Text>
              </View>
            </View>
            <View style={style.dotView}>
              <View style={style.titlelView}>
                <Image
                  style={style.dotImg}
                  source={require('../../../assets/Ellipse3.png')}
                />
                <Text style={style.imgText}>Deuda Junior</Text>
              </View>
              <View style={style.amountView}>
                <Text style={style.imgText}>$2,000,000</Text>
                <Text style={[style.imgText, style.amountText]}>20%</Text>
              </View>
            </View>
            <View style={style.dotView}>
              <View style={style.titlelView}>
                <Image
                  style={style.dotImg}
                  source={require('../../../assets/Ellipse4.png')}
                />
                <Text style={style.imgText}>Capital desarrollador</Text>
              </View>
              <View style={style.amountView}>
                <Text style={style.imgText}>$2,000,000</Text>
                <Text style={[style.imgText, style.amountText]}>20%</Text>
              </View>
            </View>
            <View style={style.dotView}>
              <View style={style.titlelView}>
                <Image
                  style={style.dotImg}
                  source={require('../../../assets/Ellipse5.png')}
                />
                <Text style={style.imgText}>Preventa</Text>
              </View>
              <View style={style.amountView}>
                <Text style={style.imgText}>$2,000,000</Text>
                <Text style={[style.imgText, style.amountText]}>20%</Text>
              </View>
            </View>
            <View style={style.dotView}>
              <View style={style.titlelView}>
                <Text style={style.totalText}>Total</Text>
              </View>
              <View style={style.amountView}>
                <Text style={style.totalAmountText}>$10,000,000</Text>
                <Text style={[style.totalAmountText, style.totalAmountText2]}>
                  100%
                </Text>
              </View>
            </View>
            <View style={style.hairline} />
            <Text style={style.tabTitle}>Detalles del presupuesto</Text>
            <View>
              <Text style={style.tabPara}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
              <Text style={style.tabPara}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
              <View style={style.hairline} />
            </View>
            <Text style={style.tabTitle}>Documentos</Text>
            <View style={style.DocumentoView1}>
              <Text style={[style.totalAmountText, style.DocumentoTitle]}>
                Documento
              </Text>
              <Text style={[style.totalAmountText, style.DocumentoTitle]}>
                Ver
              </Text>
            </View>
            <View style={[style.hairline, style.secoundHr]} />
            <View style={style.DocumentoView}>
              <Text style={style.Documento1}>Documento 1</Text>
              <Text style={[style.Documento1, style.Documento2]}>
                Ver documento
              </Text>
            </View>
            <View style={[style.hairline, style.secoundHr]} />
            <View style={style.DocumentoView}>
              <Text style={style.Documento1}>Documento 2</Text>
              <Text style={[style.Documento1, style.Documento2]}>
                Ver documento
              </Text>
            </View>
            <View style={[style.hairline, style.secoundHr]} />
            <View style={style.DocumentoView}>
              <Text style={style.Documento1}>Documento 3</Text>
              <Text style={[style.Documento1, style.Documento2]}>
                Ver documento
              </Text>
            </View>
            <View style={[style.hairline, style.secoundHr]} />
            <Text style={style.tabTitle}>Documentos</Text>
            <View style={style.DocumentoView1}>
              <Text style={[style.totalAmountText, style.DocumentoTitle]}>
                Nombre
              </Text>
              <Text style={[style.totalAmountText, style.DocumentoTitle]}>
                Cargo
              </Text>
            </View>
            <View style={[style.hairline, style.secoundHr]} />
            <View style={style.DocumentoView}>
              <Text style={style.Documento1}>Juan Pérez</Text>
              <Text style={style.Documento1}>Representante legal</Text>
            </View>
            <View style={[style.hairline, style.secoundHr]} />
            <View style={style.DocumentoView}>
              <Text style={style.Documento1}>Juan Pérez</Text>
              <Text style={style.Documento1}>Representante legal</Text>
            </View>
            <View style={[style.hairline, style.secoundHr]} />
            <Text style={style.tabTitle}>Sobre el desarrollador</Text>
            <Image
              style={style.logoImg}
              source={require('../../../assets/tablogo.png')}
            />
            <Text style={style.tabTitle}>Fibra Cero</Text>

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
        <View style={style.button}>
          <Button title="Invertir" color="#0C1327" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
