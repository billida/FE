import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle:{
          backgroundColor: '#FFFFFF',
          height: 66,
          borderTopColor: '#CCCCCC',
          
        },
        tabBarLabelStyle:{
          fontSize:12,
          color:'#808080',
        }
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: '홈',
        }}
      />

      <Tabs.Screen
        name="product"
        options={{
          title: '물품',
        }}
      />      
      
      <Tabs.Screen
        name="chat"
        options={{
          title: '채팅',
        }}
      />


      <Tabs.Screen
        name="profile"
        options={{
          title: '프로필',
        }}
      />
    </Tabs>
  );
}
