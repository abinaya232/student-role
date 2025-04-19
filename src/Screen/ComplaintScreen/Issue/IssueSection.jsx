import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import styles from './IssueStyles';

const IssueSection = () => {
  const [issue, setIssue] = useState('');
  const navigation = useNavigation(); // Use navigation

  const handleCancel = () => {
    setIssue('');
  };

  const handleSubmit = () => {
    // Replace this with your submission logic
    console.log('Submitted issue:', issue);

    // Navigate to Complaint screen
    navigation.navigate('LogScreen', { type: 'Complaint' });
  };

  return (
    <View style={styles.section}>
      <Text style={styles.label}>
        Issue <Text style={styles.required}>*</Text>
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your issue"
        placeholderTextColor="#B0B0B0"
        multiline
        numberOfLines={4}
        value={issue}
        onChangeText={setIssue}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={handleCancel}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IssueSection;
