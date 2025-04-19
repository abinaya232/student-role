import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"#fff",
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows wrapping to a new row
    justifyContent: 'center', // Centers elements
    alignItems: 'center', // Aligns items vertically
    gap: 15, // Space between buttons
    marginTop: 50,
    marginRight: -80, // Adjust top margin as needed
  },
  buttonWrapper: {
    width: '15%', // Adjust button width
    height: 80, // Button height
    justifyContent: 'center', // Center items inside
    alignItems: 'center',
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 20,
  },
  floatingButton: {
    backgroundColor: '#4A5B9B',
    padding: 15,
    borderRadius: 15,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
