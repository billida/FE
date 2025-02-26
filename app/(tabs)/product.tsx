import React from 'react';
import "../../global.css";
import { View, ScrollView, Pressable, TextInput } from 'react-native';
import room_get from '../lib';
import StuffObject from '@/components/stuff_Product/stuff_Product';


const product = () => {
  return (
    <View className='flex  h-full bg-white'>
      <ScrollView>
        <View className="grid grid-cols-3 p-4">
          {room_get.rooms.map((room, index) => (
              <StuffObject key={index} product_image_url={room.url} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default product;
