import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './FileComplaintStyles';
import BackArrow from '../../../assets/BackArrowIcon';
import { useNavigation } from '@react-navigation/native';
import MaintenanceScreen from '../MaintenanceForm/MaintenanceScreen';

export const FileComplaintScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <BackArrow width={24} height={24} fill="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Maintenance</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <MaintenanceScreen navigation={navigation} />
      </ScrollView>
    </View>
  );
};
