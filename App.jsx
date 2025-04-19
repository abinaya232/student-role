import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';

import { ProfileScreen } from './src/Screen/ProfileScreen/ProfileScreen';
import { NotificationScreen } from './src/Screen/Notifications/NotificationScreen';
import { ApplyLeaveForm } from './src/Screen/LeaveForm/ApplyLeaveForm';
import { FileComplaintScreen } from './src/Screen/ComplaintScreen/Main/FileComplaintScreen';
import { OthersScreen } from './src/Screen/OthersScreen/OthersScreen';
import { LogScreen } from './src/Screen/Logs/LogScreen';
import ChatScreen from './src/Chat/Chats/ChatScreen';
import WardenChatScreen from './src/Chat/Warden/WardenChatScreen';
import RoomScreen from './src/Screen/Roombooking/Roombooking';
import CotSelectionScreen from './src/Screen/Solo/Screen/CotSelection';
import HostelSelectionScreen from './src/Screen/Solo/Screen/HostelSelection';
import OthersComplaint from './src/Screen/ComplaintScreen/OthersComplaint/OthersComplaint';

import HomeIcon from './src/assets/HomeIcon';
import HomeIconActive from './src/assets/HomeIconActive';
import LogIcon from './src/assets/Icon';
import LogIconActive from './src/assets/LogIconActive';
import ChatIcon from './src/assets/Chat';
import ChatIconActive from './src/assets/ChatIconActive';
import BedIcon from './src/assets/BedIcon';

import { Topbar } from './src/Home/Topbar/Topbar';
import { Biometric } from './src/Home/Biometric/Biometric';
import { ProfileCard } from './src/Home/ProfileCard/ProfileCard';
import { HomeOptions } from './src/Home/Options/HomeOptions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// ✅ Home Stack Navigator
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Leave" component={ApplyLeaveForm} />
      <Stack.Screen name="FileComplaint" component={FileComplaintScreen} />
      <Stack.Screen name="Others" component={OthersScreen} />
      <Stack.Screen name="OtherComplaint" component={OthersComplaint}/>

      <Stack.Screen name="RoomScreen" component={RoomScreen} />
      <Stack.Screen name="HostelSelectionScreen" component={HostelSelectionScreen} />
      <Stack.Screen name="CotSelectionScreen" component={CotSelectionScreen} />
    </Stack.Navigator>
  );
};

// ✅ Chat Stack Navigator
const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatMain" component={ChatScreen} />
      <Stack.Screen name="WardenChatScreen" component={WardenChatScreen} />
    </Stack.Navigator>
  );
};

// ✅ Home Screen (Contains Topbar)
const HomeScreen = () => {
  const navigation = useNavigation();
  
  const handleRoomScreenNavigation = () => {
    navigation.navigate('RoomScreen');
  };

  const handleProfileScreenNavigation = () => {
    navigation.navigate('ProfileScreen');
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Topbar />
        <TouchableOpacity
          onPress={handleRoomScreenNavigation}
          style={{
            position: 'absolute',
            top: 10,
            left: 280,
            width: 42,
            height: 42,
            borderRadius: 20,
            backgroundColor: '#2A366333', // Adjust color as needed
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <BedIcon width={25} height={25} />
        </TouchableOpacity>
        
        <ProfileCard />
        <Biometric />
        <HomeOptions />
      </SafeAreaView>
    </View>
  );
};

// ✅ Bottom Tab Navigator
const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSize = 25;
          return (
            <View style={{ alignItems: 'center', justifyContent: 'center', width: 40, height: 40 }}>
              {route.name === 'Home' ? (
                focused ? <HomeIconActive width={iconSize} height={iconSize} /> : <HomeIcon width={iconSize} height={iconSize} />
              ) : route.name === 'Log' ? (
                focused ? <LogIconActive width={iconSize} height={iconSize} /> : <LogIcon width={iconSize} height={iconSize} />
              ) : focused ? (
                <ChatIconActive width={iconSize} height={iconSize} />
              ) : (
                <ChatIcon width={iconSize} height={iconSize} />
              )}
            </View>
          );
        },
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#2A3663',
        tabBarInactiveTintColor: '#2A3663',
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Log" component={LogScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Chat" component={ChatStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

// ✅ Global Stack Navigator (Wraps Everything)
const GlobalStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={AppTabs} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="RoomScreen" component={RoomScreen} />
      <Stack.Screen name="LogScreen" component={LogScreen} />
    </Stack.Navigator>
  );
};

// ✅ Main App Component
const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <NavigationContainer>
        <GlobalStack />
      </NavigationContainer>
    </View>
  );
};

export default App;
