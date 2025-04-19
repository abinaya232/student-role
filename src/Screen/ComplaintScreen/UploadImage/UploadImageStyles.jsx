import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  section: {
    paddingHorizontal: 16,
    marginTop: 50,
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    color: '#444',
    marginBottom: 12,
  },
  uploadBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    padding: 28, // increased padding for more space inside
    minHeight: 200, // ensures it's slightly taller even with no image
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 20, // gives some space below the container
  },
  
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  outlinedButton: {
    flex: 0.48,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#253C78',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#253C78',
    fontSize: 14,
    fontWeight: '500',
  },
  uploadButton: {
    backgroundColor: '#474e94',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
   marginTop: 20,
  },
  uploadText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6, // Optional: use gap if supported
  },
  
  iconRight: {
    marginLeft: 6,
  },
  
});