import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backIcon: {
    marginLeft: 26,
    marginTop: 30,
    color: '#fff',
  },
  logo: {
    width: 298,
    height: 72,
    marginTop: 100,
    display: 'flex',
    alignSelf: 'center',
  },
  text: {
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 24,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 196,
  },
  text2: {
    marginTop: 0,
  },

  introButton: {
    position: 'absolute',
    left: 32,
    right: 32,
    bottom: 50,
  },
  introButton2: {
    bottom: 110,
  },
});
