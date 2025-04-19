import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import styles from './MaintenanceStyles';
import UploadImageSection from '../UploadImage/UploadImageSection';
import IssueSection from '../Issue/IssueSection';
import OthersComplaint from '../OthersComplaint/OthersComplaint';

const complaintOptions = ['Electrical', 'Damage', 'Theft', 'Cleanliness'];

const MaintenanceScreen = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [activeTab, setActiveTab] = useState('Room');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => setActiveTab('Room')}>
            <Text style={activeTab === 'Room' ? styles.activeTab : styles.inactiveTab}>
              Room Complaint
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('Others')}>
            <Text style={activeTab === 'Others' ? styles.activeTab : styles.inactiveTab}>
              Others
            </Text>
          </TouchableOpacity>
        </View>

        {/* Room Complaint UI */}
        {activeTab === 'Room' && (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionLabel}>
                Complaint Type <Text style={styles.required}>*</Text>
              </Text>

              <View style={styles.optionsContainer}>
                {complaintOptions.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.radioContainer}
                    onPress={() => setSelectedType(option)}
                  >
                    <View style={styles.radioCircle}>
                      {selectedType === option && <View style={styles.selectedDot} />}
                    </View>
                    <Text style={styles.radioText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <UploadImageSection />
            <IssueSection />
          </>
        )}

        {/* Others Complaint UI */}
        {activeTab === 'Others' && <OthersComplaint />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MaintenanceScreen;
