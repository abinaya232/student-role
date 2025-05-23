import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../Others/OthersStyle';
import OthersIcon from '../../assets/OtherIcon';

const Others = () => {
  console.log('Others Component Rendered'); 
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Others')}>
        <OthersIcon />
        <Text style={styles.cardText}>Others</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Others;
