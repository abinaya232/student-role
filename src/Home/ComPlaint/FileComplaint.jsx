import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FileIcon from '../../assets/FileIcon';
import styles from './FileComplaintStyles';

const FileComplaintButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('FileComplaint')} // Correct screen name
      >
        <FileIcon />
        <Text style={styles.cardText}>File Complaint</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FileComplaintButton;
