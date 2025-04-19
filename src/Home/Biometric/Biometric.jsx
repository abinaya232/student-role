import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './BiometricStyles';
import BioCalendar from '../../assets/Calendar2';

export const Biometric = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleChange = (event, date) => {
    if (Platform.OS === 'android') {
      setShowCalendar(false); // Close calendar on Android after picking
    }
    if (date) {
      setSelectedDate(date);
    }
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const day = ('0' + d.getDate()).slice(-2);
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <View>
      <Text style={styles.title}>Biometric</Text>

      <View style={styles.biometricCard}>
        <View style={styles.dateContainer}>
          <TouchableOpacity onPress={() => setShowCalendar(true)}>
            <BioCalendar />
          </TouchableOpacity>
          <Text style={styles.dateText}>{formatDate(selectedDate)}</Text>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Night</Text>
          <View style={styles.statusIndicator} />
        </View>

        <Text style={styles.percentage}>80%</Text>
      </View>

      {showCalendar && Platform.OS === 'android' && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="calendar"
          onChange={handleChange}
        />
      )}

      {/* iOS Modal */}
      {Platform.OS === 'ios' && (
        <Modal transparent={true} animationType="slide" visible={showCalendar}>
          <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#00000066' }}>
            <View style={{ backgroundColor: 'white', margin: 20, borderRadius: 10, padding: 16 }}>
              <DateTimePicker
                value={selectedDate}
                mode="date"
                display="spinner"
                onChange={handleChange}
              />
              <TouchableOpacity onPress={() => setShowCalendar(false)}>
                <Text style={{ textAlign: 'right', marginTop: 10, color: 'blue' }}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};
