import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RoomChangeModal from './RoomChanging/RoomChangeModal';
import BackArrow from '../../../src/assets/BackArrowIcon';
import DownArrow from '../../assets/Dropdownarrow';
import Playground from '../../assets/Playground';
import BookComputer from '../../assets/BookComputer';
import BedIcon from '../../assets/BedIcon';
import OthersMeal from '../../assets/OthersMeal';
import OthersBiometric from '../../assets/OthersBiometric';
import Outing from '../../assets/Outing';
import styles from '../OthersScreen/OtherNavStyles';

export const OthersScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [outingModalVisible, setOutingModalVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('Select slot');
  const [bookingType, setBookingType] = useState('');
  const [roomChangeModalVisible, setRoomChangeModalVisible] = useState(false);
  const [mealModalVisible, setMealModalVisible] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState('Select meal type');
  const [mealDropdownVisible, setMealDropdownVisible] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const slotOptions = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '01:00 PM - 02:00 PM',
    '03:00 PM - 04:00 PM',
  ];

  const getTodayDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleBooking = () => {
    if (selectedSlot !== 'Select slot') {
      const todayDate = getTodayDate();
      navigation.navigate('Log', {
        date: todayDate,
        time: selectedSlot,
        type: bookingType,
      });
      setModalVisible(false);
      setSelectedSlot('Select slot');
    }
  };

  const openBookingModal = (type) => {
    setBookingType(type);
    setModalVisible(true);
    setSelectedSlot('Select slot');
    setDropdownVisible(false);
  };

  const openOutingModal = () => {
    setOutingModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <BackArrow width={24} height={24} fill="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Others</Text>
      </View>

      {/* Booking Modal */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={modalStyles.overlay}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.modalTitle}>{bookingType} Booking</Text>
            <Text style={modalStyles.label}>Book Slot</Text>

            <View style={modalStyles.dropdownWrapper}>
              <TouchableOpacity
                onPress={() => setDropdownVisible(!dropdownVisible)}
                style={modalStyles.dropdownBtn}
              >
                <Text style={{ color: '#000000' }}>{selectedSlot}</Text>
                <DownArrow width={20} height={20} />
              </TouchableOpacity>

              {dropdownVisible && (
                <View style={modalStyles.dropdownList}>
                  {slotOptions.map((slot, index) => (
                    <TouchableOpacity
                      key={index}
                      style={modalStyles.dropdownItem}
                      onPress={() => {
                        setSelectedSlot(slot);
                        setDropdownVisible(false);
                      }}
                    >
                      <Text style={{ color: 'black' }}>{slot}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            <View style={modalStyles.buttonRow}>
              <Pressable onPress={() => setModalVisible(false)}>
                <Text style={modalStyles.cancelBtn}>Cancel</Text>
              </Pressable>
              <Pressable onPress={handleBooking} style={modalStyles.bookBtnWrap}>
                <Text style={modalStyles.bookBtn}>Book</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Outing Modal */}
      <Modal transparent visible={outingModalVisible} animationType="fade">
        <View style={modalStyles.overlay}>
          <View style={modalStyles.modalView}>
            <Text style={[modalStyles.modalTitle, { textAlign: 'center' }]}>Outing Request</Text>
            <View style={{ alignItems: 'flex-end', marginBottom: 10 }}>
              <Text style={{ color: '#000' }}>06-01-2025</Text>
            </View>

            <Text style={{ color: '#999', marginBottom: 5 }}>Student Name</Text>
            <Text style={{ color: '#000', marginBottom: 15 }}>7376231CS180</Text>
            <Text style={{ color: '#000', marginBottom: 30 }}>07:00 PM - 08:00 PM</Text>

            <View style={modalStyles.buttonRow}>
              <Pressable onPress={() => setOutingModalVisible(false)}>
                <Text style={modalStyles.cancelBtn}>Cancel</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setOutingModalVisible(false);
                }}
                style={modalStyles.bookBtnWrap}
              >
                <Text style={modalStyles.bookBtn}>Request</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Meal Modal */}
      <Modal transparent visible={mealModalVisible} animationType="fade">
        <View style={modalStyles.overlay}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.modalTitle}>Meal Request</Text>

            <Text style={modalStyles.label}>Meal time</Text>
            <View style={modalStyles.dropdownWrapper}>
              <TouchableOpacity
                onPress={() => setMealDropdownVisible(!mealDropdownVisible)}
                style={modalStyles.dropdownBtn}
              >
                <Text style={{ color: '#000000' }}>{selectedMealType}</Text>
                <DownArrow width={20} height={20} />
              </TouchableOpacity>

              {mealDropdownVisible && (
                <View style={modalStyles.dropdownList}>
                  {['Breakfast', 'Lunch', 'Dinner'].map((meal, index) => (
                    <TouchableOpacity
                      key={index}
                      style={modalStyles.dropdownItem}
                      onPress={() => {
                        setSelectedMealType(meal);
                        setMealDropdownVisible(false);
                      }}
                    >
                      <Text style={{ color: 'black' }}>{meal}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ width: '48%' }}>
                <Text style={modalStyles.label}>From Date</Text>
                <TouchableOpacity style={modalStyles.dropdownBtn}>
                  <Text style={{ color: '#999' }}>{fromDate || 'dd/mm/yyyy'}</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: '48%' }}>
                <Text style={modalStyles.label}>To Date</Text>
                <TouchableOpacity style={modalStyles.dropdownBtn}>
                  <Text style={{ color: '#999' }}>{toDate || 'dd/mm/yyyy'}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={modalStyles.buttonRow}>
              <Pressable onPress={() => setMealModalVisible(false)}>
                <Text style={modalStyles.cancelBtn}>Cancel</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setMealModalVisible(false);
                }}
                style={modalStyles.bookBtnWrap}
              >
                <Text style={modalStyles.bookBtn}>Request</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Room Change Modal */}
      {roomChangeModalVisible && (
        <RoomChangeModal
          visible={roomChangeModalVisible}
          onClose={() => setRoomChangeModalVisible(false)}
        />
      )}

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Booking</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.card} onPress={() => openBookingModal('Playground')}>
            <Playground width={30} height={30} />
            <Text style={styles.cardText}>Playground</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => openBookingModal('Computer')}>
            <BookComputer width={30} height={30} />
            <Text style={styles.cardText}>Book computer</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Request</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => setRoomChangeModalVisible(true)}
          >
            <BedIcon width={30} height={30} />
            <Text style={styles.cardText}>Room changing</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => setMealModalVisible(true)}>
            <OthersMeal width={30} height={30} />
            <Text style={styles.cardText}>Meal</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.card}>
            <OthersBiometric width={30} height={30} />
            <Text style={styles.cardText}>Biometric</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={openOutingModal}>
            <Outing width={30} height={30} />
            <Text style={styles.cardText}>Outing</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const modalStyles = StyleSheet.create({
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
    marginBottom: 10,
    color: '#585858',
  },
  dropdownWrapper: {
    marginBottom: 20,
  },
  dropdownBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DCE5E8',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  dropdownList: {
    backgroundColor: '#f6f6f6',
    borderRadius: 6,
    marginTop: 5,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
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
