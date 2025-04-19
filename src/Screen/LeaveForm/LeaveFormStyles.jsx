import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 10,
    marginLeft: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    padding: 10,
  },

  labels: {
    fontSize: 16,
    // backgroundColor:'#D8E2E5',
  },
  type: {
    height: 45,
    backgroundColor: '#D8E2E5',
    padding: 8,
    borderRadius: 5,
    marginBottom: 15,
    width: 359,
  },
  input: {
    backgroundColor: '#D8E2E5',
    padding: 8,
    borderRadius: 5,
    marginBottom: 15,
    height: 40,
    width: 121,
  },
  icon: {
    marginTop: 60,
    marginLeft: -30,
  },
  clkicon: {
    marginTop: 60,
    marginLeft: -20,
    // height: 25,
    // width: 25,
    marginRight: 25,
  },
  pickerContainer: {
    backgroundColor: '#D8E2E5',
    borderRadius: 5,
    marginBottom: 15,
    overflow: 'hidden',
    width: 359,
    heigth: 45,
    paddingLeft: 30,
  },

  picker: {
    height: 45,
    width: '100%',
    color: '#333',
  },
  header: {
    backgroundColor: '#4A5B9B',
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginLeft: -20,
    marginRight: -20,
  },
  backButton: {
    padding: 5,
    marginHorizontal: 5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 110,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
  },
  textArea: {
    height: 109,
    width: 399,
    textAlignVertical: 'top',
    backgroundColor: '#F7F7F7',
    color: '#585858',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancel: {
    fontSize: 16,
    color: '#555',
    marginLeft: 180,
    marginTop: 95,
  },
  submitButton: {
    backgroundColor: '#4A5B9B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 85,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
  },
  pickerContainer: {
    backgroundColor: '#D8E2E5',
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 50,
  },

  placeholderText: {
    color: '#8A8A8A',
    fontSize: 16,
  },

  selectedText: {
    color: '#333',
    fontSize: 16,
  },

  dropdownIcon: {
    width: 16,
    height: 16,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 5,
  },

  modalItem: {
    padding: 12,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
  },

  modalText: {
    fontSize: 16,
    color: '#333',
  },
  pickerContainer: {
    backgroundColor: '#D8E2E5',
    borderRadius: 10,
    marginBottom: 0, // No extra spacing
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 50,
  },

  placeholderText: {
    color: '#8A8A8A',
    fontSize: 16,
  },

  selectedText: {
    color: '#333',
    fontSize: 16,
  },

  dropdownIcon: {
    width: 16,
    height: 16,
  },

  dropdownList: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5, // Ensures the dropdown is right below the box
    width: '100%',
    elevation: 5,
  },

  modalItem: {
    padding: 12,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
  },

  modalText: {
    fontSize: 16,
    color: '#333',
  },
  timeModalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  timeModalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timePickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  timePicker: {
    width: 100,
    height: 150,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  reason: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
    backgroundColor: '#BCC7D233',
    height: 100, // set desired height
    textAlignVertical: 'top', // makes placeholder appear at the top
  },
});
export default styles;
