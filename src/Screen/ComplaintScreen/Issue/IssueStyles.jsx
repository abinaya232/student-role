import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  section: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  label: {
    fontSize: 15,
    color: '#444',
    marginBottom: 10,
  },
  required: {
    color: 'red',
  },
  input: {
    backgroundColor: '#fdfdfd',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    padding: 12,
    fontSize: 14,
    color: '#222',
    textAlignVertical: 'top',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 20,
  },
  cancelText: {
    color: '#60718b',
    fontSize: 16,
    marginRight: 12,
  },
  submitButton: {
    backgroundColor: '#474e94',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  
});