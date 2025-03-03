import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

type RoomProps = {
  product_image_url: string; // 사진 URL
  product_name: string;
  location: string;
  price: number;
  onPress: () => void; // ✅ 클릭 이벤트 추가
};

const RoomObject = ({ product_image_url, product_name, location, price, onPress }: RoomProps) => {
  return (
    <View style={styles.container}>
      {/* 상품 이미지 */}
      {/* ✅ 이미지 클릭 시에만 이동 */}
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <Image style={styles.productImage} source={require('@/components/ui/가방.png')} />
      </TouchableOpacity>
      {/* <Image style={styles.productImage} source={require('@/components/ui/가방.png')} /> */}
      
      {/* 상품 정보 */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product_name}</Text>

        <View style={styles.infoRow}>
          <Image style={styles.icon} source={require('@/components/ui/location_on.png')} />
          <Text style={styles.infoText}>{location}</Text>
        </View>

        <View style={styles.infoRow}>
          <Image style={styles.icon} source={require('@/components/ui/calendar_today.png')} />
          <Text style={styles.infoText}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 270, // ✅ 높이 줄임 (기존 285 → 270)
    marginVertical: 3, // ✅ 위아래 여백 줄이기 (기존보다 작게)
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
  },
  productImage: {
    height: 180, // ✅ 이미지 높이 줄임 (기존 193 → 180)
    width: "100%",
  },
  detailsContainer: {
    height: 90, // ✅ 기존 92 → 90으로 줄임
    paddingVertical: 5, // ✅ 내부 여백 줄이기
    justifyContent: "space-around",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 14, // ✅ 아이콘 크기 줄이기 (기존 16 → 14)
    width: 12,
    marginRight: 4,
  },
  infoText: {
    fontSize: 14, // ✅ 글자 크기 줄이기 (기존보다 살짝 작게)
  },
});

export default RoomObject;
