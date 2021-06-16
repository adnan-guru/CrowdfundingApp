import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 21,
    marginBottom: 50,
  },
  title: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25,
    height: 25,
    letterSpacing: 0,
    color: 'rgba(12, 19, 39, 1)',
  },
  heading: {
    fontWeight: '400',
    fontSize: 14,
    width: 107,
    color: 'rgba(12, 19, 39, 1)',
    marginLeft: 25,
    lineHeight: 21,
  },

  subHeading: {
    marginLeft: 40,
  },
  amountText: {
    marginLeft: 0,
    textAlign: 'center',
    width: '100%',
  },
  amount1: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
    width: 38.36,
    textAlign: 'center',
    marginTop: 10,
  },
  amount2: {
    width: 45.07,
    textAlign: 'center',
  },
  amountView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21.45,
    marginTop: 17,
  },
  hairline: {
    backgroundColor: 'rgba(187, 187, 187, 0.5);',
    borderWidth: 0.5,
    width: '100%',
    marginTop: 22,
  },
  subamountView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subamount: {
    fontWeight: '300',
    height: 21,
  },
});
