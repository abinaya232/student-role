import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // ✅ Import useNavigation
import styles from './TopbarStyles';
import NotifyIcon from '../../assets/Notification';
import {NotificationScreen} from '../../../src/Screen/Notifications/NotificationScreen';

export const Topbar = () => {
  const navigation = useNavigation(); // ✅ Use navigation hook
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* 🔹 Profile Icon */}
      <TouchableOpacity
        style={styles.circle}
        onPress={() => navigation.navigate('ProfileScreen')} // ✅ Navigate to ProfileScreen
      >
        <Text style={styles.initial}>V</Text>
      </TouchableOpacity>

      {/* 🔹 Notification Icon (Opens Modal) */}
      <TouchableOpacity
        style={styles.circle}
        onPress={() => setModalVisible(true)}>
        <NotifyIcon />
        <View style={styles.badge} />
      </TouchableOpacity>

      {/* 🔹 Notification Modal */}
      <NotificationScreen
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};
