import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import NotifyManIcon from '../../assets/NotifyManIcon';
import styles from '../Notifications/NotifyStyles';

export const NotificationScreen = ({visible, onClose}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Notification</Text>
            <TouchableOpacity onPress={handleCloseDetails}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Summary View */}
          {!showDetails ? (
            <TouchableOpacity
              onPress={handleShowDetails}
              style={styles.touchWrapper}>
              <NotifyManIcon style={styles.man} />
              <Text style={styles.noNotificationText}>
                There is no notification right now
              </Text>
              <Text style={styles.subText}>
                We'll notify you when you have notifications
              </Text>
            </TouchableOpacity>
          ) : (
            <>
              <Text style={styles.date}>07-03-2025</Text>

              {/* Complaint */}
              <View style={styles.notificationCard}>
                <View style={styles.rowBetween}>
                  <Text style={styles.type}>Complaint</Text>
                  <TouchableOpacity>
                    <Text style={styles.cross}>✕</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.rowBetween}>
                  <Text style={styles.description}>Electric issue</Text>
                  <Text style={styles.statusResolved}>Resolved</Text>
                </View>
              </View>

              {/* Leave */}
              <View style={styles.notificationCard}>
                <View style={styles.rowBetween}>
                  <Text style={styles.type}>Leave</Text>
                  <TouchableOpacity>
                    <Text style={styles.cross}>✕</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.rowBetween}>
                  <Text style={styles.description}>05:00 PM - 06:00 PM</Text>
                  <Text style={styles.statusApproved}>Approved</Text>
                </View>
              </View>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};
