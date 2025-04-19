import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GroupHeader = ({ groupName }) => {
  const [showDate, setShowDate] = useState(true);

  const today = new Date();
  const dateString = today.toLocaleDateString(); // e.g., 4/19/2025
  const dayString = today.toLocaleDateString(undefined, { weekday: 'long' }); // e.g., Saturday

  return (
    <TouchableOpacity onPress={() => setShowDate(!showDate)} style={styles.container}>
      <Text style={styles.groupName}>{groupName}</Text>
      <Text style={styles.dateText}>
        {showDate ? dateString : dayString}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  groupName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
});

export default GroupHeader;
