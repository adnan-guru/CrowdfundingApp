import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    height: 896,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  InputImage: {
    width: 157,
    height: 89,
    marginTop: 44,
    display: 'flex',
    alignSelf: 'center',
  },
  inputsPadding: {
    paddingHorizontal: 32,
  },
  input: {
    marginTop: 30,
    marginBottom: 20,
  },
  input2: {
    marginBottom: 20,
  },
  backIcon: {
    marginLeft: 26,
    marginTop: 30,
    color: '#fff',
  },
  logo: {
    width: 298,
    height: 72,
    marginTop: 46,
    display: 'flex',
    alignSelf: 'center',
  },
  title: {
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 23,
  },

  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    marginTop: 53,
    borderRadius: 40,
  },

  inputBottomText: {
    marginTop: 19,
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'right',
  },

  signup2Button: {
    position: 'absolute',
    left: 32,
    right: 32,
    bottom: 50,
  },
});
