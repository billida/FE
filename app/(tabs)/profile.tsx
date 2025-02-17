import React from 'react';
import { View,Text, Pressable } from 'react-native';


const profile = () => {
  return (
    <View className='h-screen bg-[#FFFFFF]'>
      <View className='h-[59px]'></View>

      <View className='h-[84px]'>
        프로필
      </View>
      <View className='h-[62px] rounded-lg my-[10px] mx-[16px] py-[10px] bg-[#F7F7F7] grid grid-cols-3 divide-x-2 divide-[#CCCCCC]'>
        <View className='flex justify-center items-center'>
          <Text className='font-bold text-lg'>18</Text>
          <Text className='text-xs'>빌리는 중</Text>
        </View>

        <View className='flex justify-center items-center'>
          <Text className='font-bold text-lg'>12</Text>
          <Text className='text-xs'>빌려주는 중</Text>
        </View>

        <View className='flex justify-center items-center'>
          <Text className='font-bold text-lg'>30</Text>
          <Text className='text-xs'>누적 거래</Text>
        </View>
      </View>
      <Pressable className='h-[52px]'>
        회원정보수정
      </Pressable>
      <Pressable className='h-[52px]'>
        로그아웃
      </Pressable>
      <Pressable className='h-[52px]'>
        탈퇴
      </Pressable>
      
    </View>
  );
};

export default profile;
