import React from 'react';
import {View, Image, Text} from 'react-native';

import {style} from './style.js';
export default function InvertirCard(props) {
  return (
    <View style={style.card1}>
      <View style={style.textView}>
        <Text style={style.cardText}>Desarrollo Alfa</Text>
        <Text style={[style.cardText, style.cardText2]}>Quedan 39 días</Text>
      </View>
      <Text style={style.cardText3}>Deuda</Text>
      <Image
        style={style.cardImage1}
        source={
          props.image ? props.image : require('../../assets/card1Img1.png')
        }
      />
      <View style={style.loader}>
        <Text style={[style.cardText3, style.cardText4]}>40%</Text>
        <Text style={[style.cardText3, style.cardText5]} />
      </View>
      <View style={style.footerView}>
        <Text style={style.footerText}>$1.5MM recaudado</Text>
        <Text style={style.footerText}>Min $4.5MM</Text>
        <Text style={style.footerText}>Max $4.5MM</Text>
      </View>
      <View style={style.hairline} />

      <View style={style.footerView}>
        <Text style={style.footerText}>Tasa anual fija</Text>
        <Text style={style.footerText}>Mín de inversión</Text>
        <Text style={style.footerText}>Plazo</Text>
      </View>
      <View style={style.footerView}>
        <Text style={style.footerText2}>12.32%</Text>
        <Text style={style.footerText2}>$54,000 MXN</Text>
        <Text style={style.footerText2}>12 meses</Text>
      </View>
    </View>
  );
}
