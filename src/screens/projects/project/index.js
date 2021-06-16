import React, {useState} from 'react';
import image from '../../../assets/projectsBg.png';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import Campana from '../../projects/campana';
import Grantia from '../../projects/Grantia';
import Detalles from '../../projects/datalles';
import Rendimiento from '../../projects/rendimiento';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  View,
  Image,
  ImageBackground,
  Text,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

import {style} from './style.js';
import {SafeAreaView} from 'react-native-safe-area-context';
const FirstRoute = () => <Campana />;
const SecondRoute = () => <Grantia />;
const ThirdRoute = () => <Detalles />;
const FourthRoute = () => <Rendimiento />;

export default function Project({navigation}) {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Campana'},
    {key: 'second', title: 'Grantia'},
    {key: 'third', title: 'Detalles'},
    {key: 'fourth', title: 'Rendimien'},
  ]);
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={style.indicatorStyle}
      style={style.tabStyle}
      renderLabel={({route, color}, i) => (
        <Text onPress={() => setIndex(i)} style={style.tabTextStyle}>
          {route.title}
        </Text>
      )}
    />
  );
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <ImageBackground source={image} style={style.image}>
            <Icon
              onPress={() => navigation.goBack()}
              style={style.backIcon}
              size={35}
              name="chevron-back"
            />
            <View style={style.headerText}>
              <Text style={style.title}>Desarrollo Alfa</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={style.card}>
          <View style={style.cardContainer}>
            <Text style={[style.title, style.cardTitle]}>Desarrollo Alfa</Text>
            <View style={style.cardSubTitleRow}>
              <Text style={style.subtitle}>Por Desarrollador Uno</Text>
              <View style={style.iconRow}>
                <Image
                  style={style.cardImage}
                  source={require('../../../assets/project.png')}
                />
                <Text style={style.imageText}>Quedan 39 días</Text>
              </View>
            </View>
            <View style={style.loaderr}>
              <Progress.Bar
                width={350}
                progress={0.5}
                height={16}
                borderRadius={15}
                color="#0C1327">
                <Text style={style.loaderPercentage}>3 0 %</Text>
              </Progress.Bar>
            </View>

            <View style={style.loaderTextView}>
              <Text style={style.loaderText}>$1.5MM recaudado</Text>
              <Text style={style.loaderText}>Min $2.5MM</Text>
              <Text style={style.loaderText}>Max $4.5MM</Text>
            </View>
            <View style={style.hairline} />
            <View>
              <Text style={[style.loaderText, style.loaderHeding]}>
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
            </View>
            <View style={style.textCard}>
              <View style={style.textRow}>
                <View style={style.subRow}>
                  <Text style={style.loaderCardText}>Instrumento:</Text>
                  <Text style={style.loaderSubText}>Deuda</Text>
                </View>

                <View style={style.subRow2}>
                  <Text style={style.loaderCardText}>
                    Mínimo para invertir:
                  </Text>
                  <Text style={style.loaderSubText}>$50,000</Text>
                </View>
              </View>
              <View style={style.textRow}>
                <View style={style.subRow}>
                  <Text style={[style.loaderCardText, style.textTop]}>
                    Plazo:
                  </Text>
                  <Text style={[style.loaderSubText, style.subTextTop]}>
                    12 meses
                  </Text>
                </View>
                <View style={style.subRow2}>
                  <Text style={[style.loaderCardText, style.textTop]}>
                    Comisión:
                  </Text>
                  <Text style={[style.loaderSubText, style.subTextTop]}>
                    2.5% anual
                  </Text>
                </View>
              </View>
              <View style={style.textRow}>
                <View style={style.subRow}>
                  <Text style={[style.loaderCardText, style.textTop]}>
                    Pago de intereses:
                  </Text>
                  <Text style={[style.loaderSubText, style.subTextTop]}>
                    Anual
                  </Text>
                </View>
                <View style={style.subRow2}>
                  <Text style={[style.loaderCardText, style.textTop]}>
                    Garantía:
                  </Text>
                  <Text style={[style.loaderSubText, style.subTextTop]}>
                    Hipotecaria
                  </Text>
                </View>
              </View>

              <View style={style.textRow}>
                <View style={style.subRow}>
                  <Text style={[style.loaderCardText, style.textTop]}>
                    Tasa anual fija:
                  </Text>
                  <Text style={[style.loaderSubText, style.subTextTop]}>
                    15%
                  </Text>
                </View>
                <View style={style.subRow2}>
                  <Text style={[style.loaderCardText, style.textTop]}>
                    TIR anual estimada:
                  </Text>
                  <Text style={[style.loaderSubText, style.subTextTop]}>
                    12.4%
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <TabView
            renderTabBar={renderTabBar}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
