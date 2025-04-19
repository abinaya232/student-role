// CotSelectionScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {useRoute} from '@react-navigation/native';
const cots = ['A', 'B', 'C', 'D'];

export default function CotSelectionScreen() {
  const [selectedCot, setSelectedCot] = useState(null);
  const route = useRoute();
  const { selectedHostels } = route.params || {};
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the cot</Text>
      <Text style={styles.room}>
  Room no: {selectedHostels?.[0]?.roomNo || 'N/A'}
</Text>

      <View style={styles.layout}>
        {cots.map(cot => (
          <TouchableOpacity
            key={cot}
            onPress={() => setSelectedCot(cot)}
            style={[
              styles.cot,
              selectedCot === cot && styles.cotSelected
            ]}
          >
            <Text>{cot}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.bookBtn}>
        <Text style={styles.bookText}>Book cot</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 18, fontWeight: 'bold' },
  room: { marginVertical: 10 },
  layout: { flexDirection: 'row', flexWrap: 'wrap', width: 200, justifyContent: 'space-around' },
  cot: {
    width: 50, height: 50, borderRadius: 10, margin: 10,
    justifyContent: 'center', alignItems: 'center', backgroundColor: '#eee'
  },
  cotSelected: { backgroundColor: '#90caf9' },
  bookBtn: { backgroundColor: '#3949ab', padding: 10, marginTop: 20, borderRadius: 5 },
  bookText: { color: '#fff', textAlign: 'center' },
});
