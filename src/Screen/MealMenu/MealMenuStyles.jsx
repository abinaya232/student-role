import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },header: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%',
    marginBottom: 10,
    position: 'relative', 
  },
  
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: "black",
    textAlign: "center",
    flex: 1, 
  },
  closeButton: {
    width: 30, 
    height: 30,
    borderRadius: 15, 
    backgroundColor: '#D0D8E0', 
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, 
  },
  
  closeText: {
    color: 'black',
    fontSize: 18,
    
  },
  
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  dayText: {
    fontSize: 16,
    color:'black',
  },
  dateText: {
    fontSize: 14,
    color: 'gray',
    marginRight:120,
  },
  mealTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  mealTab: {
    fontSize: 16,
    color: '#5C7289',
    marginRight:50,
  },
  activeTab: {
    color: '#2A3663',
    borderBottomWidth: 3,
    borderBottomColor: '#2A3663',
    paddingBottom: 5,
  },
  menuList: {
    alignSelf: 'flex-start', 
    width: '100%',
    paddingLeft: 15,
    marginTop:20,
    marginRight: 160, 
  },

  menuItem: {
    fontSize: 16,
    paddingVertical: 8,
    color: '#333',
    textAlign: 'left', 
  },

  feedbackButton: {
    marginTop: 20,
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 5,
    borderColor: '#D0D8E0',
    borderWidth: 1,
  },feedbackOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  feedbackContainer: {
    backgroundColor: 'white',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  
  feedbackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  feedbackButtonText:{
color:'#7F94AA',
  },
  
  divider: {
    height: 1,
    backgroundColor: 'black', 
    marginVertical: 8, 
    width: '100%', 
    alignSelf: 'center', 
  },
  
  feedbackInput: {
    width: '100%',
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlignVertical: 'top',
  },
  
  feedbackButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  
});

export default styles;
