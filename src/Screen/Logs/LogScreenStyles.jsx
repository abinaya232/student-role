import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 20, // change this to 10 or 0 if needed
      paddingHorizontal: 16,
    },
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
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

  container: {
    flex: 1,
    paddingTop: 20,
  },
  optionsContainer: {
    paddingHorizontal: 10,
  },
  optionButton: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  optionText: {
    fontSize: 14,
    color: '#888',
  },
  selectedOptionText: {
    color: 'green',
    fontWeight: 'bold',
  },
  underline: {
    marginTop: 4,
    height: 2,
    width: '100%',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  contentBox: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  selectedTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 4, // add this
    borderRadius: 10,
  },
  
  optionText: {
    fontSize: 14,
    color: '#888',
  },
  selectedOptionText: {
    color: 'green',
    fontWeight: 'bold',
  },
  underline: {
    marginTop: 4,
    height: 2,
    width: '100%',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  card: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  timeText: {
    fontSize: 14,
    marginBottom: 10,
    color: '#333',
  },
  cancelButton: {
    backgroundColor: '#4A5B9B',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  cancelText: {
    color: '#fff',
    fontWeight: '600',
  },
  latestCard: {
    backgroundColor: '#e0f7e9',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },

  latestTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 8,
  },
  
});

export default styles;
