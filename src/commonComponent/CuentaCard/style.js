import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  card: {
    height: 100,
    borderWidth: 0.2,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  cardImg: {
    width: 75,
    height: 75,
    marginTop: 12,
  },
  cardText: {
    fontWeight: '700',
    fontSize: 10,
    textAlign: 'left',
  },
  cardTex2: {
    fontWeight: '400',
  },
  cardSmallText: {
    fontWeight: '400',
    fontSize: 8,
    textAlign: 'left',
  },
  textTop: {
    marginTop: 10,
    width: '15%',
  },
  textTop2: {
    marginTop: 38,
  },
  cardTextTop: {
    marginTop: 15,
  },
  activeText: {
    color: 'rgba(34, 123, 255, 1)',
  },
});
