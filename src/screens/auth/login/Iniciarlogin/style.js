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
    marginTop: 46,
    display: 'flex',
    alignSelf: 'center',
  },
  title: {
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 24,
    textAlign: 'center',
    // color: 'red',
    marginTop: 23,
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#A4A9B2',
    // marginTop: 50,
    paddingLeft: 19,
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'normal',
  },

  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    marginTop: 53,
    borderRadius: 40,
  },
  inputTitle: {
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    marginBottom: 10,
  },
  title2: {
    marginBottom: 10,
    marginTop: 10,
  },
  inputBottomText: {
    marginTop: 19,
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'right',
  },
  loginButton: {
    position: 'absolute',
    left: 32,
    right: 32,
    bottom: 50,
  },
  inputs: {
    marginTop: 50,
    marginBottom: 20,
  },
});
