import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "expo-router";
import { Ionicons, Entypo } from "@expo/vector-icons";
import * as ImagePicker from "react-native-image-picker";

export default function StuffUpload() {
  const navigation = useNavigation();
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [rentalPeriod, setRentalPeriod] = useState("");
  const [deposit, setDeposit] = useState("");
  const [description, setDescription] = useState("");

  // 이미지 업로드 함수 (1개만 가능)
  const pickImage = () => {
    ImagePicker.launchImageLibrary(
      { mediaType: "photo", includeBase64: false },
      (response) => {
        if (response.assets && response.assets.length > 0) {
          setImage(response.assets[0].uri || null);
        }
      }
    );
  };

  // 물건 등록 함수
  const handleSubmit = () => {
    console.log({
      title,
      location,
      price,
      rentalPeriod,
      deposit,
      description,
      image,
    });
    alert("물건이 등록되었습니다!");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ paddingBottom: 50 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* 헤더 */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>물건 등록</Text>
          </View>

          {/* 이미지 업로드 */}
          <TouchableOpacity style={styles.imageUpload} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image }} style={styles.uploadedImage} />
            ) : (
              <Entypo name="camera" size={30} color="gray" />
            )}
          </TouchableOpacity>

          {/* 입력 폼 */}
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>제목</Text>
              <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="제목을 입력하세요"
                placeholderTextColor="rgba(0, 0, 0, 0.4)"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>거래 장소</Text>
              <TextInput
                style={styles.input}
                value={location}
                onChangeText={setLocation}
                placeholder="거래 장소를 입력하세요"
                placeholderTextColor="rgba(0, 0, 0, 0.4)"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>가격 (원)</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={price}
                onChangeText={setPrice}
                placeholder="가격을 입력하세요"
                placeholderTextColor="rgba(0, 0, 0, 0.4)"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>대여 기간</Text>
              <TextInput
                style={styles.input}
                value={rentalPeriod}
                onChangeText={setRentalPeriod}
                placeholder="대여 기간을 입력하세요"
                placeholderTextColor="rgba(0, 0, 0, 0.4)"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>보증금 (원)</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={deposit}
                onChangeText={setDeposit}
                placeholder="보증금을 입력하세요"
                placeholderTextColor="rgba(0, 0, 0, 0.4)"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>설명</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={description}
                onChangeText={setDescription}
                placeholder="설명을 입력하세요"
                placeholderTextColor="rgba(0, 0, 0, 0.4)"
                multiline
              />
            </View>
          </View>

          {/* 등록 버튼 */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>물건 등록</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// 스타일 정의
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    position: "relative",
    borderBottomWidth: 1, // ⬅️ 구분선 추가
    borderBottomColor: "#ddd", // ⬅️ 연한 회색 선
    backgroundColor: "#fff", // 배경색 추가
  },
  backButton: {
    position: "absolute",
    left: 0,
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageUpload: {
    alignSelf: "flex-start",
    backgroundColor: "#f0f0f0",
    width: 60,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  uploadedImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  form: {
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "rgba(106, 191, 64, 1)",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
