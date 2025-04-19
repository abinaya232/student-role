import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: '#2A366333',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  badge: {
    position: 'absolute',
    top: 3,
    right: 5,
    marginRight: -6,
    width: 8,

    height: 8,
    backgroundColor: 'red',
    borderRadius: 4,
  },
  initial: {
    fontSize: 20,
    color: 'black',
  },
});
export default styles;
