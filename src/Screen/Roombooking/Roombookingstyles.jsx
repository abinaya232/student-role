import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    paddingHorizontal: 0, // Add uniform padding to the whole screen
  },
  headerContainer: {
    width: '100%',
    backgroundColor: '#4A5B9B',
  },
  header: {
    width: '100%',
    backgroundColor: '#4A5B9B',
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  backButton: {
    position: 'absolute',
    left: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 15, // Adjusted top margin
  },
  occupantContainer: {
    flexDirection: 'row',
    paddingHorizontal: 50,
    justifyContent: 'center',
    marginVertical: 15, // Adjusted spacing
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
    marginHorizontal: 20,
    paddingVertical: 8, // Increased padding
  },
  activeTab: {
    fontWeight: 'bold',
    color: '#2A3663',
    borderBottomWidth: 3,
    borderBottomColor: '#2A3663',
    paddingBottom: 5, // Improved underline spacing
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 25,
  },
  soloContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  soloCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    width: '90%',
    borderRadius: 10,
    elevation: 3,
  },
  soloRight: {
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  registerButton: {
    backgroundColor: '#3F51B5',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 6,
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  boldText: {
    fontWeight: 'bold',
  },
  
  titleWithButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  label: {
    fontSize: 16,
    color: '#2A3663',
  },
  
  addButton: {
    fontSize: 22,
    color: '#4A5B9B',
  },
  
  infoText: {
    marginLeft:100,
    fontSize: 14,
    color: 'gray',
    marginTop: 25,
    marginBottom:15,
    marginRight:50,
  },
  
  hostelGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
   
    alignSelf: 'center',
  },
  
  hostelButton: {
    width: '30%',  // Ensures 3 items per row
    aspectRatio: 2.2, // Keeps rectangular shape
    backgroundColor: '#4A5B9B',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 5,
  },
  
  selectedHostel: {
    backgroundColor: '#D3E3FC', // Light blue when selected
  },
  
  selectedHostelText: {
    color: '#1C3AA9', // Dark blue for selected text
  },
  
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
    height:'30%',
    alignSelf: 'center',
  },
  
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  
  modalTitle: {
    fontSize: 18,
    color:'black',
    fontWeight: 'bold',
    marginBottom: 15,
    alignSelf:'center',
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15, // Makes it circular
    backgroundColor: '#D0D8E0', // Choose your desired color
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  
  closeText: {
    color: 'black',
    fontSize: 20,

  },
  
  selectedText: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#7F94AA',
    marginTop: 10,
  },
  modalOverlay: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#FAFAFA',
    padding: 20,
    borderRadius: 12,
    width: '85%',
    maxHeight: '80%', // <- This limits modal height for scrollable behavior
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  
  inputContainer: {
    width: '100%',
  },
  
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginLeft:120,
  },
  
  cancelButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  
  cancelText: {
    color: 'gray',
    fontSize: 16,
   
  },
  noteText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  
  requestButton: {
    backgroundColor: '#4A5B9B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  
  requestText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  hosteltext:{
    color: 'white',
  },
  occupantSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  
  occupantTitle: {
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#f0f0f0',
    width: '80%',
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 6,
    color: '#000',
  },
  
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 10,
  },
  
  tabText: {
    fontSize: 16,
    color: 'gray',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  
  activeTab: {
    color: '#001F5B', // dark blue
    borderBottomWidth: 2,
    borderBottomColor: '#001F5B',
    fontWeight: 'bold',
  },
  
});

export default styles;
