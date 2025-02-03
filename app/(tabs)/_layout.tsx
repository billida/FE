import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>

      <Tabs.Screen
        name="chat"
        options={{
          title: 'chat',
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'home',
        }}
      />
      <Tabs.Screen
        name="product"
        options={{
          title: 'product',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
        }}
      />
    </Tabs>
  );
}
