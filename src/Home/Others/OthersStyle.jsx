import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  card: {
    width: 150,
    height: 105,
    backgroundColor: '#fff',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 270,
    marginRight: 470,
  },
  cardText: {
    marginTop: 8,
    fontSize: 14,
    color: '#4A5B9B',
    fontWeight: 'bold',
  },
});
export default styles;
