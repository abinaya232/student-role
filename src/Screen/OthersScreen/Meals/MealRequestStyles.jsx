import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: '#585858',
  },
  dropdownBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E1ECEF',
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
  },
  dropdownText: {
    color: '#000',
  },
  dropdownWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    maxHeight: 160,
    marginBottom: 15,
    zIndex: 10,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  dateColumn: {
    width: '45%',
  },
  calendarIcon: {
    marginLeft: 8,
    marginBottom: 6,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  cancelBtn: {
    marginRight: 20,
    fontSize: 16,
    color: '#333',
    marginTop: 8,
  },
  bookBtnWrap: {
    backgroundColor: '#4A5B9B',
    borderRadius: 6,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  bookBtn: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
