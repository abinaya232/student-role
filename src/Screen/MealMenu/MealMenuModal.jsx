import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './MealMenuStyles';
import BioCalendar from '../../assets/Calendar2';

export const MealMenuModal = ({ visible, onClose }) => {
  const [selectedMeal, setSelectedMeal] = useState("Dinner");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(false); 
  const [feedbackText, setFeedbackText] = useState("");

  const mealMenus = {
    Breakfast: ["Idli", "Dosa", "Sambar", "Coconut Chutney", "Tea/Coffee"],
    Lunch: ["Rice", "Sambar", "Vegetable Curry", "Curd", "Papad"],
    Dinner: ["Bread Jam", "Butter", "Semiya Uppuma", "Coconut Chutney", "Coffee/Milk/Tea"],
  };

  const formatDate = (date) => {
    let day = date.getDate().toString().padStart(2, "0");
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const getDayOfWeek = (date) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
  };

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
         
          <View style={styles.header}>
            <Text style={styles.title}>Menu</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
  <Text style={styles.closeText}>✕</Text>
</TouchableOpacity>

          </View>

         
          <View style={styles.dateRow}>
            <Text style={styles.dayText}>{getDayOfWeek(selectedDate)}</Text>
            <Text style={styles.dateText}>({formatDate(selectedDate)})</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <BioCalendar />
            </TouchableOpacity>
          </View>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={(event, date) => {
                setShowDatePicker(false);
                if (date) setSelectedDate(date);
              }}
            />
          )}

          {/* Meal Selection */}
          <View>
  <View style={styles.mealTabs}>
    {["Breakfast", "Lunch", "Dinner"].map((meal) => (
      <TouchableOpacity key={meal} onPress={() => setSelectedMeal(meal)}>
        <Text style={[styles.mealTab, selectedMeal === meal && styles.activeTab]}>
          {meal}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
  
  {/* 🔹 Minute Line Below Meal Tabs */}
  <View style={styles.divider} />
</View>

          {/* Meal Menu List */}
          <FlatList
            data={mealMenus[selectedMeal]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Text style={styles.menuItem}>{item}</Text>}
            contentContainerStyle={[styles.menuList, { paddingLeft: 0 }]}
          />

          {/* Feedback Button */}
          <TouchableOpacity 
            style={styles.feedbackButton} 
            onPress={() => setFeedbackVisible(true)} // 🔹 Opens the feedback form
          >
            <Text style={styles.feedbackButtonText}>Give Feedback</Text>
          </TouchableOpacity>

          {/* Feedback Form Modal */}
          {feedbackVisible && (
            <Modal transparent={true} animationType="slide">
              <View style={styles.feedbackOverlay}>
                <View style={styles.feedbackContainer}>
                  <Text style={styles.feedbackTitle}>Your Feedback</Text>
                  <TextInput
                    style={styles.feedbackInput}
                    placeholder="Write your feedback here..."
                    placeholderTextColor="gray"
                    multiline={true}
                    value={feedbackText}
                    onChangeText={setFeedbackText}
                  />
                  <View style={styles.feedbackButtonRow}>
                    <TouchableOpacity 
                      style={styles.submitButton} 
                      onPress={() => { 
                        console.log("Feedback Submitted:", feedbackText);
                        setFeedbackVisible(false); // 🔹 Close after submission
                      }}
                    >
                      <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.cancelButton} 
                      onPress={() => setFeedbackVisible(false)} // 🔹 Close without submitting
                    >
                      
                      <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          )}
        </View>
      </View>
    </Modal>
  );
};
