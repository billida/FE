import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';

const ProfileEdit = () => {
  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState<string | null>(null);

  // 이미지 업로드 함수
  const pickImage = () => {
    ImagePicker.launchImageLibrary(
      { mediaType: 'photo', includeBase64: false },
      (response) => {
        if (response.assets && response.assets.length > 0) {
          setImage(response.assets[0].uri || null);
        }
      }
    );
  };

  const handleSubmit = () => {
    console.log({ name, email, password, image });
    alert('회원정보가 수정되었습니다!');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">

        {/* 🔹 상단바 (뒤로가기 버튼 + 회원정보 수정 제목) */}
        <View className="flex-row items-center h-16 border-b border-gray-300 px-4">
          <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-lg font-bold flex-1 text-center">회원정보 수정</Text>
        </View>

        <KeyboardAvoidingView behavior="height" className="flex-1">
          <ScrollView contentContainerStyle={{ paddingBottom: 80 }} keyboardShouldPersistTaps="handled">
            
            {/* 🔹 둥근 프로필 이미지 & 수정 가능한 텍스트 */}
            <View className="items-center my-6">
              <Image
                source={image ? { uri: image } : require('@/assets/images/billida_icon.png')}
                className="w-1 h-1 rounded-full border-4 border-gray-300"
              />
              <TouchableOpacity onPress={pickImage}>
                <Text className="mt-2 text-blue-500 text-base font-bold">프로필 사진 수정</Text>
              </TouchableOpacity>
            </View>

            {/* 🔹 입력 필드 */}
            <View className="px-6">
              <Text className="text-sm font-bold mb-2">이름</Text>
              <TextInput
                className="w-full h-12 border border-gray-300 rounded-lg px-3 mb-4"
                value={name}
                onChangeText={setName}
                placeholder="이름을 입력하세요"
                placeholderTextColor="rgba(0, 0, 0, 0.4)"
              />

              <Text className="text-sm font-bold mb-2">이메일</Text>
              <TextInput
                className="w-full h-12 border border-gray-300 rounded-lg px-3 mb-4"
                value={email}
                onChangeText={setEmail}
                placeholder="이메일을 입력하세요"
                placeholderTextColor="rgba(0, 0, 0, 0.4)"
              />

              <Text className="text-sm font-bold mb-2">비밀번호</Text>
              <View className="w-full h-12 border border-gray-300 rounded-lg flex-row items-center relative">
                <TextInput
                  className="flex-1 px-3"
                  placeholder="비밀번호를 입력해주세요"
                  placeholderTextColor="rgba(0, 0, 0, 0.4)"
                  secureTextEntry={secure}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setSecure(!secure)} className="absolute right-4">
                  <AntDesign name={secure ? 'eyeo' : 'eye'} size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        {/* 🔹 하단 수정완료 버튼 */}
        <View className="absolute bottom-0 w-full bg-white border-t border-gray-300 p-4">
          <TouchableOpacity className="w-full h-12 bg-green-500 justify-center items-center rounded-lg" onPress={handleSubmit}>
            <Text className="text-white text-lg font-bold">수정완료</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default ProfileEdit;
