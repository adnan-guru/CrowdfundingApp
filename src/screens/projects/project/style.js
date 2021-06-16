import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    // flex: 1,
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: 300,
  },
  card: {
    marginTop: -90,
    width: '100%',
    height: 1200,
    backgroundColor: 'white',
    borderRadius: 40,
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 24,
    fontStyle: 'normal',
    textAlign: 'center',
  },
  backIcon: {
    marginLeft: 26,
    position: 'absolute',
    top: 43,
    color: '#fff',
  },
  headerText: {
    position: 'absolute',
    top: 43,
    alignSelf: 'center',
  },
  cardContainer: {
    marginHorizontal: 21,
  },
  cardTitle: {
    color: 'black',
    textAlign: 'left',
    marginTop: 30,
    height: 37,
  },
  subtitle: {
    fontStyle: 'normal',
    fontSize: 16,
    height: 25,
  },
  cardImage: {
    width: 15,
    height: 15,
  },
  imageText: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 10,
  },
  cardText3: {
    width: '100%',
    backgroundColor: '#0C1327',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 10,
    height: 14,
    textAlign: 'center',
    color: '#fff',
    marginTop: 19,
    paddingTop: 2,
  },
  loader: {
    flexDirection: 'row',
  },

  loaderTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  loaderText: {
    fontSize: 10,
    fontWeight: '400',
    fontStyle: 'normal',
  },
  hairline: {
    backgroundColor: 'rgba(187, 187, 187, 0.5);',
    borderWidth: 0.5,
    width: '100%',
    marginTop: 19,
  },
  loaderHeding: {
    fontWeight: '300',
    marginTop: 19,
  },
  textCard: {
    backgroundColor: 'rgba(12, 19, 39, 0.08)',
    height: 121,
    marginTop: 37,
    marginBottom: 30,
  },
  loaderCardText: {
    fontWeight: '700',
    fontSize: 10,
    marginTop: 19,
    marginLeft: 10,
    height: 15,
  },
  loaderSubText: {
    fontSize: 10,
    fontWeight: '400',
    // marginLeft: 10,
    marginTop: 19,
    height: 15,
    // textAlign: 'right',
  },
  textTop: {
    marginTop: 8,
  },
  subTextTop: {
    marginTop: 8,
    textAlign: 'center',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subRow: {
    flexDirection: 'row',
    width: 140,
    justifyContent: 'space-between',
  },
  subRow2: {
    flexDirection: 'row',
    width: 190,
    // justifyContent: 'space-between',
  },
  indicatorStyle: {
    backgroundColor: 'black',
  },
  tabStyle: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
  },
  tabTextStyle: {
    color: 'black',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
  },

  cardSubTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconRow: {
    flexDirection: 'row',
  },
  loaderPercentage: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  loaderr: {
    marginTop: 10,
  },
});
