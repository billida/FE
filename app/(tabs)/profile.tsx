import React from 'react';
import { View,Text, Pressable,Image } from 'react-native';


const profile = () => {
  return (
    <View className='h-screen bg-[#FFFFFF]'>
      <View className='h-[59px]'></View>

      <View className='h-[84px] flex-row items-center pl-5'>
        <Image
          style={{height:55, width:55, borderRadius:100}}
          source={require('@/components/ui/profileimage.png')}
        />
        <View className='flex pl-5'>
            <Text className='font-bold'>사용자이름</Text>
            <Text>useremail.email.com</Text>
        </View>
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


      <View className='flex-row items-center py-5 pl-5'>
        <Image
          style={{height:15, width:15}}
          source={require('@/components/ui/account_box.png')}
        />
        <Pressable>
          <Text className='text-center'>   회원정보 수정</Text>
        </Pressable>
      </View>

      <View className='flex-row items-center py-5 pl-5'>
        <Image
          style={{height:15, width:15}}
          source={require('@/components/ui/logout.png')}
        />

        <Pressable>
          <Text className='text-center'>   로그아웃</Text>
        </Pressable>
      </View>

      <View className='flex-row items-center py-5 pl-5'>
        <Image
          style={{height:15, width:15}}
          source={require('@/components/ui/disabled_by_default.png')}
        />
        <Pressable>
          <Text className='text-center'>   탈퇴</Text>
        </Pressable>
      </View>

    </View>
  );
};

export default profile;
