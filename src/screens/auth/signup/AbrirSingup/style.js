import {Dimensions, StyleSheet} from 'react-native';
const {height} = Dimensions.get('window');

export const style = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
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
    marginTop: 23,
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    marginTop: 53,
    borderRadius: 40,
  },

  signupButton: {
    position: 'absolute',
    left: 32,
    right: 32,
    bottom: 50,
  },
  input: {
    marginTop: 50,
    marginBottom: 20,
  },
  input2: {
    marginBottom: 20,
  },
  input3: {
    marginBottom: 100,
  },
});
