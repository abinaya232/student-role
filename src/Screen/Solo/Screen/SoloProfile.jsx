// SoloProfileScreen.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function SoloProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Room booking</Text>
      <View style={styles.card}>
        <Image source={require('../../assets/image.png')} style={styles.image} />
        <View>
          <Text>Student Name</Text>
          <Text>B.Tech - CT | 2nd year</Text>
          <Text>Contact: 9876543210</Text>
          <Text style={styles.id}>737623CT001</Text>
        </View>
      </View>
      <Button title="Register" onPress={() => navigation.navigate('HostelSelection')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold' },
  card: { flexDirection: 'row', marginVertical: 20, alignItems: 'center' },
  image: { width: 80, height: 80, borderRadius: 40, marginRight: 15 },
  id: { marginTop: 5, color: '#555' },
});
