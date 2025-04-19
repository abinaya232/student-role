import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity, Pressable} from 'react-native';
import styles from './RoomChangeModalStyles';
const RoomChangeModal = ({visible, onClose}) => {
  const [roomCount, setRoomCount] = useState(0);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Room changing</Text>

          <View style={styles.row}>
            <Text style={styles.label}>
              Student name <Text style={styles.value}>(7376232IT182)</Text>
            </Text>
            <View style={styles.counter}>
              <TouchableOpacity
                onPress={() => setRoomCount(Math.max(0, roomCount - 1))}>
                <Text style={styles.counterBtn}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterValue}>{roomCount}</Text>
              <TouchableOpacity onPress={() => setRoomCount(roomCount + 1)}>
                <Text style={styles.counterBtn}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.detailText}>
            Hostel Name : <Text style={styles.label}>Nil </Text>| Floor :{' '}
            <Text style={styles.label}>Nil </Text>
          </Text>
          <Text style={styles.detailText}>
            Room.no : <Text style={styles.label}>Nil </Text> | Cot :{' '}
            <Text style={styles.label}>Nil </Text>
          </Text>

          <View style={styles.buttonRow}>
            <Pressable onPress={onClose}>
              <Text style={styles.cancelBtn}>Cancel</Text>
            </Pressable>
            <Pressable
              disabled={roomCount === 0}
              style={[
                styles.requestBtnWrap,
                roomCount === 0 && {backgroundColor: '#ccc'},
              ]}
              onPress={() => {
                // Handle request submission
                onClose();
              }}>
              <Text style={styles.requestBtn}>Request</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RoomChangeModal;
