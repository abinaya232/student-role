import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import GroupHeader from '../Date/Date'; // make sure this path is correct

const ChatDetailScreen = () => {
  const route = useRoute();
  const { chatName } = route.params;
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([
        ...messages,
        { id: Date.now().toString(), text: inputText, sender: 'user' },
      ]);
      setInputText('');
    }
  };

  const openGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && response.assets) {
        setMessages([
          ...messages,
          {
            id: Date.now().toString(),
            image: response.assets[0].uri,
            sender: 'user',
          },
        ]);
      }
    });
  };

  return (
    <View style={styles.container}>
      <GroupHeader groupName={chatName} />

      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === 'user' ? styles.userMessage : styles.otherMessage,
            ]}
          >
            {item.image ? (
              <Image source={{ uri: item.image }} style={styles.image} />
            ) : (
              <Text>{item.text}</Text>
            )}
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.mediaButton} onPress={openGallery}>
          <Text style={styles.mediaText}>📷</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendText}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};