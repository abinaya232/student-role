import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import LeaveIcon from '../../assets/LeaveIcon';
import styles from './ApplyLeaveStyles';

const ApplyLeaveButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Leave')} 
      >
        <LeaveIcon />
        <Text style={styles.cardText}>Apply Leave</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ApplyLeaveButton;
