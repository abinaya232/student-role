import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Topbar} from '../../Home/Topbar/Topbar';
import GroupIcon from '../../assets/GroupIcon';
import styles from './ChatScreenStyles';

const chatData = [
  {
    id: '1',
    name: 'Warden',
    message: 'Announcement : Assemble at...',
    time: '3:15 pm',
    unread: 1,
    image: require('../../../src/assets/warden.png'),
  },
  {
    id: '2',
    name: 'Roommates',
    message: 'Photo',
    time: '01-02-2025',
    unread: 0,
  },
];

const ChatScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => {
        if (item.name === 'Warden') {
          navigation.navigate('WardenChatScreen');
        }
      }}>
      <View
        style={[
          styles.profileContainer,
          item.name === 'Warden' && styles.wardenBackground,
          item.name === 'Roommates' && styles.groupBackground,
        ]}>
        {item.name === 'Warden' ? (
          <Image source={item.image} style={styles.wardenImage} />
        ) : item.name === 'Roommates' ? (
          <GroupIcon style={styles.groupIcon} />
        ) : null}
      </View>
      <View style={styles.chatDetails}>
        <View style={styles.chatTitle}>
          <Text style={styles.chatName}>{item.name}</Text>
        </View>
        <Text style={styles.chatMessage} numberOfLines={1}>
          {item.message}
        </Text>
      </View>
      <View style={styles.chatMeta}>
        <Text style={styles.chatTime}>{item.time}</Text>
        {item.unread > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unread}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Topbar navigation={navigation} />
      <Text style={styles.chat}>Chat</Text>

      <FlatList
        data={chatData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ChatScreen;
