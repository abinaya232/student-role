import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackArrow from '../../../assets/BackArrowIcon';
const HostelSelectionScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('team');
  const [selectedHostels, setSelectedHostels] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const hostelOptions = [
    'Ganga',
    'Yamuna',
    'Kaveri',
    'South Bhavani',
    'North Bhavani',
    'Narmada',
  ];

  const toggleHostelSelection = hostel => {
    setSelectedHostels(prev =>
      prev.includes(hostel)
        ? prev.filter(item => item !== hostel)
        : prev.length < 3
        ? [...prev, hostel]
        : prev
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <BackArrow width={24} height={24} fill="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Room Booking</Text>
        </View>
      </View>
      <Text style={styles.subtitle}>Occupant</Text>
      <View style={styles.occupantContainer}>
        <TouchableOpacity onPress={() => setActiveTab('team')}>
          <Text style={[styles.tabText, activeTab === 'team' && styles.activeTab]}>
            Team
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('solo')}>
          <Text style={[styles.tabText, activeTab === 'solo' && styles.activeTab]}>
            Solo
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.titleWithButton}>
          <Text style={styles.label}>Hostel Name</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.addButton}>+</Text>
          </TouchableOpacity>
          <View style={styles.selectionCount}>
            <Text>{selectedHostels.length}/3</Text>
          </View>
        </View>
        <Text style={styles.infoText}>
          {selectedHostels.length} Hostel{selectedHostels.length !== 1 ? 's' : ''} selected
        </Text>
      </View>

      {/* Hostel Modal */}
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Hostel</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}>
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
            <View style={styles.hostelGrid}>
              {hostelOptions.map((hostel, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => toggleHostelSelection(hostel)}
                  style={[
                    styles.hostelButton,
                    selectedHostels.includes(hostel) && styles.selectedHostel,
                  ]}>
                  <Text
                    style={[
                      styles.hostelText,
                      { color: 'white' },
                      selectedHostels.includes(hostel) &&
                        styles.selectedHostelText,
                    ]}>
                    {hostel}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.selectedText}>
              {selectedHostels.length}{' '}
              {selectedHostels.length === 1 ? 'hostel' : 'hostels'} selected
            </Text>
          </View>
        </View>
      </Modal>

      </Modal>
    </View>
  );
};

export default HostelSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
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
  
  
  inputContainer: {
    width: '100%',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  occupantContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10,
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  activeTab: {
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  headerContainer: {
    width: '120%',
    marginLeft:-20,
    marginBottom:10,
  
    backgroundColor: '#4A5B9B',
  },
  header: {
    width: '100%',
    backgroundColor: '#4A5B9B',
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-20,
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
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleWithButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addButton: {
    fontSize: 24,
    color: '#007bff',
  },
  selectionCount: {
    marginLeft: 10,
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  infoText: {
    marginTop: 5,
    color: '#555',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 20,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  closeText: {
    fontSize: 18,
    color: 'red',
  },
  hostelGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'center',
  },
  hostelButton: {
    backgroundColor: '#888',
    padding: 10,
    borderRadius: 8,
    margin: 5,
  },
  hostelText: {
    color: 'white',
  },
  selectedHostel: {
    backgroundColor: '#007bff',
  },
  selectedHostelText: {
    fontWeight: 'bold',
  },
  selectedText: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '600',
  },
});
