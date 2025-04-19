import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackArrow from '../../../src/assets/BackArrowIcon';
import styles from './Roombookingstyles';

const RoomScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('team');
  const [members, setMembers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [memberModalVisible, setMemberModalVisible] = useState(false);
  const [selectedHostels, setSelectedHostels] = useState([]);
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [contactNo, setContactNo] = useState('');

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
        : prev,
    );
  };

  const addMember = () => {
    if (members.length < 4) {
      if (!name || !rollNo || !contactNo) {
        alert('Please fill in all fields.');
        return;
      }
      setMembers([...members, {name, rollNo, contactNo}]);
      setName('');
      setRollNo('');
      setContactNo('');
      setMemberModalVisible(false);
    } else {
      alert('Maximum 4 members allowed!');
    }
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
          <Text
            style={[styles.tabText, activeTab === 'team' && styles.activeTab]}>
            Team
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('solo')}>
          <Text
            style={[styles.tabText, activeTab === 'solo' && styles.activeTab]}>
            Solo
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'team' ? (
        <>
          <View style={styles.section}>
            <View style={styles.titleWithButton}>
              <Text style={styles.label}>Hostel Name</Text>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.addButton}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.infoText}>
              {selectedHostels.length} Hostel
              {selectedHostels.length !== 1 ? 's' : ''} selected
            </Text>
          </View>

          <View style={styles.section}>
            <View style={styles.titleWithButton}>
              <Text style={styles.label}>
                Add members <Text style={styles.subText}>(including you)</Text>
              </Text>
              <TouchableOpacity onPress={() => setMemberModalVisible(true)}>
                <Text style={styles.addButton}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.infoText}>{members.length} Members added</Text>
          </View>

          <View style={styles.memberList}>
            {members.map((member, index) => (
              <View key={index} style={styles.memberItem}>
                <Text style={styles.memberText}>
                  {index + 1}. {member.name} | Roll No: {member.rollNo} |
                  Contact: {member.contactNo}
                </Text>
              </View>
            ))}
          </View>
        </>
      ) : (
        <View style={styles.soloContainer}>
          <View style={styles.soloCard}>
            <View>
              <Text style={styles.label}>Student Name</Text>
              <Text style={styles.subText}>B.Tech - CT | 2nd year</Text>
              <Text style={styles.subText}>
                Contact : <Text style={{color: 'black'}}>9876543210</Text>
              </Text>
            </View>
            <View style={styles.soloRight}>
              <Image
                source={require('../../assets/image.png')}
                style={styles.profileImage}
              />
              <Text style={styles.subText}>7376231CT001</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate('HostelSelectionScreen')} // Make sure this screen is in your navigator
          >
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Hostel Modal */}
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
                      {color: 'white'},
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

      {/* Member Modal */}
      <Modal
        visible={memberModalVisible}
        animationType="fade"
        transparent
        onRequestClose={() => setMemberModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Member details</Text>
            <TouchableOpacity
              onPress={() => setMemberModalVisible(false)}
              style={styles.closeButton}>
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
            <Text
              style={[
                styles.noteText,
                {
                  textAlign: 'center',
                  marginBottom: 10,
                  marginRight: 65,
                  color: 'red',
                },
              ]}>
              <Text style={{fontWeight: 'bold'}}>Note:</Text> There should be
              two different departments{'\n'}in your team.
            </Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter name"
                value={name}
                onChangeText={setName}
              />
              <Text style={styles.label}>Roll no</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter roll no"
                value={rollNo}
                onChangeText={setRollNo}
              />
              <Text style={styles.label}>Contact no</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter contact no"
                keyboardType="phone-pad"
                value={contactNo}
                onChangeText={setContactNo}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => setMemberModalVisible(false)}
                style={styles.cancelButton}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={addMember}
                style={styles.requestButton}>
                <Text style={styles.requestText}>Request</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RoomScreen;
