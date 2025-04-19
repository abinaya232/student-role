import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackArrow from '../../../src/assets/BackArrowIcon';
import styles from './ProfileScreenStyles';

export const ProfileScreen = () => {
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
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('../../../src/assets/image.png')}
          style={styles.profileImage}
        />
      </View>

      {/* Profile Details */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>   Name</Text>
        <Text style={styles.value}>  Student Name</Text>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Department & Year</Text>
            <Text style={styles.value}>CT & II</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Group</Text>
            <Text style={styles.value}>Group-1</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Roll No</Text>
            <Text style={styles.value}>7376232CT001</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Contact No</Text>
            <Text style={styles.value}>9876543210</Text>
          </View>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => alert('Logged out!')}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

// export default ProfileScreen;
