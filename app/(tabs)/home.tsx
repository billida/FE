import React from 'react';
import "../../global.css";
import { View, Text, TouchableOpacity, TextInput, ScrollView,Button } from 'react-native';
import room_get from '../lib';
import RoomObject from '@/components/home_Product/home_Product';

const addProduct=()=>{
  console.log("히히");
};

const home=()=>{
  return (
    <View  className=' h-screen bg-[#FFFFFF]'>

      <TouchableOpacity
        className='flex items-center justify-center w-[64px] h-[64px] rounded-2xl bg-[#6ABF40] fixed bottom-20 right-10 z-10'
        onPress={addProduct}>
        <Text className='text-4xl text-center text-white p-0'>+</Text>
      </TouchableOpacity>
      <View className='h-[59px]'></View>


      <View className='border-b-2 border-[#CCCCCC]'>
        <TextInput
          className='self-center border rounded-xl border-[#CCCCCC] bg-[#F7F7F7] h-[52px] w-[361px] my-2.5 px-5 text-[#B3B3B3]'
          placeholder='현재 위치 근처에서 검색'
        />
        </View>
      <ScrollView>
        <View className="grid grid-cols-2 px-4">
          {room_get.rooms.map((room, index) => (
              <RoomObject key={index} product_image_url={room.url} product_name={room.name} location={room.location} price={Number(room.price)} />
          ))}
          <RoomObject product_image_url={"image"} product_name={"포터 탱커 숄더백"} location={"응암동"} price={100000}/>
        </View>
      </ScrollView>
        4
    </View>
  );
};

export default home;