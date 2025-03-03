import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // 아이콘 사용
import { useNavigation } from "@react-navigation/native";

const StuffDetailScreen = () => {
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);

  // 샘플 데이터
  const item = {
    image: "https://via.placeholder.com/300", // 이미지 URL (샘플)
    name: "포터 탱커 숄더백",
    location: "응암동",
    rentalFee: "100,000원 / 주",
    rentalPeriod: "3달",
    deposit: "150,000원",
    description: "몇번 사용 안했고, 사진과 상태 동일합니다. 학교 다닐 때, 여행 다닐 때 사용하면 멋지고 좋아요. 특히 사진 잘 나옵니다. ",
  };

  return (
    <View style={styles.container}>
      {/* 상단바 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
          <Ionicons name={isLiked ? "heart" : "heart-outline"} size={24} color={isLiked ? "red" : "black"} />
        </TouchableOpacity>
      </View>

      {/* 구분선 */}
      <View style={styles.separator} />

      {/* 물품 이미지 */}
      <Image source={{ uri: item.image }} style={styles.image} />

      {/* 구분선 */}
      <View style={styles.separator} />

      {/* 물품 정보 */}
      <View style={styles.details}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.info}>📍 {item.location}</Text>
        <Text style={styles.info}>💰 렌탈비: {item.rentalFee}</Text>
        <Text style={styles.info}>⏳ 대여 기간: {item.rentalPeriod}</Text>
        <Text style={styles.info}>🔐 보증금: {item.deposit}</Text>
      </View>

      {/* 게시글 */}
      <View style={styles.post}>
        <Text style={styles.postContent}>{item.description}</Text>
      </View>

      {/* 하단 버튼 */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>거래 신청</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 8,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  details: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  info: {
    fontSize: 16,
    color: "#555",
    marginVertical: 4,
  },
  post: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  postContent: {
    fontSize: 16,
    color: "#444",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 16,
    alignItems: "center",
    margin: 16,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default StuffDetailScreen;
