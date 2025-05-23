import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProfileCardStyles';
import PhoneIcon from '../../assets/Phone';
import ProfCalendar from '../../assets/Calendar1';

export const ProfileCard = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.profileText}>Profile</Text>
        <View style={styles.calendarWrapper}>
  <ProfCalendar width={25} height={25} />
</View>

      </View>

      {/* Profile Box */}
      <View style={styles.profileBox}>
        {/* Left Section: Student Details */}
        <View style={styles.leftContainer}>
          <Text style={styles.title}>Student Name</Text>
          <Text style={styles.subtitle}>B.Tech - CT | 2nd year</Text>

          <Text style={styles.text}>
            <Text style={styles.bold}>Hostel : </Text>Ganga
          </Text>

          <View style={styles.row}>
            <Text style={styles.text}>
              <Text style={styles.bold}>Warden : </Text>Warden Name 
            </Text>
            <PhoneIcon style={styles.callIcon} width={18} height={18} />
          </View>

          <Text style={styles.text}>
            <Text style={styles.bold}>Room : </Text>203(C)
          </Text>
        </View>

        {/* Right Section: Profile Image and Info */}
        <View style={styles.right}>
          <Image
            source={require('../../assets/image.png')}
            style={styles.profileImage}
          />
          <Text style={styles.rollNumber}>7376232CT001</Text>
          <Text style={styles.group}>Group - 1</Text>
        </View>
      </View>
    </View>
  );
};
