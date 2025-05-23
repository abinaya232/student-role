import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#66698B',
    marginBottom: 6,
    marginTop: 20,
    marginLeft: 10,
  },
  biometricCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F7F7F7',
    padding: 20,
    width: '95%',
    borderRadius: 12,
    elevation: 1.2,
    marginLeft: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 14,
    marginLeft: 8,
    color: '#353A50',
    fontWeight: '500',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 14,
    color: '#353A50',
    fontWeight: '500',
  },
  statusIndicator: {
    width: 10,
    height: 10,
    backgroundColor: '#6DC06C', // Light green dot
    borderRadius: 5,
    marginLeft: 8,
  },
  percentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
});

export default styles;
