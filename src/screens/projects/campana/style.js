import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 21,
  },
  tabTitle: {
    marginTop: 25,
    fontSize: 16,
    fontWeight: '700',
  },
  tabPara: {
    fontWeight: '300',
    fontSize: 10,
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    height: 85,
    paddingTop: 13,
    borderWidth: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 70,
    backgroundColor: '#fff',
  },
  hairline: {
    backgroundColor: 'rgba(187, 187, 187, 0.5);',
    borderWidth: 0.5,
    width: '100%',
    marginTop: 19,
  },
  tabSubTitle: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 13,
    marginTop: 3,
  },
  icon: {
    width: 24,
    height: 24,
  },
  tabSubTitle2: {
    fontWeight: '700',
    marginLeft: 0,
    marginTop: 0,
  },
  iconView: {
    flexDirection: 'row',
  },
  IndicadoresView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  doneImageText: {
    fontWeight: '700',
    fontSize: 14,
    marginTop: 3,
    marginLeft: 13,
  },
  puntosView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  mapImg: {
    width: '100%',
    height: 180,
    marginTop: 15,
  },
});
