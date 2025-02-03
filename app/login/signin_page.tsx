import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const signin_page = () => {
  /* 비밀번호 숨기기용*/
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.container}>
      {/* 1. 대표 이미지 */}
      <Image
        source={require('@/assets/images/hhr_billida_icon.png')} 
        style={styles.logo}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
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
    flex: 1, // 남은 공간을 채우도록 설정
    fontSize: 16,
    padding: 0, // 추가 여백 제거
    margin: 0, // 추가 여백 제거
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
