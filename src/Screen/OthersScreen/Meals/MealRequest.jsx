import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

import DownArrow from '../../assets/Dropdownarrow'; // Update if needed
import BioCalendar from '../../../assets/Calendar2'; // Update if needed
import styles from './MealRequestStyles';

const MealRequestScreen = ({ visible, onClose }) => {
  const navigation = useNavigation();

  const [mealDropdownVisible, setMealDropdownVisible] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState('Select meal type');

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [activePicker, setActivePicker] = useState(null);
  const [calendarFlow, setCalendarFlow] = useState(false);
  const [tempDate, setTempDate] = useState(new Date());

  const formatDate = (date) => {
    if (!date) return 'dd-mm-yyyy';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const showPicker = (type, isFromCalendarIcon = false) => {
    if (isFromCalendarIcon) setCalendarFlow(true);
    setActivePicker(type);
    setTempDate(type === 'from' ? fromDate || new Date() : toDate || new Date());
  };

  const handleDateChange = (event, selectedDate) => {
    if (event.type === 'dismissed') {
      setActivePicker(null);
      setCalendarFlow(false);
      return;
    }

    if (selectedDate) {
      console.log('Selected Date:', selectedDate);  // Debug log

      if (activePicker === 'from') {
        setFromDate(selectedDate);
        if (calendarFlow) {
          // Automatically switch to "To Date" if calendarFlow is true
          setActivePicker('to');
          setTempDate(toDate || new Date());
          setCalendarFlow(false);  // Reset calendarFlow after switching
          return;
        }
      } else if (activePicker === 'to') {
        setToDate(selectedDate);
        setCalendarFlow(false); // Reset flow after selecting "To Date"
      }
    }

    if (Platform.OS === 'android') setActivePicker(null);
  };

  const handleRequest = () => {
    if (!fromDate || !toDate || selectedMealType === 'Select meal type') {
      alert('Please select meal type and dates');
      return;
    }

    const formattedFrom = formatDate(fromDate);
    const formattedTo = formatDate(toDate);

    navigation.navigate('Logs', {
      type: 'Meal',
      selectedMealStatus: {
        fromDate: formattedFrom,
        toDate: formattedTo,
        mealType: selectedMealType,
        status: {
          Breakfast: 'Received',
          Lunch: 'Received',
          Dinner: 'Received',
        },
      },
      selectedMealType,
      fromDate: formattedFrom,
      toDate: formattedTo,
    });

    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Meal Request</Text>

          {/* Meal Dropdown */}
          <Text style={styles.label}>Meal time</Text>
          <TouchableOpacity
            onPress={() => setMealDropdownVisible(!mealDropdownVisible)}
            style={styles.dropdownBtn}
          >
            <Text style={{ color: '#000000' }}>{selectedMealType}</Text>
            <DownArrow width={20} height={20} />
          </TouchableOpacity>

          {mealDropdownVisible && (
            <View style={[styles.dropdownWrapper, { maxHeight: 160 }]}>
              {['All', 'Breakfast', 'Lunch', 'Dinner'].map((meal, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
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

          {/* Date Pickers */}
          <View style={[styles.dateRow, { alignItems: 'flex-end' }]}>
            <View style={styles.dateColumn}>
              <Text style={styles.label}>From Date</Text>
              <TouchableOpacity
                onPress={() => showPicker('from')}
                style={styles.dropdownBtn}
              >
                <Text style={{ color: '#999' }}>{formatDate(fromDate)}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.dateColumn}>
              <Text style={styles.label}>To Date</Text>
              <TouchableOpacity
                onPress={() => showPicker('to')}
                style={styles.dropdownBtn}
              >
                <Text style={{ color: '#999' }}>{formatDate(toDate)}</Text>
              </TouchableOpacity>
            </View>

            {/* Calendar Icon for From Date */}
            <TouchableOpacity
              style={[styles.calendarIconWrapper, { padding: 10, marginLeft: 10 }]}
              onPress={() => showPicker('from', true)} // Open date picker for 'From Date'
            >
              <BioCalendar width={24} height={24} />
            </TouchableOpacity>

            {/* Optionally, add another calendar icon for "To Date" if you want */}
            <TouchableOpacity
              style={[styles.calendarIconWrapper, { padding: 10, marginLeft: 10 }]}
              onPress={() => showPicker('to', true)} // Open date picker for 'To Date'
            >
              <BioCalendar width={24} height={24} />
            </TouchableOpacity>
          </View>

          {/* Native Date Picker */}
          {activePicker && (
            <DateTimePicker
              value={tempDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          {/* Footer Buttons */}
          <View style={styles.buttonRow}>
            <Pressable onPress={onClose}>
              <Text style={styles.cancelBtn}>Cancel</Text>
            </Pressable>
            <Pressable onPress={handleRequest} style={styles.bookBtnWrap}>
              <Text style={styles.bookBtn}>Request</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MealRequestScreen;
