import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import ApplyLeaveButton from '../../Home/ApplyLeave/ApplyLeave';
import FileComplaintButton from '../../Home/ComPlaint/FileComplaint';
import styles from './HomeOptionsStyles';
import Others from '../Others/Others';
import ScanIcon from '../../assets/ScanIcon';
import MealIcon from '../../assets/MealIcon';
import {MealMenuModal} from '../../Screen/MealMenu/MealMenuModal'; // Import the modal component

export const HomeOptions = () => {
  const [isMealModalVisible, setMealModalVisible] = useState(false); // 🔹 State for modal

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <FileComplaintButton />
      </View>
      <View style={styles.buttonWrapper}>
        <ApplyLeaveButton />
      </View>
      <View style={styles.buttonWrapper}>
        <Others />
      </View>
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity style={styles.floatingButton}>
          <ScanIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => setMealModalVisible(true)}>
          <MealIcon />
        </TouchableOpacity>
      </View>

      {/* Meal Menu Modal */}
      <MealMenuModal
        visible={isMealModalVisible}
        onClose={() => setMealModalVisible(false)}
      />
    </View>
  );
};
