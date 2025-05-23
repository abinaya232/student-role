import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './LogScreenStyles';
import LogsLeft from '../../assets/LogsLeft';
import LogsRight from '../../assets/LogsRight';
import { Topbar } from '../../Home/Topbar/Topbar';

const options = [
  'Leave',
  'Outing',
  'Meal',
  'Complaint',
  'Biometric',
  'Playground',
  'Computer',
  'Room',
];

export const LogScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    date,
    time,
    type,
    selectedMealStatus,
    selectedMealType,
    fromDate,
    toDate,
    fromTime,
    toTime,
  } = route.params || {};

  const [selectedOption, setSelectedOption] = useState(type || 'Playground');
  const [logs, setLogs] = useState([]);
  
  const flatListRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    if (type) {
      setSelectedOption(type);
      const index = options.indexOf(type);
      if (index !== -1) {
        const offset = (screenWidth / 3) * index;
        setTimeout(() => {
          flatListRef.current?.scrollToOffset({ offset, animated: true });
          setScrollOffset(offset);
        }, 100);
      }
    }
  }, [type]);

  useEffect(() => {
    // General logs (e.g., Outing, Room, etc.)
    if (date && time && type && type !== 'Meal' && type !== 'Leave') {
      setLogs(prev => [{ date, time, type }, ...prev]);
    }

    // Meal request logs
    if (selectedMealType && fromDate && toDate) {
      setSelectedOption('Meal');
      setLogs(prev => [
        {
          date: `${fromDate} to ${toDate}`,
          time: selectedMealType,
          type: 'Meal',
        },
        ...prev,
      ]);
    }

    // ✅ Leave request logs
    if (type === 'Leave' && fromDate && toDate && fromTime && toTime) {
      setSelectedOption('Leave');
      setLogs(prev => [
        {
          date: `${fromDate} to ${toDate}`,
          time: `${fromTime} to ${toTime}`,
          type: 'Leave',
        },
        ...prev,
      ]);
    }
  }, [
    date,
    time,
    type,
    selectedMealType,
    fromDate,
    toDate,
    fromTime,
    toTime,
  ]);

  const scrollRight = () => {
    const newOffset = scrollOffset + screenWidth / 2;
    flatListRef.current?.scrollToOffset({ offset: newOffset, animated: true });
    setScrollOffset(newOffset);
  };

  const scrollLeft = () => {
    const newOffset = Math.max(0, scrollOffset - screenWidth / 2);
    flatListRef.current?.scrollToOffset({ offset: newOffset, animated: true });
    setScrollOffset(newOffset);
  };

  const renderOption = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedOption(item)}
      style={styles.optionButton}>
      <Text
        style={[
          styles.optionText,
          selectedOption === item && styles.selectedOptionText,
        ]}>
        {item}
      </Text>
      {selectedOption === item && <View style={styles.underline} />}
    </TouchableOpacity>
  );

  const filteredLogs = logs.filter(log => log.type === selectedOption);

  return (
    <View style={styles.container}>
      <View style={{ marginTop: -50 }}>
        <Topbar />
      </View>

      <Text style={styles.title}>Logs</Text>

      {/* Arrows and Tab Scroll */}
      <View style={arrowStyles.optionRow}>
        <TouchableOpacity onPress={scrollLeft} style={arrowStyles.arrow}>
          <LogsRight width={24} height={24} />
        </TouchableOpacity>

        <FlatList
          ref={flatListRef}
          data={options}
          keyExtractor={item => item}
          renderItem={renderOption}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          style={{ flex: 1 }}
        />

        <TouchableOpacity onPress={scrollRight} style={arrowStyles.arrow}>
          <LogsLeft width={24} height={24} />
        </TouchableOpacity>
      </View>

      {/* Logs Display */}
      <ScrollView style={{ marginTop: 15 }}>
        {/* Meal Status Card */}
        {selectedOption === 'Meal' && selectedMealStatus && (
          <View style={styles.card}>
            <Text style={styles.dateText}>
              {selectedMealStatus.fromDate} to {selectedMealStatus.toDate}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginVertical: 10,
              }}>
              {['Breakfast', 'Lunch', 'Dinner'].map((meal, index) => {
                const status = selectedMealStatus.status[meal];
                const isReceived = status === 'Received';
                return (
                  <View key={index} style={{ alignItems: 'center' }}>
                    <Text style={styles.timeText}>{meal}</Text>
                    <View
                      style={{
                        backgroundColor: isReceived ? '#C2EABD' : '#E3E4EE',
                        paddingHorizontal: 12,
                        paddingVertical: 6,
                        borderRadius: 10,
                        marginTop: 4,
                        minWidth: 80,
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: isReceived ? '#2D6A4F' : '#63657B',
                          fontWeight: '500',
                        }}>
                        {status}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>

            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Other Logs */}
        {filteredLogs.map((log, index) => {
          if (log.type === 'Leave') {
            return (
              <View key={index} style={styles.card}>
                {/* Top Row: Dates and Leave Type */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.dateText}>
                    {index + 1}. {log.fromDate} - {log.toDate}
                    {'\n'}
                    {log.fromTime} - {log.toTime}
                  </Text>
                  <Text style={[styles.timeText, { color: '#63657B' }]}>
                    {log.leaveType}
                  </Text>
                </View>

                {/* Approvals Section */}
                <View
                  style={{
                    backgroundColor: '#F8F9FC',
                    padding: 12,
                    borderRadius: 10,
                    marginTop: 12,
                  }}>
                  <Text style={{ fontWeight: '600', color: '#63657B', marginBottom: 8 }}>
                    Approvals
                  </Text>

                  {/* Warden Approval */}
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                      <Text style={{ color: '#8C8D98' }}>Warden</Text>
                      <Text style={{ fontWeight: '500' }}>Warden Name</Text>
                    </View>
                    <Text style={{ color: '#2D6A4F', fontWeight: '500' }}>
                      Approved ✅
                    </Text>
                  </View>

                  {/* Mentor Approval */}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <View>
                      <Text style={{ color: '#8C8D98' }}>Mentor</Text>
                      <Text style={{ fontWeight: '500' }}>Mentor Name</Text>
                    </View>
                    <Text style={{ color: '#FF9F1C', fontWeight: '500' }}>
                      Waiting ⏱️
                    </Text>
                  </View>
                </View>

                {/* Cancel Button */}
                <TouchableOpacity style={[styles.cancelButton, { marginTop: 14 }]}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            );
          }

          // Render for other types (Meal, etc.)
          return (
            <View key={index} style={styles.card}>
              <Text style={styles.dateText}>
                {index + 1}. {log.date}
              </Text>
              <Text style={styles.timeText}>{log.time}</Text>
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const arrowStyles = StyleSheet.create({
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Optional: tweak as needed
    paddingHorizontal: 10,
    marginTop: 10,
  },
  arrow: {
    padding: 5,
  },
});

export default LogScreen;
