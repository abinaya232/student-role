import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  leftContainer: {
    width: 370,
    height: 176,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F7F7F7',
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0,
    shadowRadius: 0.01,
    elevation: 3,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    
  },
  
  profileText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#66698B',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#444',
    marginBottom: 2,
  },
  bold: {
    fontWeight: '600',
  },
  call: {
    color: '#668E9B',
    fill: '#668E9B',
  },
  profileBox: {
    flexDirection: 'row', // Aligns left and right sections horizontally
    alignItems: 'center', // Centers content vertically
    justifyContent: 'space-between', // Adds spacing between sections
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F7F7F7',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    margin: 10,
  },

  leftContainer: {
    flex: 1, // Takes available space
  },

  right: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.6, // Adjust width for proper positioning
  },

  profileImage: {
    width: 80, // Square size
    height: 80,
    // borderRadius: 10, // Keeps it square with slightly rounded corners
    borderWidth: 2,
    // borderColor: "#ddd", // Optional: subtle border
  },

  rollNumber: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
  },
  group: {
    fontSize: 12,
    fontWeight: 'light',
    color: '#444',
  },
  callIcon:{
color:"green",
  },
});

export default styles;
