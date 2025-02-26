import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
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
  const [image, setImage] = useState<string | null>(null); // 이미지 상태 관리

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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* 🔹 상단바 (뒤로가기 버튼 + 회원정보 수정 제목) */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>회원정보 수정</Text>
        </View>

        <KeyboardAvoidingView behavior="height" style={styles.keyboardView}>
          <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">

            {/* 🔹 둥근 프로필 이미지 & 수정 가능한 텍스트 */}
            <View style={styles.profileContainer}>
              <Image
                source={image ? { uri: image } : require('@/assets/images/billida_icon.png')}
                style={styles.profileImage}
              />
              <TouchableOpacity onPress={pickImage}>
                <Text style={styles.profileEditText}>프로필 사진 수정</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>이름</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="이름을 입력하세요"
                placeholderTextColor="rgba(0, 0, 0, 0.4)"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>이메일</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="이메일을 입력하세요"
                placeholderTextColor="rgba(0, 0, 0, 0.4)"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>비밀번호</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputWithoutBorder}
                  placeholder="비밀번호를 입력해주세요"
                  placeholderTextColor="rgba(0, 0, 0, 0.4)"
                  secureTextEntry={secure}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setSecure(!secure)} style={styles.iconButton}>
                  <AntDesign name={secure ? 'eyeo' : 'eye'} size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        {/* 🔹 하단 수정완료 버튼 */}
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>수정완료</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginRight: 30,
  },
  keyboardView: {
    flex: 1,
    width: '100%',
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  
  /* 🔹 프로필 이미지 스타일 */
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100, // 원형 이미지
    borderWidth: 3, // 액자 스타일
    borderColor: '#ccc',
  },
  profileEditText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(106, 191, 64, 1)', // 파란색으로 클릭 가능한 느낌
  },

  inputGroup: {
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  inputContainer: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  inputWithoutBorder: {
    width: '100%',
    height: '100%',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  iconButton: {
    position: 'absolute',
    right: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: 'rgba(106, 191, 64, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileEdit;
