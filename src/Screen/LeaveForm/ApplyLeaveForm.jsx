import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Modal,
  FlatList,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import BackArrow from '../../assets/BackArrowIcon';
import BioCalendar from '../../assets/Calendar2';
import ClockIcon from '../../assets/ClockIcon';
import DropDown from '../../assets/DropDownIcon';
import styles from '../LeaveForm/LeaveFormStyles';

export const ApplyLeaveForm = ({navigation}) => {
  const [leaveType, setLeaveType] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [showFromDatePicker, setShowFromDatePicker] = useState(false);
  const [showToDatePicker, setShowToDatePicker] = useState(false);

  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [timeType, setTimeType] = useState(''); // 'from' or 'to'

  const leaveTypes = ['Leave', 'OD', 'Internal OD', 'Internal Training'];

  const handleDateChange = (event, selectedDate, type) => {
    if (event.type === 'dismissed') {
      type === 'from'
        ? setShowFromDatePicker(false)
        : setShowToDatePicker(false);
      return;
    }
    const formattedDate = selectedDate.toDateString();
    type === 'from' ? setFromDate(formattedDate) : setToDate(formattedDate);
    type === 'from'
      ? setShowFromDatePicker(false)
      : setShowToDatePicker(false);
  };

  const handleTimeChange = (event, selectedTime) => {
    if (event.type === 'dismissed') {
      setShowTimePicker(false);
      return;
    }

    const hours = selectedTime.getHours();
    const minutes = selectedTime.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${(hours % 12 || 12)
      .toString()
      .padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;

    if (timeType === 'from') {
      setFromTime(formattedTime);
    } else {
      setToTime(formattedTime);
    }

    setShowTimePicker(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <BackArrow width={24} height={24} fill="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Leave Apply</Text>
      </View>

      {/* Leave Type Dropdown */}
      <Text style={styles.label}>Leave Type</Text>
      <TouchableOpacity
        style={styles.pickerContainer}
        onPress={() => setShowDropdown(true)}>
        <Text style={leaveType ? styles.selectedText : styles.placeholderText}>
          {leaveType || 'Select leave type'}
        </Text>
        <DropDown width={16} height={16} style={styles.dropdownIcon} />
      </TouchableOpacity>

      {/* Modal for Dropdown */}
      <Modal visible={showDropdown} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setShowDropdown(false)}>
          <View style={styles.modalContainer}>
            <FlatList
              data={leaveTypes}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setLeaveType(item);
                    setShowDropdown(false);
                  }}>
                  <Text style={styles.modalText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      {/* From Date & To Date */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>From Date</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowFromDatePicker(true)}>
            <Text>{fromDate || 'Select date'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>To Date</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowToDatePicker(true)}>
            <Text>{toDate || 'Select date'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setShowFromDatePicker(true)}>
          <BioCalendar style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Show Date Pickers */}
      {showFromDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={(event, selectedDate) =>
            handleDateChange(event, selectedDate, 'from')
          }
        />
      )}
      {showToDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={(event, selectedDate) =>
            handleDateChange(event, selectedDate, 'to')
          }
        />
      )}

   {/* From Time & To Time */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>From Time</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => {
              setTimeType('from');
              setShowTimePicker(true);
            }}>
            <Text>{fromTime || 'hh:mm'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>To Time</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => {
              setTimeType('to');
              setShowTimePicker(true);
            }}>
            <Text>{toTime || 'hh:mm'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setTimeType('from');
            setShowTimePicker(true);
          }}>
          <ClockIcon style={styles.clkicon} />
        </TouchableOpacity>
      </View>

      {/* Time Picker */}
      {showTimePicker && (
        <DateTimePicker
          value={new Date()}
          mode="time"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleTimeChange}
        />
      )}
<View>
  <Text style={styles.label}>Reason</Text>
  <TextInput
    style={styles.reason}
    placeholder="Enter your reason"
    placeholderTextColor="#999"
    multiline={true}
    textAlignVertical="top"
  />
</View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
  style={styles.submitButton}
  onPress={() => {
    navigation.navigate('LogScreen', {
      type: 'Leave',
      leaveType, // Pass the selected leave type
      fromDate,
      toDate,
      fromTime,
      toTime,
    });
  }}>
  <Text style={styles.submitText}>Submit</Text>
</TouchableOpacity>



      </View>
    </View>
  );
};
