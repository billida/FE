import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000000', // 선택된 탭 색상
        tabBarInactiveTintColor: '#B0B0B0', // 비활성화된 탭 색상
        tabBarStyle: {
          backgroundColor: 'white',
          height: 60, // 높이 조절 (아이콘과 텍스트가 잘 보이도록)
          paddingBottom: 5, // 여백 조정
        },
        tabBarLabelStyle: {
          fontSize: 12, // 글자 크기 조절
          marginTop: -5, // 아이콘과 텍스트 간격 조절
        },
        tabBarIconStyle: {
          marginBottom: 0, // 아이콘 위치 조정
        },
      }}
    >

      <Tabs.Screen
        name="home"
        options={{
          title: 'home',
          tabBarLabelPosition: "below-icon", // 제목을 아이콘 아래로 배치
          tabBarIcon: ({ color, size }) => <Entypo name="home" size={12} color={color}/>,
        }}
      />

      <Tabs.Screen
        name="product"
        options={{
          title: 'product',
          tabBarLabelPosition: "below-icon", // 제목을 아이콘 아래로 배치
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="shopping" size={12} color={color}  />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'chat',
          tabBarLabelPosition: "below-icon", // 제목을 아이콘 아래로 배치
          tabBarIcon: ({ color, size }) => <Entypo name="chat" size={12} color={color}/>,
        }}
      />


      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          tabBarLabelPosition: "below-icon", // 제목을 아이콘 아래로 배치
          tabBarIcon: ({ color, size }) => <Ionicons name="person" size={12} color={color}/>,
        }}
      />
    </Tabs>
  );
}
