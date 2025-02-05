import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const signin_page = () => {
  /* 비밀번호 숨기기용*/
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  return (
    <View 
      style={styles.container}
      onStartShouldSetResponder={() => {
        if (Platform.OS !== 'web') {
          Keyboard.dismiss();
        }
        return false; // 터치 이벤트가 TextInput을 막지 않도록 설정
      }}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}>
        <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">

          {/* 1. 대표 이미지 */}
          <Image
            source={require('@/assets/images/hhr_billida_icon.png')} 
            style={styles.logo}
            resizeMode="contain"
          />

          {/* 2. 이메일 입력창 */}
          <TextInput
            style={styles.input}
            placeholder="이메일을 입력해주세요"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* 3. 비밀번호 입력창 */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputWithoutBorder} // 테두리 없는 스타일 적용}
              placeholder="비밀번호를 입력해주세요"
              secureTextEntry={secure}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setSecure(!secure)}
              style={styles.iconButton}
            >
              <AntDesign
                name={secure ? "eyeo" : "eye"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>

          {/* 4. 로그인 버튼 */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>로그인</Text>
          </TouchableOpacity>

          {/* 5. 회원가입 버튼 */}
          <TouchableOpacity>
            <Text style={styles.signupText}>계정이 없으신가요? 회원가입</Text>
          </TouchableOpacity>
          </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexGrow: 1, // 스크롤 가능하도록 설정
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  keyboardView: {
    flex: 1, // 키보드가 올라와도 레이아웃 유지
    width: '100%',
  },
  scrollView: {
    flexGrow: 1, // 스크롤이 필요한 경우 사용
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '80%', // 부모 크기의 80% 차지
    maxWidth: 300, // 최대 크기 제한
    height: 150, // 고정 높이로 설정하여 입력창이 줄어들지 않게 함
    marginBottom: 20, // 아래 입력창과 간격 추가
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
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
    marginBottom: 20,
    position: 'relative', // 아이콘의 기준점이 되는 컨테이너
  },
  inputWithoutBorder: {
    position: 'absolute', // 컨테이너 내부에 겹치도록 설정
    top: 0,
    left: 0,
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
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(106, 191, 64, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#007BFF',
    fontSize: 16,
  },
});

export default signin_page;
