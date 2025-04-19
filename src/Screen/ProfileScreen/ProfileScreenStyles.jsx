import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#4A5B9B',
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
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
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55, // Makes the image circular
    borderWidth: 2,
    borderColor: '#fff',
  },
  infoContainer: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
  },
  column: {
    width: '60%',
  },
  
  label: {
    fontSize: 16,
    color: '#555',
    padding:8,
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    padding:8,
    color: '#000',
    fontWeight: '500',
  },
  logoutButton: {
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#4A5B9B',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 120,
    width: 100,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
