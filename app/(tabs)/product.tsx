import React from 'react';
import "../../global.css";
import { View, Text, Pressable, TextInput } from 'react-native';
import room_get from "./lib";
import { RoomObject } from '@/components/home_Product/home_Product';


const product = () => {
  return (
    <View  className='h-screen bg-[#FFFFFF]'>
      <View className='h-[59px]'></View>

      <View>
        <TextInput
          className='self-center border rounded-xl border-[#CCCCCC] bg-[#F7F7F7] h-[52px] w-[361px] my-2.5 px-5 text-[#B3B3B3]'
          placeholder='현재 위치 근처에서 검색'
        />
        </View>

      <View className="grid grid-cols-2 grid-rows-[198px_198px] p-4">
        {room_get.rooms.map((room, index) => (
            <RoomObject key={index} product_image_url={"image"} product_name={"포터 탱커 숄더백"} location={"응암동"} price={100000} />
        ))}
        <RoomObject product_image_url={"image"} product_name={"포터 탱커 숄더백"} location={"응암동"} price={100000}/>
      </View>
        
    </View>
  );
};

export default product;
